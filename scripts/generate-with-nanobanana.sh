#!/bin/bash

# Script to generate images using Nano Banana CLI or API
# This script can be adapted based on Nano Banana's actual API/CLI interface

set -e

PUBLIC_DIR="../public"
API_URL="${NANO_BANANA_API_URL:-https://api.nanobananas.ai/v1/generate}"
API_KEY="${NANO_BANANA_API_KEY:-}"

# Ensure public directory exists
mkdir -p "$PUBLIC_DIR"

# Image generation prompts
declare -A PROMPTS=(
  ["residential-waste-removal.png"]="Professional waste removal team collecting household garbage and furniture from a clean suburban home in DeKalb County, Georgia. Professional service, clean truck, friendly workers, modern residential area, bright daylight, professional photography style"
  ["commercial-waste-removal.png"]="Commercial waste removal truck and crew servicing a business complex in DeKalb County, Georgia. Large dumpsters, professional workers, commercial building in background, efficient service, professional photography style"
  ["junk-removal.png"]="Professional junk removal team loading old furniture, appliances, and household items onto a clean truck. Residential property, organized removal, professional workers, DeKalb County Georgia setting, bright daylight, professional photography style"
  ["dumpster-rental.png"]="Large dumpster rental container placed on a residential driveway in DeKalb County, Georgia. Clean dumpster, professional placement, residential home in background, construction or renovation materials visible, professional photography style"
)

echo "🚀 Generating images with Nano Banana..."
echo ""

# Check if API key is set
if [ -z "$API_KEY" ]; then
  echo "⚠️  Warning: NANO_BANANA_API_KEY not set"
  echo "   Set it with: export NANO_BANANA_API_KEY='your-key'"
  echo ""
fi

# Generate each image
for filename in "${!PROMPTS[@]}"; do
  prompt="${PROMPTS[$filename]}"
  output_path="$PUBLIC_DIR/$filename"
  
  echo "Generating: $filename"
  echo "Prompt: ${prompt:0:80}..."
  
  # Method 1: Using curl with API
  if [ -n "$API_KEY" ]; then
    response=$(curl -s -X POST "$API_URL" \
      -H "Authorization: Bearer $API_KEY" \
      -H "Content-Type: application/json" \
      -d "{
        \"prompt\": \"$prompt\",
        \"width\": 800,
        \"height\": 600,
        \"style\": \"professional\",
        \"quality\": \"high\"
      }")
    
    # Extract image URL or data from response (adjust based on actual API response format)
    image_url=$(echo "$response" | grep -o '"image_url":"[^"]*"' | cut -d'"' -f4)
    
    if [ -n "$image_url" ]; then
      curl -s "$image_url" -o "$output_path"
      echo "✓ Saved: $filename"
    else
      echo "⚠️  Could not extract image URL from response"
    fi
  else
    # Method 2: If Nano Banana has a CLI tool, use it here
    # Example: nanobanana generate "$prompt" -o "$output_path"
    
    echo "⚠️  Skipping (no API key or CLI available)"
  fi
  
  echo ""
done

echo "✅ Image generation complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm run update-images"
echo "2. Verify images in the public/ folder"
echo "3. Check the website to ensure images display correctly"

