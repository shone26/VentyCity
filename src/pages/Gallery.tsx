// src/pages/Gallery.tsx
import React, { useState } from 'react';
import Hero from '../components/Hero';

// Import gallery images
import image1 from '@/assets/gallery/1.png';
const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | GalleryImage>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'action', name: 'Action' },
    { id: 'police', name: 'Police RP' },
    { id: 'criminal', name: 'Criminal RP' },
    { id: 'civilian', name: 'Civilian Life' },
    { id: 'events', name: 'Server Events' },
    { id: 'vehicles', name: 'Vehicles' },
    { id: 'scenery', name: 'Scenery' },
  ];

  // Curated gallery images with real data
  const galleryImages: GalleryImage[] = [
    {
      id: 'img-1',
      src: image1,
      thumbnail: image1,
      caption: 'On a mountain',
      category: 'action',
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      <Hero
        title="GALLERY"
        subtitle="Visual highlights from the VENTY Roleplay server"
        showButtons={false}
        backgroundImage="bg-[url('../assets/images/gallery-bg.jpg')]"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Categories */}
            <div className="mb-8 sm:mb-12 overflow-x-auto py-2">
              <div className="flex flex-nowrap space-x-2 sm:space-x-4 min-w-max sm:flex-wrap sm:min-w-0 sm:justify-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-xs sm:text-base ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredImages.map(image => (
                <GalleryItem
                  key={image.id}
                  image={image}
                  onClick={() => openLightbox(image)}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg sm:text-xl">No images found in this category.</p>
              </div>
            )}

            {/* Upload CTA */}
            <div className="mt-12 sm:mt-16 text-center px-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Share Your VENTY Moments</h3>
              <p className="text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Have amazing screenshots from your adventures in VENTY Roleplay? Share them with the community
                and have a chance to be featured on our social media!
              </p>
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 sm:px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Submit Your Screenshots on Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="max-h-[75vh] max-w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-[75vh] max-w-full object-contain"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 sm:p-4 text-white">
            <p className="font-bold text-base sm:text-lg truncate">{selectedImage.caption}</p>
            <p className="text-gray-300 text-xs sm:text-sm truncate">
              By {selectedImage.author} • {selectedImage.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Types
interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  caption: string;
  category: string;
  author: string;
  date: string;
}

// Helper Components
const GalleryItem: React.FC<{
  image: GalleryImage;
  onClick: () => void;
}> = ({ image, onClick }) => (
  <div
    className="overflow-hidden rounded-lg cursor-pointer group relative"
    onClick={onClick}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image.thumbnail}
        alt={image.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
      <p className="text-white font-medium truncate text-sm sm:text-base">{image.caption}</p>
      <p className="text-gray-300 text-xs sm:text-sm truncate">By {image.author}</p>
    </div>
  </div>
);

export default Gallery;