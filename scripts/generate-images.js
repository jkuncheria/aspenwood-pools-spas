#!/usr/bin/env node

/**
 * Script to generate product images using Gemini's Nano Banana
 * for Watkins Waste Removal services
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

// Waste removal service images
const products = [
  {
    id: "residential-waste-removal",
    name: "Residential Waste Removal",
    prompt: "Professional waste removal team collecting household garbage and furniture from a clean suburban home in DeKalb County, Georgia. Professional service, clean truck, friendly workers, modern residential area, bright daylight, professional photography style, high quality, 4K."
  },
  {
    id: "commercial-waste-removal",
    name: "Commercial Waste Removal",
    prompt: "Commercial waste removal truck and crew servicing a business complex in DeKalb County, Georgia. Large dumpsters, professional workers, commercial building in background, efficient service, professional photography style, high quality, 4K."
  },
  {
    id: "junk-removal",
    name: "Junk Removal",
    prompt: "Professional junk removal team loading old furniture, appliances, and household items onto a clean truck. Residential property, organized removal, professional workers, DeKalb County Georgia setting, bright daylight, professional photography style, high quality, 4K."
  },
  {
    id: "dumpster-rental",
    name: "Dumpster Rental",
    prompt: "Large dumpster rental container placed on a residential driveway in DeKalb County, Georgia. Clean dumpster, professional placement, residential home in background, construction or renovation materials visible, professional photography style, high quality, 4K."
  },
];

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
  console.log(`=== Generating Waste Removal Service Images ===`);
  console.log(`Using API Key: ${GEMINI_API_KEY.substring(0, 10)}...\n`);
  
  for (const p of products) {
    await generateImage(p);
    // Add delay between requests to avoid rate limiting
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log("\n=== Complete ===");
  console.log("\nNext steps:");
  console.log("1. Verify images in the public/ folder");
  console.log("2. Check the website to ensure images display correctly");
  console.log("3. Images are already referenced in constants.tsx");
}

main().catch(console.error);
