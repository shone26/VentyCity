// src/pages/Gallery.tsx
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';



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


const galleryImages: GalleryImage[] = [
    {
      id: 'img-1748059365454',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1375610225247260783/FiveM_by_Cfx.re_5_24_2025_4_19_24_AM.png?ex=6832505b&is=6830fedb&hm=6832d8ec76702092c3f847469d495f1ac203b29417dbaffed5afd9f077fe97ae&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1375610225247260783/FiveM_by_Cfx.re_5_24_2025_4_19_24_AM.png?ex=6832505b&is=6830fedb&hm=6832d8ec76702092c3f847469d495f1ac203b29417dbaffed5afd9f077fe97ae&",
      caption: 'Police In Ease',
      category: ['police'],
      author: 'i need a Bi##a',
      date: '2025-05-24'
    },
    {
      id: 'img-1748060116232-0',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1374644697812701266/FiveM_by_Cfx.re_5_16_2025_1_26_35_PM.png?ex=683218e3&is=6830c763&hm=8ded157c25797ead00ab57f770cfbd76bb96db55dd7ad46974181038e855fb88&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1374644697812701266/FiveM_by_Cfx.re_5_16_2025_1_26_35_PM.png?ex=683218e3&is=6830c763&hm=8ded157c25797ead00ab57f770cfbd76bb96db55dd7ad46974181038e855fb88&",
      caption: 'Untitled',
      category: ['civilian', 'events'],
      author: 'FERDISTREAMS',
      date: '2025-05-21'
    },
    {
      id: 'img-1748060116232-1',
      src: "https://media.discordapp.net/attachments/1343855665075978300/1374644698437910601/FiveM_by_Cfx.re_5_18_2025_11_39_58_AM.png?ex=683218e3&is=6830c763&hm=869aa827df4a7f310785eb12e4fe802165d7d446bf05f57ea65fc38e9c5e865d&=&format=webp&quality=lossless&width=1493&height=800",
      thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1374644698437910601/FiveM_by_Cfx.re_5_18_2025_11_39_58_AM.png?ex=683218e3&is=6830c763&hm=869aa827df4a7f310785eb12e4fe802165d7d446bf05f57ea65fc38e9c5e865d&=&format=webp&quality=lossless&width=1493&height=800",
      caption: 'Untitled',
      category: ['civilian', 'events'],
      author: 'FERDISTREAMS',
      date: '2025-05-21'
    },
    {
      id: 'img-1748060116232-2',
      src: "https://media.discordapp.net/attachments/1343855665075978300/1374644699117129778/FiveM_by_Cfx.re_5_18_2025_11_40_41_AM.png?ex=683218e3&is=6830c763&hm=e722b63682775ebcbcdac2e74e3011c5955dc58a209e9a5906a6879f69fe11ad&=&format=webp&quality=lossless&width=1493&height=800",
      thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1374644699117129778/FiveM_by_Cfx.re_5_18_2025_11_40_41_AM.png?ex=683218e3&is=6830c763&hm=e722b63682775ebcbcdac2e74e3011c5955dc58a209e9a5906a6879f69fe11ad&=&format=webp&quality=lossless&width=1493&height=800",
      caption: 'Untitled',
      category: ['civilian', 'events'],
      author: 'FERDISTREAMS',
      date: '2025-05-21'
    },
    {
      id: 'img-1748060239749-0',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524850697568267/Desktop_Screenshot_2025.05.09_-_23.30.52.30.png?ex=6831fa73&is=6830a8f3&hm=1b4b1e0d2a3ca1ea76157ad8d4ec4639384d68ff6084c498194f960fe5cb0ef2&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524850697568267/Desktop_Screenshot_2025.05.09_-_23.30.52.30.png?ex=6831fa73&is=6830a8f3&hm=1b4b1e0d2a3ca1ea76157ad8d4ec4639384d68ff6084c498194f960fe5cb0ef2&",
      caption: 'EVENING VIBEZZ... 1',
      category: ['scenery', 'civilian'],
      author: '✮ NIKI',
      date: '2025-05-18'
    },
    {
      id: 'img-1748060239749-1',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524697085509682/Desktop_Screenshot_2025.05.09_-_23.11.39.88.png?ex=6831fa4e&is=6830a8ce&hm=e82ef710180f9efcf3297818e47a0b8265c5c52d538c6fa531131fa3e56952ae&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524697085509682/Desktop_Screenshot_2025.05.09_-_23.11.39.88.png?ex=6831fa4e&is=6830a8ce&hm=e82ef710180f9efcf3297818e47a0b8265c5c52d538c6fa531131fa3e56952ae&",
      caption: 'EVENING VIBEZZ... 2',
      category: ['scenery', 'civilian'],
      author: '✮ NIKI',
      date: '2025-05-18'
    },
    {
      id: 'img-1748060239749-2',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524697446355056/Desktop_Screenshot_2025.05.09_-_23.12.37.66.png?ex=6831fa4e&is=6830a8ce&hm=8062a714a9449c53d92c6c9e241b2ce8d9d54320a7a16ddfcc2e07461707407e&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524697446355056/Desktop_Screenshot_2025.05.09_-_23.12.37.66.png?ex=6831fa4e&is=6830a8ce&hm=8062a714a9449c53d92c6c9e241b2ce8d9d54320a7a16ddfcc2e07461707407e&",
      caption: 'EVENING VIBEZZ... 3',
      category: ['scenery', 'civilian'],
      author: '✮ NIKI',
      date: '2025-05-18'
    },
    {
      id: 'img-1748060239749-3',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524696196186172/Desktop_Screenshot_2025.05.09_-_23.15.01.53.png?ex=6831fa4e&is=6830a8ce&hm=b746aee0a371b1b2b60651b276efefb6aa4374f28288d1372a3fb3aa66c02ec2&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524696196186172/Desktop_Screenshot_2025.05.09_-_23.15.01.53.png?ex=6831fa4e&is=6830a8ce&hm=b746aee0a371b1b2b60651b276efefb6aa4374f28288d1372a3fb3aa66c02ec2&",
      caption: 'EVENING VIBEZZ... 4',
      category: ['scenery', 'civilian'],
      author: '✮ NIKI',
      date: '2025-05-18'
    },
    {
      id: 'img-1748060239749-4',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524696561225779/Desktop_Screenshot_2025.05.09_-_23.10.47.52.png?ex=6831fa4e&is=6830a8ce&hm=416d135d7a9bacc1204c27969ec6e84c88ed1109f25c4dc630836f313e000906&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1373524696561225779/Desktop_Screenshot_2025.05.09_-_23.10.47.52.png?ex=6831fa4e&is=6830a8ce&hm=416d135d7a9bacc1204c27969ec6e84c88ed1109f25c4dc630836f313e000906&",
      caption: 'EVENING VIBEZZ... 5',
      category: ['scenery', 'civilian'],
      author: '✮ NIKI',
      date: '2025-05-18'
    },
    {
      id: 'img-1748060335535-0',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372923066300104816/Picsart_25-05-16_18-28-10-014.jpg?ex=68326cfe&is=68311b7e&hm=52e10aaac50ea3eb634e7bab0e3204282bfbf0b2d27496d447cd263b77258b3a&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372923066300104816/Picsart_25-05-16_18-28-10-014.jpg?ex=68326cfe&is=68311b7e&hm=52e10aaac50ea3eb634e7bab0e3204282bfbf0b2d27496d447cd263b77258b3a&",
      caption: 'After long time with Bby 🥹💕🫶 @Dila 1',
      category: ['civilian', 'scenery'],
      author: 'Ⓥ 𝗟ᴏᴠᴇ 𝗕ɪʀᴅ 💕❕',
      date: '2025-05-16'
    },
    {
      id: 'img-1748060335535-1',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372923066577063966/Picsart_25-05-16_18-30-08-845.jpg?ex=68326cfe&is=68311b7e&hm=1bc689a78405ab7e31e4738064e7a24acd8d8a9f582405f88200226fbf9f3e0e&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372923066577063966/Picsart_25-05-16_18-30-08-845.jpg?ex=68326cfe&is=68311b7e&hm=1bc689a78405ab7e31e4738064e7a24acd8d8a9f582405f88200226fbf9f3e0e&",
      caption: 'After long time with Bby 🥹💕🫶 @Dila 2',
      category: ['civilian', 'scenery'],
      author: 'Ⓥ 𝗟ᴏᴠᴇ 𝗕ɪʀᴅ 💕❕',
      date: '2025-05-16'
    },
    {
      id: 'img-1748060335535-2',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372923066853752934/Picsart_25-05-16_18-34-39-729.jpg?ex=68326cfe&is=68311b7e&hm=b494405a55030221067da31a3c627f8c48e35a1062d88a73695a209ed800154b&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372923066853752934/Picsart_25-05-16_18-34-39-729.jpg?ex=68326cfe&is=68311b7e&hm=b494405a55030221067da31a3c627f8c48e35a1062d88a73695a209ed800154b&",
      caption: 'After long time with Bby 🥹💕🫶 @Dila 3',
      category: ['civilian', 'scenery'],
      author: 'Ⓥ 𝗟ᴏᴠᴇ 𝗕ɪʀᴅ 💕❕',
      date: '2025-05-16'
    },
    {
      id: 'img-1748060394761',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372866663799722035/img.jpg?ex=68323877&is=6830e6f7&hm=38f043d2b9e5b0afd21cc0bcc51cda26645435690f15e5d0330a34e5c1b45102&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372866663799722035/img.jpg?ex=68323877&is=6830e6f7&hm=38f043d2b9e5b0afd21cc0bcc51cda26645435690f15e5d0330a34e5c1b45102&",
      caption: 'Untitled',
      category: ['vehicles', 'action', 'scenery'],
      author: 'RanDiNeX',
      date: '2025-05-16'
    },
    {
      id: 'img-1748060632065-0',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372561807650324550/Desktop_Screenshot_2025.05.09_-_22.56.25.70.png?ex=68326e0b&is=68311c8b&hm=53ec4d13f19b13b31d1bf6e68accfa149b6d222b35eba7c6d00d9e48ca5c79e4&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372561807650324550/Desktop_Screenshot_2025.05.09_-_22.56.25.70.png?ex=68326e0b&is=68311c8b&hm=53ec4d13f19b13b31d1bf6e68accfa149b6d222b35eba7c6d00d9e48ca5c79e4&",
      caption: 'FREEDOM🍃 1',
      category: ['civilian', 'scenery'],
      author: '✮ NIKI',
      date: '2025-05-15'
    },
    {
      id: 'img-1748060632065-1',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372561808019161118/Desktop_Screenshot_2025.05.09_-_23.00.03.63.png?ex=68326e0b&is=68311c8b&hm=c12edd77ff102355738d1d7152361e60866bb71d3ace31ae8776d89e7d57340b&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372561808019161118/Desktop_Screenshot_2025.05.09_-_23.00.03.63.png?ex=68326e0b&is=68311c8b&hm=c12edd77ff102355738d1d7152361e60866bb71d3ace31ae8776d89e7d57340b&",
      caption: 'FREEDOM🍃 2',
      category: ['civilian', 'scenery'],
      author: '✮ NIKI',
      date: '2025-05-15'
    },
    {
      id: 'img-1748060705906-0',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372560840502542387/Desktop_Screenshot_2025.05.05_-_15.53.27.84.png?ex=68326d25&is=68311ba5&hm=f96ef03034bc25465232615a9d069df81ad6fcd3821dff89df2f6549f82bea04&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372560840502542387/Desktop_Screenshot_2025.05.05_-_15.53.27.84.png?ex=68326d25&is=68311ba5&hm=f96ef03034bc25465232615a9d069df81ad6fcd3821dff89df2f6549f82bea04&",
      caption: 'BEST FEELINGS 1',
      category: ['civilian'],
      author: '✮ NIKI',
      date: '2025-05-15'
    },
    {
      id: 'img-1748060705906-1',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372560841052000336/Desktop_Screenshot_2025.05.09_-_15.49.05.99.png?ex=68326d25&is=68311ba5&hm=3eb05218afe1440255ff836cdd994aeaa8e763080da76cf680af09e9a27affde&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372560841052000336/Desktop_Screenshot_2025.05.09_-_15.49.05.99.png?ex=68326d25&is=68311ba5&hm=3eb05218afe1440255ff836cdd994aeaa8e763080da76cf680af09e9a27affde&",
      caption: 'BEST FEELINGS 2',
      category: ['civilian'],
      author: '✮ NIKI',
      date: '2025-05-15'
    },
    {
      id: 'img-1748060705906-2',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372560841421094942/Desktop_Screenshot_2025.05.09_-_15.49.41.84.png?ex=68326d25&is=68311ba5&hm=6bac8f24d6a3cf2de56eac534a471a94d0b539a6f7620f01a8d786811f66bdb3&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1372560841421094942/Desktop_Screenshot_2025.05.09_-_15.49.41.84.png?ex=68326d25&is=68311ba5&hm=6bac8f24d6a3cf2de56eac534a471a94d0b539a6f7620f01a8d786811f66bdb3&",
      caption: 'BEST FEELINGS 3',
      category: ['civilian'],
      author: '✮ NIKI',
      date: '2025-05-15'
    },
    {
      id: 'img-1748060755189',
      src: "https://media.discordapp.net/attachments/1343855665075978300/1372041463143333969/La.PNG?ex=6831daf0&is=68308970&hm=61cc5ec45ff324866e150d2f8467aa257b5e40711a5c3874e196210030b54f41&=&format=webp&quality=lossless&width=514&height=438",
      thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1372041463143333969/La.PNG?ex=6831daf0&is=68308970&hm=61cc5ec45ff324866e150d2f8467aa257b5e40711a5c3874e196210030b54f41&=&format=webp&quality=lossless&width=514&height=438",
      caption: 'Untitled',
      category: ['action', 'scenery'],
      author: 'DevsDoOpStuff',
      date: '2025-05-14'
    }
  ];

// 🚀 STEPS TO UPDATE:
// 1. Copy this entire code block
// 2. Open src/pages/Gallery.tsx
// 3. Find the existing "const galleryImages: GalleryImage[] = [" line
// 4. Replace the ENTIRE array (including the closing "];") with this code
// 5. Save the file
// 6. Commit to GitHub: git add . && git commit -m "Update gallery images" && git push


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