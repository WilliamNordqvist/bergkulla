import { readdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images/20250806');
    const fileNames = await readdir(imagesDirectory);
    
    // Define the order we want explicitly
    const desiredOrder = [
      // Landscape images first (all other images that aren't portrait or floor plans)
      "465716327_10161200433907862_7298125129798330937_n.jpg",
      "465888200_10161200435082862_387405001759929354_n.jpg",
      "465928025_10161200434442862_5048441498901960528_n.jpg",
      "465957100_10161200433972862_5546276504253604520_n.jpg",
      "466151323_10161200433912862_5993076632139172079_n.jpg",
      "466155986_10161200433997862_6004136538838099546_n.jpg",
      "466352498_10161200433992862_7440491487064711861_n.jpg",
      
      // Portrait images next
      "465867563_10161200434737862_1664742391975264650_n.jpg",
      "465868448_10161200434457862_3844420423657681454_n.jpg",
      
      // Floor plans last
      "Ritning_page-0001.jpg",
      "Ritning_page-0002.jpg",
      "Ritning_page-0003.jpg",
      "Ritning_page-0004.jpg",
      "Ritning_page-0005.jpg"
    ];
    
    // Filter to only include files that exist in the directory
    const availableFiles = fileNames.filter(fileName => /\.(jpg|jpeg|png|webp)$/i.test(fileName));
    
    // Create a sorted list based on our desired order
    const sortedFiles: string[] = [];
    
    // First add files in our desired order (if they exist)
    desiredOrder.forEach(fileName => {
      if (availableFiles.includes(fileName)) {
        sortedFiles.push(fileName);
      }
    });
    
    // Then add any remaining files that weren't in our desired order
    availableFiles.forEach(fileName => {
      if (!sortedFiles.includes(fileName)) {
        sortedFiles.push(fileName);
      }
    });
    
    const images = sortedFiles.map(fileName => ({
      src: `/images/20250806/${fileName}`,
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
