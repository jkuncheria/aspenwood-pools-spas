import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the "Aspenwood Pools & Spas Smart Assistant". 
      You are an expert in construction services, building, remodeling, and construction management.
      We are Aspenwood Pools & Spas, a professional construction company delivering residential and commercial projects with craftsmanship you can count on.
      We specialize in Residential Construction, Commercial Build-Outs, Flooring & Tile, Kitchens & Bathrooms, and Tenant Improvements.
      We focus on solid planning, transparent pricing, and on-time delivery. From remodels to ground-up work, we turn ideas into durable, beautiful results.
      We offer free estimates.
      Key features: Easy Design (modern designs that reflect your style), Smart Builder (experienced professionals), On-time delivery, Quality & Safety.
      Your goal is to help customers understand our construction services and determine the best solution for their specific needs (home remodels, new construction, commercial build-outs, flooring, kitchens, bathrooms, etc.).
      Keep answers concise, friendly, and encouraging.
      Emphasize our commitment to quality, safety, clear communication, transparent pricing, and on-time delivery.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to our design database. Please try again later.";
  }
};