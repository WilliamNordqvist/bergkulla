import fs from 'fs';
import path from 'path';

export function getCarouselImages() {
  const imagesDirectory = path.join(process.cwd(), 'public/images/carousel');
  
  try {
    const fileNames = fs.readdirSync(imagesDirectory);
    
    const images = fileNames
      .filter(fileName => {
        return /\.(jpg|jpeg|png|webp)$/i.test(fileName);
      })
      .map(fileName => ({
        src: `/images/carousel/${fileName}`,
        alt: fileName
          .replace(/\.(jpg|jpeg|png|webp)$/i, '')  
          .split('-')                              
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
          .join(' ')                              
      }));

    return images;
  } catch (error) {
    console.error('Error reading carousel images:', error);
    return [];
  }
} 
