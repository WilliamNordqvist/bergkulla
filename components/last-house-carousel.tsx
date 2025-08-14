"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ImageType = {
  src: string;
  alt: string;
};

export const LastHouseCarousel = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    // Hardcoded images in the specific order we want
    const hardcodedImages = [
      // Landscape images first

      {
        src: "/images/20250806/465928025_10161200434442862_5048441498901960528_n.jpg",
        alt: "Landscape Image 3",
      },
      {
        src: "/images/20250806/465957100_10161200433972862_5546276504253604520_n.jpg",
        alt: "Landscape Image 4",
      },
      {
        src: "/images/20250806/466151323_10161200433912862_5993076632139172079_n.jpg",
        alt: "Landscape Image 5",
      },

      {
        src: "/images/20250806/465888200_10161200435082862_387405001759929354_n.jpg",
        alt: "Landscape Image 2",
      },

      {
        src: "/images/20250806/466352498_10161200433992862_7440491487064711861_n.jpg",
        alt: "Landscape Image 7",
      },
      {
        src: "/images/20250806/465867563_10161200434737862_1664742391975264650_n.jpg",
        alt: "Portrait Image 1",
      },
      {
        src: "/images/20250806/465868448_10161200434457862_3844420423657681454_n.jpg",
        alt: "Portrait Image 2",
      },

      {
        src: "/images/20250806/466155986_10161200433997862_6004136538838099546_n.jpg",
        alt: "Landscape Image 6",
      },

      {
        src: "/images/20250806/465716327_10161200433907862_7298125129798330937_n.jpg",
        alt: "Landscape Image 1",
      },

      // Floor plans last
      {
        src: "/images/20250806/Ritning_page-0001.jpg",
        alt: "Floor Plan 1",
      },
      {
        src: "/images/20250806/Ritning_page-0002.jpg",
        alt: "Floor Plan 2",
      },
      {
        src: "/images/20250806/Ritning_page-0003.jpg",
        alt: "Floor Plan 3",
      },
      {
        src: "/images/20250806/Ritning_page-0004.jpg",
        alt: "Floor Plan 4",
      },
      {
        src: "/images/20250806/Ritning_page-0005.jpg",
        alt: "Floor Plan 5",
      },
    ];

    setImages(hardcodedImages);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="relative aspect-[4/3] cursor-pointer "
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={`Bergkulla 2 - ${image.alt}`}
                fill
                sizes="(max-width: 768px) 95vw, 672px"
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
      />
    </div>
  );
};
