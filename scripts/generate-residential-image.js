#!/usr/bin/env node

/**
 * Script to generate residential waste removal image for services section
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Error: API key not found");
  console.error("Please set GEMINI_API_KEY or NEXT_PUBLIC_GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const product = {
  id: "residential-waste-removal",
  name: "Residential Waste Removal",
  prompt: "Professional waste removal team collecting household garbage, furniture, and appliances from a clean suburban home driveway in DeKalb County, Georgia. Professional service workers in uniforms loading items onto a clean waste removal truck. Modern residential neighborhood, bright daylight, professional photography style, high quality, 4K, realistic, detailed, horizontal composition suitable for service card."
};

const OUTPUT_DIR = path.join(__dirname, "../public");

async function generateImage(product) {
  try {
    console.log(`\nGenerating: ${product.name}...`);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: product.prompt }] }],
      generationConfig: {
        // @ts-expect-error - responseModalities for image generation
        responseModalities: ["IMAGE", "TEXT"]
      }
    });
    
    const imageParts = result.response.candidates?.[0]?.content?.parts?.filter((p) => 
      p.inlineData?.mimeType?.startsWith('image/')
    ) || [];
    
    if (!imageParts.length) {
      console.error(`No image for ${product.name}`);
      return null;
    }
    
    const imageData = imageParts[0].inlineData;
    const buffer = Buffer.from(imageData.data, 'base64');
    
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    const filename = `${product.id}.${imageData.mimeType.split('/')[1] || 'png'}`;
    const filePath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(filePath, buffer);
    console.log(`✓ ${filename}`);
    return `/${filename}`;
  } catch (e) {
    console.error(`Error: ${product.name}`, e);
    return null;
  }
}

async function main() {
  console.log(`=== Generating Residential Waste Removal Image ===`);
  console.log(`Using API Key: ${GEMINI_API_KEY.substring(0, 10)}...\n`);
  
  await generateImage(product);
  
  console.log("\n=== Complete ===");
}

main().catch(console.error);


