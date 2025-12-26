import { analyzeMessageForEvent } from "../lib/gemini.js";

export const detectEvent = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: "Text is required" });
        }

        const eventData = await analyzeMessageForEvent(text);

        res.status(200).json(eventData);
    } catch (error) {
        console.error("Error in detectEvent:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
