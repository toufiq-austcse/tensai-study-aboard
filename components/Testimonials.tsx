'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const successStories = [
  './success1.jpeg',
  './success2.jpeg',
  './success3.jpeg',
  './success4.jpeg',
  './success5.jpeg',
  './success6.jpeg',
  './success7.jpeg',
  './success8.jpeg',
];

const Testimonials = () => {
  // Continuous, buttery auto-scroll. A stable ref keeps the plugin instance
  // from being recreated on every render. Pauses on hover so visitors can read.
  const autoScroll = useRef(
    AutoScroll({
      speed: 0.8,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section id="testimonials" className="py-20 bg-[#f0f7fe]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#004aad] mb-4 text-center">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
          Real students, real visa approvals. Here are some of the dreams we&apos;ve
          helped turn into achievements.
        </p>

        <Carousel
          opts={{ loop: true, align: 'start', duration: 35, dragFree: true }}
          plugins={[autoScroll.current]}
          className="mx-auto max-w-6xl px-4 sm:px-12"
        >
          <CarouselContent>
            {successStories.map((src, index) => (
              <CarouselItem
                key={src}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Image
                    src={src}
                    alt={`Tensai Study Abroad success story ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center">
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;