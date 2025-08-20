'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import "yet-another-react-lightbox/plugins/captions.css";

import Link from 'next/link';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { SlideShow } from '@/lib/types';

export default function ImageCarousel({ keywords }: { keywords: string }) {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<SlideShow[]>([]);

   const handleOpen = async () => {
    try {
      // Fetch images from your Next.js API route
      const res = await fetch(`/api/slideshow?keywords=${encodeURIComponent(keywords)}`);
      const fetchedSlides = await res.json();
      setSlides(fetchedSlides);
      setOpen(true);
    } catch (err) {
      console.error("Error loading slideshow:", err);
    }
  };

  return (
    <div className="mt-4 flex justify-start items-center justify-between gap-2 md:mt-2">

      <Link
        className="flex h-6 items-center rounded-lg bg-blue-600 px-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={handleOpen}
        href="#"
      >
        <span className="hidden md:block ml-1 mr-1">View Slideshow</span>
        <PhotoIcon className="w-5 ml-1 mr-1" />
      </Link>

      {/* Modal Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Thumbnails, Captions]}
        captions={{
          showToggle: true, // allows toggling captions on/off
          descriptionTextAlign: "center",
        }}
      />
    </div>
  );
}
