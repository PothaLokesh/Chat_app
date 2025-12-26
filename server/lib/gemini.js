import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Cache the model name so we don't fetch it every time
let cachedModelName = null;

export const analyzeMessageForEvent = async (text) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Dynamic Model Selection
    if (!cachedModelName) {
      try {
        // We use the raw API to list models because the SDK helper for listing is sometimes strict/different
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        const validModel = data.models?.find(m => m.name.includes("gemini") && m.supportedGenerationMethods?.includes("generateContent"));

        if (validModel) {
          // The API returns names like "models/gemini-pro", the SDK usually wants just "gemini-pro", 
          // but passing the full "models/..." string often works or we strip it.
          // Safest to strip "models/" prefix if present for SDK.
          cachedModelName = validModel.name.replace("models/", "");
          console.log(`[Gemini] Auto-selected model: ${cachedModelName}`);
        } else {
          console.warn("[Gemini] No 'gemini' model found in list. Fallback to gemini-pro.");
          cachedModelName = "gemini-pro";
        }
      } catch (e) {
        console.error("[Gemini] Failed to list models, fallback to default.", e);
        cachedModelName = "gemini-1.5-flash";
      }
    }

    const model = genAI.getGenerativeModel({ model: cachedModelName });

    const prompt = `
      Act as an intelligent personal assistant. Analyze the incoming chat message to see if it mentions ANY potential event, meeting, plan, or scheduled activity.

      Current Date Reference: ${new Date().toISOString()}
      
      Rules:
      1. If the message implies a time or date (e.g., "tomorrow", "next week", "in 5 mins", "at 5pm"), treat it as an EVENT.
      2. Be permissive. If it looks like a plan, mark it as true.
      3. Infer the missing details. If no end time is given, assume 1 hour duration.
      4. If no location is given, leave it null.
      
      Message to Analyze: "${text}"

      Return strictly valid JSON in this format:
      {
        "isEvent": boolean,
        "title": "A short, clear title for the event (e.g. 'Coffee Meeting', 'Team Sync')",
        "description": "Original message text",
        "startTime": "ISO 8601 String (e.g. 2023-10-27T10:00:00.000Z)",
        "endTime": "ISO 8601 String",
        "location": "extracted location or null"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const textResponse = response.text();

    // Clean up markdown code blocks if present
    const cleanJson = textResponse.replace(/```json/g, "").replace(/```/g, "").trim();

    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return { isEvent: false };
  }
};
