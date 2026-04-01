#!/usr/bin/env node

/**
 * Script to update image references in constants.tsx after generating new images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONSTANTS_FILE = path.join(__dirname, '../constants.tsx');

const NEW_IMAGE_MAPPINGS = {
  'residential-waste-removal': '/residential-waste-removal.png',
  'commercial-waste-removal': '/commercial-waste-removal.png',
  'junk-removal': '/junk-removal.png',
  'dumpster-rental': '/dumpster-rental.png'
};

function updateConstantsFile() {
  console.log('📝 Updating constants.tsx with new image references...\n');

  let content = fs.readFileSync(CONSTANTS_FILE, 'utf8');

  // Update each category image
  for (const [serviceId, imagePath] of Object.entries(NEW_IMAGE_MAPPINGS)) {
    const oldPattern = new RegExp(
      `(id: '${serviceId}', name: '[^']+', image: ')[^']+(')`,
      'g'
    );
    
    if (oldPattern.test(content)) {
      content = content.replace(
        oldPattern,
        `$1${imagePath}$2`
      );
      console.log(`✓ Updated ${serviceId}: ${imagePath}`);
    } else {
      console.warn(`⚠ Could not find pattern for ${serviceId}`);
    }
  }

  fs.writeFileSync(CONSTANTS_FILE, content, 'utf8');
  console.log('\n✅ Constants file updated successfully!');
}

updateConstantsFile();

