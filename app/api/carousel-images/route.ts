import { readdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images/carousel');
    const fileNames = await readdir(imagesDirectory);
    
    const images = fileNames
      .filter(fileName => /\.(jpg|jpeg|png|webp)$/i.test(fileName))
      .map(fileName => ({
        src: `/images/carousel/${fileName}`,
        alt: fileName
          .replace(/\.(jpg|jpeg|png|webp)$/i, '')
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading carousel images:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
} 
