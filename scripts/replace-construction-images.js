#!/usr/bin/env node

/**
 * Script to replace irrelevant images with construction-related images using Nano Banana (Google Gemini)
 * This script identifies images that need replacement and generates appropriate construction images
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

// Image mapping: old image path -> new construction-related prompt
const IMAGE_REPLACEMENTS = {
  // Service page hero images
  "residential-construction.png": {
    prompt: "Professional residential construction site showing a modern home being built. Construction workers, framing, quality craftsmanship, Arizona construction site, bright daylight, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Residential Construction"
  },
  "commercial-buildouts.png": {
    prompt: "Modern commercial build-out in progress showing office space construction. Professional construction workers installing drywall, lighting, and finishes. Clean commercial interior, Arizona setting, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Commercial Build-Outs"
  },
  "flooring-tile.png": {
    prompt: "Professional flooring and tile installation in progress. Construction worker installing luxury vinyl plank flooring with precision. Clean lines, level substrate, modern interior, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Flooring & Tile Installation"
  },
  "kitchens-bathrooms.png": {
    prompt: "Beautiful kitchen and bathroom remodel in progress. Custom cabinets, tile work, modern fixtures, professional construction workers installing finishes. Clean, modern design, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Kitchens & Bathrooms"
  },
  
  // About section
  "aboutuswatkins.png": {
    prompt: "Professional construction team working together on a construction site. Diverse team of construction workers, hard hats, construction tools, modern construction site in Arizona, teamwork, quality craftsmanship, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Aspenwood Pools & Spas Team"
  },
  
  // Gallery images
  "hero-1.png": {
    prompt: "Completed residential construction project showing a beautiful modern home. Clean exterior, quality finishes, professional construction work, Arizona residential construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Residential Construction Project"
  },
  "interiorpainting.png": {
    prompt: "Interior construction and remodeling work in progress. Professional construction workers installing drywall, paint, and finishes. Modern interior space, clean work site, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Interior Construction"
  },
  "exteriorpainting.png": {
    prompt: "Exterior stucco and construction work on a modern building. Professional stucco application, exterior finishes, construction workers, Arizona construction site, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Exterior Construction"
  },
  "commericalpainting.png": {
    prompt: "Commercial construction build-out in progress. Professional construction workers installing finishes, lighting, and fixtures. Modern commercial interior, clean construction site, Arizona setting, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Commercial Construction"
  },
  "cabinetpainting.png": {
    prompt: "Custom kitchen construction and cabinet installation in progress. Professional construction workers installing custom cabinets, countertops, and finishes. Modern kitchen design, clean work site, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Kitchen Construction"
  },
  "pressurewashing.png": {
    prompt: "Exterior construction and finishing work. Professional construction workers applying exterior finishes, stucco work, clean construction site, modern building exterior, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Exterior Construction"
  },
  "wallpaper.png": {
    prompt: "Interior construction and design work. Professional construction workers installing interior finishes, paint, and design elements. Modern interior space, clean construction site, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Interior Construction"
  },
  "aboutus.webp": {
    prompt: "Professional construction team portrait. Diverse construction workers with hard hats, construction tools, modern construction site background, teamwork, Arizona construction company, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Construction Team"
  },
  
  // Service hero images (for pages that still reference old waste removal images)
  "residential-waste-removal-hero.png": {
    prompt: "Professional residential construction project in progress. Construction workers building a modern home, framing, quality craftsmanship, Arizona residential construction site, bright daylight, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Residential Construction"
  },
  "commercial-waste-removal-hero.png": {
    prompt: "Commercial construction build-out in progress. Professional construction workers installing commercial space, drywall, lighting, finishes, modern commercial interior, Arizona construction, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Commercial Construction"
  },
  "junk-removal-hero.png": {
    prompt: "Demolition and site preparation work. Professional construction workers performing safe demolition, site cleanup, construction debris management, Arizona construction site, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Demolition & Cleanup"
  },
  "dumpster-rental-hero.png": {
    prompt: "Construction site with construction dumpster and materials. Professional construction workers managing construction materials, organized construction site, Arizona construction project, professional photography style, high quality, 4K, realistic, detailed.",
    alt: "Construction Site"
  }
};

const OUTPUT_DIR = path.join(__dirname, "../public");

async function generateImage(filename, config) {
  try {
    console.log(`\nGenerating: ${filename}...`);
    console.log(`Prompt: ${config.prompt.substring(0, 100)}...`);
    
    // Use Gemini image generation model (Nano Banana)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: config.prompt }] }],
      generationConfig: {
        // @ts-expect-error - responseModalities for image generation
        responseModalities: ["IMAGE", "TEXT"]
      }
    });
    
    const imageParts = result.response.candidates?.[0]?.content?.parts?.filter((p) => 
      p.inlineData?.mimeType?.startsWith('image/')
    ) || [];
    
    if (!imageParts.length) {
      console.error(`⚠️  No image generated for ${filename}`);
      return null;
    }
    
    const imageData = imageParts[0].inlineData;
    const buffer = Buffer.from(imageData.data, 'base64');
    
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    const extension = imageData.mimeType.split('/')[1] || 'png';
    const outputFilename = filename.replace(/\.(png|jpg|jpeg|webp)$/i, `.${extension}`);
    const filePath = path.join(OUTPUT_DIR, outputFilename);
    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Generated: ${outputFilename}`);
    return outputFilename;
    
  } catch (error) {
    console.error(`Error generating ${filename}:`, error.message);
    
    // Create placeholder SVG as fallback
    const svgPath = path.join(OUTPUT_DIR, filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.svg'));
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <text x="400" y="280" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle">
    ${config.alt}
  </text>
  <text x="400" y="320" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle">
    Image placeholder - Run script to generate
  </text>
</svg>`;
    fs.writeFileSync(svgPath, svgContent);
    console.log(`⚠️  Created placeholder: ${path.basename(svgPath)}`);
    return null;
  }
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(filePath);
    }
  });
  
  return arrayOfFiles;
}

async function updateImageReferences(filename, newFilename) {
  const filesToUpdate = [
    path.join(__dirname, "../pages"),
    path.join(__dirname, "../components"),
    path.join(__dirname, "../constants.tsx")
  ];
  
  const oldPath = `/${filename}`;
  const newPath = `/${newFilename}`;
  
  filesToUpdate.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    let files = [];
    if (fs.statSync(dir).isFile()) {
      files = [dir];
    } else {
      files = getAllFiles(dir);
    }
    
    files.forEach(filePath => {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const updated = content.replace(
          new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          newPath
        );
        
        if (content !== updated) {
          fs.writeFileSync(filePath, updated, 'utf8');
          console.log(`  ✓ Updated: ${path.relative(__dirname + '/..', filePath)}`);
        }
      } catch (error) {
        console.error(`  ⚠️  Error updating ${filePath}:`, error.message);
      }
    });
  });
}

async function main() {
  console.log(`=== Replacing Images with Construction-Related Images ===`);
  console.log(`Using API Key: ${GEMINI_API_KEY.substring(0, 10)}...\n`);
  
  const results = [];
  
  for (const [filename, config] of Object.entries(IMAGE_REPLACEMENTS)) {
    const generatedPath = await generateImage(filename, config);
    
    if (generatedPath) {
      const newFilename = path.basename(generatedPath);
      results.push({ old: filename, new: newFilename });
      
      // Update references in codebase
      await updateImageReferences(filename, newFilename);
    }
    
    // Add delay between requests to avoid rate limiting
    await new Promise(r => setTimeout(r, 3000));
  }
  
  console.log("\n=== Summary ===");
  console.log(`Processed ${Object.keys(IMAGE_REPLACEMENTS).length} images`);
  console.log(`\nNext steps:`);
  console.log("1. Verify generated images in the public/ folder");
  console.log("2. Check the website to ensure images display correctly");
  console.log("3. Update any remaining image references manually if needed");
}

main().catch(console.error);

