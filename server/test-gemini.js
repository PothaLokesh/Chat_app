import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const run = async () => {
    console.log("Testing Gemini API Models...");
    const key = process.env.GEMINI_API_KEY;

    if (!key) {
        console.error("No API key found!");
        return;
    }

    const models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-1.0-pro", "gemini-pro"];

    for (const modelName of models) {
        console.log(`Trying model: ${modelName}...`);
        try {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: modelName });

            const result = await model.generateContent("Test");
            const response = await result.response;
            console.log(`SUCCESS! Model ${modelName} is working.`);
            return;
        } catch (error) {
            console.log(`Failed with ${modelName}: Status ${error.status} - ${error.statusText}`);
        }
    }
    console.error("ALL MODELS FAILED.");
};

run();
