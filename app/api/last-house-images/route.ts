import { readdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images/20250525');
    const fileNames = await readdir(imagesDirectory);
    
    const images = fileNames
      .filter(fileName => /\.(jpg|jpeg|png|webp)$/i.test(fileName))
      .map(fileName => ({
        src: `/images/20250525/${fileName}`,
        alt: fileName
          .replace(/\.(jpg|jpeg|png|webp)$/i, '')
          .replace(/[åäöÅÄÖ]/g, match => {
            const replacements: { [key: string]: string } = {
              'å': 'a', 'ä': 'a', 'ö': 'o',
              'Å': 'A', 'Ä': 'A', 'Ö': 'O'
            };
            return replacements[match] || match;
          })
          .split(/[\s-]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading last house images:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
} 
