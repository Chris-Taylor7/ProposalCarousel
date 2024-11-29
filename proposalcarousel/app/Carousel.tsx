// components/Carousel.tsx
import React from "react";
import { Carousel } from "@shadcn/ui"; // Replace this with the correct ShadCN Carousel import path

const CarouselComponent = () => {
  // Generate photo array dynamically
  const photos = Array.from({ length: 112 - 1 + 1 }, (_, i) => `/assets/88CT-${i + 1}.jpg`);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel>
        {photos.map((photo, index) => (
          <div key={index} className="w-full h-[400px]">
            <img
              src={photo}
              alt={`88CT-${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
