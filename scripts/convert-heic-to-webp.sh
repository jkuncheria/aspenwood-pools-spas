#!/bin/bash

# Directory containing HEIC files
DIR="/Users/jkuncheria/Desktop/Client Websites/CONSTRUCTION/HM-Construction/public/HMPICTURES"

# Convert all HEIC files to WebP
for file in "$DIR"/*.HEIC "$DIR"/*.heic; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        output="$DIR/${name}.webp"
        
        if [ ! -f "$output" ]; then
            echo "Converting: $filename -> ${name}.webp"
            # First convert to JPEG (sips doesn't support direct HEIC to WebP)
            sips -s format jpeg "$file" --out "/tmp/${name}.jpg" 2>/dev/null
            # Then convert JPEG to WebP using cwebp if available, otherwise keep as jpg
            if command -v cwebp &> /dev/null; then
                cwebp -q 85 "/tmp/${name}.jpg" -o "$output" 2>/dev/null
                rm "/tmp/${name}.jpg"
            else
                # Fallback: just use JPEG
                mv "/tmp/${name}.jpg" "$DIR/${name}.jpg"
                echo "  (saved as JPEG - cwebp not installed)"
            fi
        else
            echo "Skipping: $filename (already converted)"
        fi
    fi
done

echo "Conversion complete!"
