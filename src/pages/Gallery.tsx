// src/pages/Gallery.tsx
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';

// Import gallery images
import image1 from '@/assets/gallery/1.png';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | GalleryImage>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // desc = newest first

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        handleCloseLightbox();
      }
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscKey);
      // Add class to body to hide navbar
      document.body.classList.add('lightbox-open');
      return () => {
        document.removeEventListener('keydown', handleEscKey);
        document.body.classList.remove('lightbox-open');
      };
    }
    
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash === '#gallery') {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.querySelector('#gallery');
        if (element) {
          const navbarHeight = 80; // Adjust this to match your navbar height
          const elementPosition = (element as HTMLElement).offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
    }
  }, [selectedImage]);

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
    document.body.classList.remove('lightbox-open');
  };

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

  // Curated gallery images with real data (updated dates for better sorting demonstration)
  const galleryImages: GalleryImage[] = [
    {
      id: 'img-1',
      src: image1,
      thumbnail: image1,
      caption: 'On a mountain',
      category: ['civilian', 'scenery'],
      author: 'Ⓥ Manikh',
      date: '2025-05-20' // More recent date
    },
    {
      id: 'img-2',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272905420810/Screenshot_522.png?ex=6805e373&is=680491f3&hm=c28115229204e9a5bd96f0ec4bf560f22c8dc7cdc84d37eef6ef2deef376f754&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272905420810/Screenshot_522.png?ex=6805e373&is=680491f3&hm=c28115229204e9a5bd96f0ec4bf560f22c8dc7cdc84d37eef6ef2deef376f754&",
      caption: 'Thrimana',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: '2025-05-19'
    },
    {
      id: 'img-3',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272540782602/Screenshot_521.png?ex=6805e373&is=680491f3&hm=fa4ef5dae6bd76572901c773f41b8ccb1e1075c3ac413a22192b89bed7677c9f&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272540782602/Screenshot_521.png?ex=6805e373&is=680491f3&hm=fa4ef5dae6bd76572901c773f41b8ccb1e1075c3ac413a22192b89bed7677c9f&",
      caption: 'Thrimana Event Scene',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: '2025-05-18'
    },
    {
      id: 'img-4',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036428849778688/Screenshot_513.png?ex=6805e398&is=68049218&hm=7bb87d2f63934a8638c3f3cd4dbfe3a1a4417f0fa54bd1b652479ba7050fdcc9&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036428849778688/Screenshot_513.png?ex=6805e398&is=68049218&hm=7bb87d2f63934a8638c3f3cd4dbfe3a1a4417f0fa54bd1b652479ba7050fdcc9&",
      caption: 'Community Gathering',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: '2025-05-17'
    },
    {
      id: 'img-5',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036273333501982/Screenshot_523.png?ex=6805e373&is=680491f3&hm=04dd5170860c999a92e6c8bff3a0fd887e23821cec70716c3a447fe2f5abe298&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036273333501982/Screenshot_523.png?ex=6805e373&is=680491f3&hm=04dd5170860c999a92e6c8bff3a0fd887e23821cec70716c3a447fe2f5abe298&",
      caption: 'Server Event Highlights',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: '2025-05-15'
    },
    {
      id: 'img-6',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1353656891712213044/Screenshot2040-enhanced.png?ex=68060b38&is=6804b9b8&hm=867e7c72105b806068c895b8b55d444f0c14da3cc784b57d1bf6c391869ce67a&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1353656891712213044/Screenshot2040-enhanced.png?ex=68060b38&is=6804b9b8&hm=867e7c72105b806068c895b8b55d444f0c14da3cc784b57d1bf6c391869ce67a&",
      caption: 'Inside a cafe',
      category: ['civilian'],
      author: 'Ⓥ BEASTBOY',
      date: '2025-05-10'
    },
    {
      id: 'img-7',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1350461612397428797/FiveM20by20Cfx-re20-20Venty20Roleplay203_15_2025206_56_3520PM1-enhanced.png?ex=6805a022&is=68044ea2&hm=7f627e921579837a1c599438d29906f935e070964e3e47c159fb969017e69e3b&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1350461612397428797/FiveM20by20Cfx-re20-20Venty20Roleplay203_15_2025206_56_3520PM1-enhanced.png?ex=6805a022&is=68044ea2&hm=7f627e921579837a1c599438d29906f935e070964e3e47c159fb969017e69e3b&",
      caption: 'Inside Bahama Mamas',
      category: ['events', 'civilian'],
      author: 'Ⓥ Manikh',
      date: '2025-05-05'
    },
    {
      id: 'img-8',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1348177896031780947/image.png?ex=6805e302&is=68049182&hm=cfe9197d380f880512d249e8fe0e73d43c766abb57a2d9646c3976193120bd0e&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1348177896031780947/image.png?ex=6805e302&is=68049182&hm=cfe9197d380f880512d249e8fe0e73d43c766abb57a2d9646c3976193120bd0e&",
      caption: 'Police Investigation Scene',
      category: ['criminal', 'police'],
      author: 'Anonymous Officer',
      date: '2025-05-01'
    },
    // Add more images with varied dates for better sorting demonstration
  ];

  // Helper function to sort images by date only
  const sortImagesByDate = (images: GalleryImage[]) => {
    return images.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  };

  // Helper function to format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredImages = activeCategory === 'all'
    ? sortImagesByDate([...galleryImages])
    : sortImagesByDate([...galleryImages].filter(img => Array.isArray(img.category) && img.category.includes(activeCategory)));

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
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

      <section className="py-12 sm:py-16 md:py-20 bg-black" id="gallery">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Categories and Date Sort */}
            <div className="mb-8 sm:mb-12">
              {/* Category Filters */}
              <div className="overflow-x-auto py-2 mb-4">
                <div className="flex flex-nowrap space-x-2 sm:space-x-4 min-w-max sm:flex-wrap sm:min-w-0 sm:justify-center">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-xs sm:text-base ${activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Count and Date Sort Toggle */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">

                </div>
                
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 text-xs sm:text-base whitespace-nowrap"
                  title={`Currently showing ${sortOrder === 'desc' ? 'newest first' : 'oldest first'} - Click to toggle`}
                >
                  <span>📅 Sort by Date</span>
                  <div className={`transition-transform duration-300 ${sortOrder === 'desc' ? '' : 'rotate-180'}`}>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
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

      {/* Enhanced Lightbox with improved close functionality */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-[9999]"
          onClick={handleCloseLightbox}
        >
          {/* Close button - improved positioning and size */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCloseLightbox();
            }}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-[10000] bg-black/70 rounded-full p-3 hover:bg-black/90"
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-[10000] bg-black/70 rounded-full p-3 hover:bg-black/90"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-[10000] bg-black/70 rounded-full p-3 hover:bg-black/90"
            aria-label="Next image"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="max-h-[80vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-[80vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image info with formatted date */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 sm:p-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-bold text-base sm:text-lg truncate">{selectedImage.caption}</p>
            <p className="text-gray-300 text-xs sm:text-sm truncate">
              By {selectedImage.author} • {formatDate(selectedImage.date)}
            </p>
          </div>

          {/* ESC key hint */}
          <div className="absolute top-4 left-4 text-white/70 text-sm bg-black/70 px-3 py-2 rounded-lg">
            Press ESC or click outside to close
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
  category: string[];
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
      <p className="text-gray-300 text-xs sm:text-sm truncate">
        By {image.author} • {new Date(image.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </p>
    </div>
  </div>
);

export default Gallery;