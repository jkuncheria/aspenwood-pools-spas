#!/bin/bash

# Directory containing original images
SRC_DIR="/Users/jkuncheria/Desktop/Client Websites/CONSTRUCTION/HM-Construction/public/HMPICTURES"
THUMB_DIR="$SRC_DIR/thumbnails"

# Create thumbnails directory if it doesn't exist
mkdir -p "$THUMB_DIR"

echo "Creating compressed thumbnails at 80% quality..."

# Process all image files
for file in "$SRC_DIR"/*.jpg "$SRC_DIR"/*.jpeg "$SRC_DIR"/*.JPG "$SRC_DIR"/*.JPEG "$SRC_DIR"/*.png "$SRC_DIR"/*.PNG "$SRC_DIR"/*.webp "$SRC_DIR"/*.WEBP; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        output="$THUMB_DIR/$filename"
        
        # Skip if thumbnail already exists
        if [ -f "$output" ]; then
            echo "Skipping: $filename (already exists)"
            continue
        fi
        
        echo "Compressing: $filename"
        
        # Get file extension
        ext="${filename##*.}"
        ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
        
        if [ "$ext_lower" = "webp" ]; then
            # For WebP files, use cwebp if available, otherwise use sips
            if command -v cwebp > /dev/null; then
                cwebp -q 80 -resize 800 0 "$file" -o "$output" 2>/dev/null
            else
                # Fallback: convert to jpg first, then resize
                sips -s format jpeg -s formatOptions 80 --resampleWidth 800 "$file" --out "${output%.*}.jpg" 2>/dev/null
                mv "${output%.*}.jpg" "$output" 2>/dev/null || true
            fi
        elif [ "$ext_lower" = "png" ]; then
            # For PNG files
            sips -s format jpeg -s formatOptions 80 --resampleWidth 800 "$file" --out "${output%.*}.jpg" 2>/dev/null
        else
            # For JPG/JPEG files
            sips -s formatOptions 80 --resampleWidth 800 "$file" --out "$output" 2>/dev/null
        fi
    fi
done

echo ""
echo "Thumbnail creation complete!"
echo "Thumbnails saved to: $THUMB_DIR"
