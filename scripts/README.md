# Image Generation Scripts

This directory contains scripts for generating images for the Aspenwood Pools & Spas website using Google Generative AI (Gemini/Nano Banana).

## Setup

### Prerequisites

1. Get your Google Generative AI API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a `.env.local` file in the project root with your API key:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

### Running the Script

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Run the image generation script:
   ```bash
   npm run generate-images
   ```

The script will:
- Generate images for all 4 services using Google Generative AI
- Save images to the `public/` folder
- Create placeholder SVGs if image generation fails

### Manual Generation (Alternative)

If the API doesn't work, you can manually generate images:

1. Visit [Google AI Studio](https://aistudio.google.com)
2. Use the prompts from `generate-images.js` for each service
3. Download the generated images
4. Save them to the `public/` folder with these names:
   - `residential-waste-removal.png`
   - `commercial-waste-removal.png`
   - `junk-removal.png`
   - `dumpster-rental.png`

## Image Prompts

The script includes optimized prompts for each service:

- **Residential Waste Removal**: Professional waste removal team collecting household garbage and furniture from a clean suburban home in DeKalb County, Georgia.

- **Commercial Waste Removal**: Commercial waste removal truck and crew servicing a business complex in DeKalb County, Georgia.

- **Junk Removal**: Professional junk removal team loading old furniture, appliances, and household items onto a clean truck.

- **Dumpster Rental**: Large dumpster rental container placed on a residential driveway in DeKalb County, Georgia.

## Replacing Construction Images

To replace all irrelevant images (waste removal, painting, etc.) with construction-related images:

```bash
npm run replace-construction-images
```

This script will:
- Generate construction-related images for all service pages, gallery, and about sections
- Use Nano Banana (Google Gemini) to create professional construction photographs
- Automatically update image references throughout the codebase
- Create placeholder SVGs if image generation fails

### Images That Will Be Replaced

- Service page hero images (residential-construction, commercial-buildouts, etc.)
- About section images (aboutuswatkins.png)
- Gallery images (interiorpainting, exteriorpainting, etc.)
- Old waste removal hero images (if still referenced)

## Updating Image References

After generating images, run:

```bash
npm run update-images
```

This will automatically update `constants.tsx` with the new image paths.

## Troubleshooting

- **API Key Not Found**: Make sure `.env.local` exists in the project root with `GEMINI_API_KEY` set
- **Image Generation Fails**: The script will create SVG placeholder images as fallback
- **API Quota Exceeded**: Check your Google AI Studio quota limits
- **Model Not Available**: The script tries multiple approaches - check Google's available models
- **Images Not Displaying**: Verify image file names match those in `constants.tsx`
- **Permission Errors**: Ensure the `public/` directory exists and is writable

## Notes

- The script uses Google's Imagen API for image generation
- Image generation may require specific API access/permissions
- Generated images are saved as PNG files (800x600 recommended)
- Placeholder SVGs are created if generation fails for any reason

