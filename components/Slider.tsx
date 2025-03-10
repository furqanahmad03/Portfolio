"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import 'react-multi-carousel/lib/styles.css';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Define the props for the Carousel component
interface CarouselProps {
  images: string[]; // Array of image URLs
}

// Create the Carousel component
export default function ImageCarousel({ images }: CarouselProps) {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      arrows={true}
      showDots={true}
      infinite={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {images.map((image, index) => (
        <div key={index} className="px-2 w-full h-auto">
          <Image
            width={1500}
            height={500}
            src={`/projectImages/${image}`}
            alt={`Slide ${index + 1}`}
            className="border rounded-md m-auto"
          />
        </div>
      ))}
    </Carousel>
  );
}