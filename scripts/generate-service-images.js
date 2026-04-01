#!/usr/bin/env node

/**
 * Script to generate service page images using Gemini's Nano Banana
 * for Watkins Waste Removal service pages
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

// Service page images - larger, more detailed images for hero sections
const services = [
  {
    id: "residential-waste-removal-hero",
    name: "Residential Waste Removal Hero",
    prompt: "Professional waste removal team collecting household garbage, furniture, and appliances from a clean suburban home driveway in DeKalb County, Georgia. Professional service workers loading items onto a clean waste removal truck. Modern residential neighborhood, bright daylight, professional photography style, high quality, 4K, realistic, detailed."
  },
  {
    id: "commercial-waste-removal-hero",
    name: "Commercial Waste Removal Hero",
    prompt: "Commercial waste removal truck and professional crew servicing a business complex in DeKalb County, Georgia. Large commercial dumpsters, professional workers in uniforms, modern commercial building in background, efficient service operation, professional photography style, high quality, 4K, realistic, detailed."
  },
  {
    id: "junk-removal-hero",
    name: "Junk Removal Hero",
    prompt: "Professional junk removal team loading old furniture, appliances, mattresses, and household items onto a clean, professional junk removal truck. Residential property setting, organized removal process, professional workers in action, DeKalb County Georgia, bright daylight, professional photography style, high quality, 4K, realistic, detailed."
  },
  {
    id: "dumpster-rental-hero",
    name: "Dumpster Rental Hero",
    prompt: "Large professional dumpster rental container placed on a residential driveway in DeKalb County, Georgia. Clean dumpster with company branding, professional placement, modern residential home in background, construction or renovation materials visible nearby, professional photography style, high quality, 4K, realistic, detailed."
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
  console.log(`=== Generating Service Page Hero Images ===`);
  console.log(`Using API Key: ${GEMINI_API_KEY.substring(0, 10)}...\n`);
  
  for (const p of services) {
    await generateImage(p);
    // Add delay between requests to avoid rate limiting
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log("\n=== Complete ===");
  console.log("\nNext steps:");
  console.log("1. Verify images in the public/ folder");
  console.log("2. Update service pages to use the new images");
}

main().catch(console.error);


