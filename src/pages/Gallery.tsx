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


// 🎯 REPLACE THIS ENTIRE ARRAY in your src/pages/Gallery.tsx file
// Copy everything from "const galleryImages" to the closing "];

const galleryImages: GalleryImage[] = [
  {
    id: 'img-1748059365454',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1375610225247260783/FiveM_by_Cfx.re_5_24_2025_4_19_24_AM.png?ex=6832505b&is=6830fedb&hm=6832d8ec76702092c3f847469d495f1ac203b29417dbaffed5afd9f077fe97ae&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1375610225247260783/FiveM_by_Cfx.re_5_24_2025_4_19_24_AM.png?ex=68344a9b&is=6832f91b&hm=8a2731e11474c0839bf2984b944b43e1c3a1e62f8e91e2e7e628d84894d21c2e&",
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
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1372041463143333969/La.PNG?ex=68347df0&is=68332c70&hm=0fdfb0c357c641576bbf062fdce734404451beb02d829f608c9a8e8ffcf064d8&",
    
    thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1372041463143333969/La.PNG?ex=6831daf0&is=68308970&hm=61cc5ec45ff324866e150d2f8467aa257b5e40711a5c3874e196210030b54f41&=&format=webp&quality=lossless&width=514&height=438",
    caption: 'Untitled',
    category: ['action', 'scenery'],
    author: 'DevsDoOpStuff',
    date: '2025-05-14'
  },
  {
    id: 'img-1748061291879-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371891856945975377/Screenshot_2025-05-14_013858.png?ex=6831f85b&is=6830a6db&hm=25197b8ce1c199c11466a5a72493c2343fe11ed313cf22048ac25caed613358b&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371891856945975377/Screenshot_2025-05-14_013858.png?ex=6831f85b&is=6830a6db&hm=25197b8ce1c199c11466a5a72493c2343fe11ed313cf22048ac25caed613358b&",
    caption: '💔 🧈 😄 1',
    category: ['civilian', 'scenery', 'vehicles'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-13'
  },
  {
    id: 'img-1748061291879-1',
    src: "https://media.discordapp.net/attachments/1343855665075978300/1371891857545756732/Screenshot_2025-05-14_013925.png?ex=6831f85b&is=6830a6db&hm=451a38a448a01eb4ee4099e49b12be9c046612645fc60448d4e334000d1aa368&=&format=webp&quality=lossless&width=1424&height=800",
    thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1371891857545756732/Screenshot_2025-05-14_013925.png?ex=6831f85b&is=6830a6db&hm=451a38a448a01eb4ee4099e49b12be9c046612645fc60448d4e334000d1aa368&=&format=webp&quality=lossless&width=1424&height=800",
    caption: '💔 🧈 😄 2',
    category: ['civilian', 'scenery', 'vehicles'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-13'
  },
  {
    id: 'img-1748061291879-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371891858044751892/Screenshot_2025-05-14_014013.png?ex=6831f85b&is=6830a6db&hm=11377303722e9a6780fb4a2691828facffc40082baf7a4af9db4c6bf1704f63b&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371891858044751892/Screenshot_2025-05-14_014013.png?ex=6831f85b&is=6830a6db&hm=11377303722e9a6780fb4a2691828facffc40082baf7a4af9db4c6bf1704f63b&",
    caption: '💔 🧈 😄 3',
    category: ['civilian', 'scenery', 'vehicles'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-13'
  },
  {
    id: 'img-1748061291879-3',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371891858854117386/Screenshot_2025-05-14_014150.png?ex=6831f85b&is=6830a6db&hm=891095e612a9040993be1e76ede7aff3e8ca3a62607ecbef92faa642fd541fa8&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371891858854117386/Screenshot_2025-05-14_014150.png?ex=6831f85b&is=6830a6db&hm=891095e612a9040993be1e76ede7aff3e8ca3a62607ecbef92faa642fd541fa8&",
    caption: '💔 🧈 😄 4',
    category: ['civilian', 'scenery', 'vehicles'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-13'
  },
  {
    id: 'img-1748061324367',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371459485759176786/enhanced_Screenshot_2025-05-12_210425.png?ex=68325fed&is=68310e6d&hm=8e7cff913e623432bebe8c74e2090372a93162c9c0da416400884c18bafd9d4f&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371459485759176786/enhanced_Screenshot_2025-05-12_210425.png?ex=68325fed&is=68310e6d&hm=8e7cff913e623432bebe8c74e2090372a93162c9c0da416400884c18bafd9d4f&",
    caption: 'Untitled',
    category: ['vehicles', 'civilian'],
    author: 'Dead Ocean',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061381976',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371456408892997672/Screenshot_2025-05-11_184045.png?ex=68325d10&is=68310b90&hm=acf8950464c6a5494af360cc5e975e452ca957ce7ea674d1527517c9af14b180&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371456408892997672/Screenshot_2025-05-11_184045.png?ex=68325d10&is=68310b90&hm=acf8950464c6a5494af360cc5e975e452ca957ce7ea674d1527517c9af14b180&",
    caption: 'Onna okai prashne 😑😐',
    category: ['civilian', 'vehicles', 'police'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061422888',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371456082790056026/Screenshot_2025-05-10_044752.png?ex=68325cc2&is=68310b42&hm=66b2f2b15a55f7d0371b0eb593a693f54af9e9a72b510873b793b1e73ea2f13c&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371456082790056026/Screenshot_2025-05-10_044752.png?ex=68325cc2&is=68310b42&hm=66b2f2b15a55f7d0371b0eb593a693f54af9e9a72b510873b793b1e73ea2f13c&",
    caption: 'Untitled',
    category: ['police', 'vehicles', 'scenery'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061477676-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397763027308636/Screenshot_10.png?ex=68322672&is=6830d4f2&hm=42091a4d6ac903370079466cc54b516a7e1d170df180d64352bee3f10b0c046f&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397763027308636/Screenshot_10.png?ex=68322672&is=6830d4f2&hm=42091a4d6ac903370079466cc54b516a7e1d170df180d64352bee3f10b0c046f&",
    caption: 'BRUH ❤️ 1',
    category: ['action', 'criminal', 'scenery'],
    author: 'Leo_Andrew',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061477676-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397763564044288/Screenshot_11.png?ex=68322672&is=6830d4f2&hm=5af8344e7a8130a184f2c5e870d79598f5c12c4494d7f71b3977f03ac54d52bb&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397763564044288/Screenshot_11.png?ex=68322672&is=6830d4f2&hm=5af8344e7a8130a184f2c5e870d79598f5c12c4494d7f71b3977f03ac54d52bb&",
    caption: 'BRUH ❤️ 2',
    category: ['action', 'criminal', 'scenery'],
    author: 'Leo_Andrew',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061477676-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397764042457160/Screenshot_12.png?ex=68322672&is=6830d4f2&hm=8c5bc6de42a063d08bd0ebf5ad5e052fda863837b6121e239fc11679c7c23495&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397764042457160/Screenshot_12.png?ex=68322672&is=6830d4f2&hm=8c5bc6de42a063d08bd0ebf5ad5e052fda863837b6121e239fc11679c7c23495&",
    caption: 'BRUH ❤️ 3',
    category: ['action', 'criminal', 'scenery'],
    author: 'Leo_Andrew',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061477676-3',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397764579201205/Screenshot_13.png?ex=68322672&is=6830d4f2&hm=727eeb036ffa71acaf4405cc623062bc45298e495dedd1986e806430cede3f28&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371397764579201205/Screenshot_13.png?ex=68322672&is=6830d4f2&hm=727eeb036ffa71acaf4405cc623062bc45298e495dedd1986e806430cede3f28&",
    caption: 'BRUH ❤️ 4',
    category: ['action', 'criminal', 'scenery'],
    author: 'Leo_Andrew',
    date: '2025-05-12'
  },
  {
    id: 'img-1748061565262-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078244291575991/FiveM_by_Cfx.re_5_11_2025_2_21_29_PM.png?ex=68324e5e&is=6830fcde&hm=d5c4d7f227ec4610e89566549dcc761dcf581a946eaf6012f953537eec484454&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078244291575991/FiveM_by_Cfx.re_5_11_2025_2_21_29_PM.png?ex=68324e5e&is=6830fcde&hm=d5c4d7f227ec4610e89566549dcc761dcf581a946eaf6012f953537eec484454&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061565262-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078244844965969/FiveM_by_Cfx.re_5_11_2025_2_22_33_PM.png?ex=68324e5e&is=6830fcde&hm=955123a638b0641672ae341cb5f478d0aba33cad265495e262e5116cdf8e790b&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078244844965969/FiveM_by_Cfx.re_5_11_2025_2_22_33_PM.png?ex=68324e5e&is=6830fcde&hm=955123a638b0641672ae341cb5f478d0aba33cad265495e262e5116cdf8e790b&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061565262-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078245478568016/FiveM_by_Cfx.re_5_11_2025_2_24_10_PM.png?ex=68324e5f&is=6830fcdf&hm=ce2a2ecb22a8ebb71a435f87888954a24f0605c77157bbce01183334267997a1&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078245478568016/FiveM_by_Cfx.re_5_11_2025_2_24_10_PM.png?ex=68324e5f&is=6830fcdf&hm=ce2a2ecb22a8ebb71a435f87888954a24f0605c77157bbce01183334267997a1&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061565262-3',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078246031949955/FiveM_by_Cfx.re_5_11_2025_2_29_39_PM.png?ex=68324e5f&is=6830fcdf&hm=00e138caa6de6237d9ff6bea29dc5965f7c91c4983289c3b402dfa22e90e4eef&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078246031949955/FiveM_by_Cfx.re_5_11_2025_2_29_39_PM.png?ex=68324e5f&is=6830fcdf&hm=00e138caa6de6237d9ff6bea29dc5965f7c91c4983289c3b402dfa22e90e4eef&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061565262-4',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078246615224480/FiveM_by_Cfx.re_5_11_2025_2_30_53_PM.png?ex=68324e5f&is=6830fcdf&hm=c3d9b38c4898e3982d57135581a2797c631958ff2efa65bea792d2245e7f6507&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078246615224480/FiveM_by_Cfx.re_5_11_2025_2_30_53_PM.png?ex=68324e5f&is=6830fcdf&hm=c3d9b38c4898e3982d57135581a2797c631958ff2efa65bea792d2245e7f6507&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061565262-5',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078247122731068/FiveM_by_Cfx.re_5_11_2025_2_47_48_PM.png?ex=68324e5f&is=6830fcdf&hm=0cb6b842df86b8fcea8b79888b78df6d7ceed013dea47c69c99e32a5d9569d3f&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078247122731068/FiveM_by_Cfx.re_5_11_2025_2_47_48_PM.png?ex=68324e5f&is=6830fcdf&hm=0cb6b842df86b8fcea8b79888b78df6d7ceed013dea47c69c99e32a5d9569d3f&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061565262-6',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078434595409950/FiveM_by_Cfx.re_5_11_2025_2_48_19_PM.png?ex=68324e8c&is=6830fd0c&hm=788776a5c9a3c4aacdc703006dd49aa9b04cc7e9f8844a8a37ba997c1468b430&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371078434595409950/FiveM_by_Cfx.re_5_11_2025_2_48_19_PM.png?ex=68324e8c&is=6830fd0c&hm=788776a5c9a3c4aacdc703006dd49aa9b04cc7e9f8844a8a37ba997c1468b430&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061629952-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077907639828573/FiveM_by_Cfx.re_5_11_2025_1_43_14_PM.png?ex=68324e0e&is=6830fc8e&hm=be9c2569cd4ebfcdf4586668647dc4cbe6f2c88eddcb5c3318345f9c2c6656bc&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077907639828573/FiveM_by_Cfx.re_5_11_2025_1_43_14_PM.png?ex=68324e0e&is=6830fc8e&hm=be9c2569cd4ebfcdf4586668647dc4cbe6f2c88eddcb5c3318345f9c2c6656bc&",
    caption: 'Untitled',
    category: ['civilian', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061629952-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077908314984578/FiveM_by_Cfx.re_5_11_2025_1_51_14_PM.png?ex=68324e0e&is=6830fc8e&hm=62320a86c938b7e91ec58d0220fea3e6902011e26024b32e81c4c4938fe44e69&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077908314984578/FiveM_by_Cfx.re_5_11_2025_1_51_14_PM.png?ex=68324e0e&is=6830fc8e&hm=62320a86c938b7e91ec58d0220fea3e6902011e26024b32e81c4c4938fe44e69&",
    caption: 'Untitled',
    category: ['civilian', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061629952-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077908877283408/FiveM_by_Cfx.re_5_11_2025_2_08_55_PM.png?ex=68324e0e&is=6830fc8e&hm=3a07712aae2601b87f3a082c149d2cca289fffeee8c443be503ab732b626da92&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077908877283408/FiveM_by_Cfx.re_5_11_2025_2_08_55_PM.png?ex=68324e0e&is=6830fc8e&hm=3a07712aae2601b87f3a082c149d2cca289fffeee8c443be503ab732b626da92&",
    caption: 'Untitled',
    category: ['civilian', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061696139',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077909422538822/FiveM_by_Cfx.re_5_11_2025_2_14_51_PM.png?ex=68324e0f&is=6830fc8f&hm=e12f7fc957ce70a8734a97155d4e37d78dc44d514ee10dc2adb3bf437650ecb2&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1371077909422538822/FiveM_by_Cfx.re_5_11_2025_2_14_51_PM.png?ex=68324e0f&is=6830fc8f&hm=e12f7fc957ce70a8734a97155d4e37d78dc44d514ee10dc2adb3bf437650ecb2&",
    caption: 'Untitled',
    category: ['police'],
    author: 'FERDISTREAMS',
    date: '2025-05-11'
  },
  {
    id: 'img-1748061752694-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370759886165508178/IMG_20250205_103807-enhanced.png?ex=68327760&is=683125e0&hm=1f1e4aa2cd9b6eb02500e44b3c9de10a93f4d83da66bd8fa77a4f7e8b14bbf5d&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370759886165508178/IMG_20250205_103807-enhanced.png?ex=68327760&is=683125e0&hm=1f1e4aa2cd9b6eb02500e44b3c9de10a93f4d83da66bd8fa77a4f7e8b14bbf5d&",
    caption: 'Untitled',
    category: ['vehicles', 'scenery', 'civilian'],
    author: 'Ⓥ Manikh',
    date: '2025-05-10'
  },
  {
    id: 'img-1748061752694-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370759885356142694/FiveM20by20Cfx-re20-20Venty20Roleplay203_4_2025204_36_4820PM-enhanced_1.png?ex=68327760&is=683125e0&hm=5abc32b10f46f0186996cf2cbc38f690df85c7292319fa774c360acdcf39debb&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370759885356142694/FiveM20by20Cfx-re20-20Venty20Roleplay203_4_2025204_36_4820PM-enhanced_1.png?ex=68327760&is=683125e0&hm=5abc32b10f46f0186996cf2cbc38f690df85c7292319fa774c360acdcf39debb&",
    caption: 'Untitled',
    category: ['vehicles', 'scenery', 'civilian'],
    author: 'Ⓥ Manikh',
    date: '2025-05-10'
  },
  {
    id: 'img-1748061752694-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370757018385907792/IMG_20250510_190737.jpg?ex=683274b4&is=68312334&hm=c61c99db2745b0b33e23ad663bdb56fcbb3440febf54300bfd12c3b972482964&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370757018385907792/IMG_20250510_190737.jpg?ex=683274b4&is=68312334&hm=c61c99db2745b0b33e23ad663bdb56fcbb3440febf54300bfd12c3b972482964&",
    caption: 'Untitled',
    category: ['vehicles', 'scenery', 'civilian'],
    author: 'Ⓥ Manikh',
    date: '2025-05-10'
  },
  {
    id: 'img-1748061823863-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326277856428072/FiveM_by_Cfx.re_5_9_2025_1_01_44_PM.png?ex=6832350c&is=6830e38c&hm=7de78bbadd65189885f6d4663fc91a2f0b73edd45e4159b185e87310bc2b032f&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326277856428072/FiveM_by_Cfx.re_5_9_2025_1_01_44_PM.png?ex=6832350c&is=6830e38c&hm=7de78bbadd65189885f6d4663fc91a2f0b73edd45e4159b185e87310bc2b032f&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061823863-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326278497894461/FiveM_by_Cfx.re_5_9_2025_12_42_28_PM.png?ex=6832350c&is=6830e38c&hm=6cb9d438caa6afc349eb7915593c2310d66637a8d0c963a95ab3f9b9a6d48e3e&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326278497894461/FiveM_by_Cfx.re_5_9_2025_12_42_28_PM.png?ex=6832350c&is=6830e38c&hm=6cb9d438caa6afc349eb7915593c2310d66637a8d0c963a95ab3f9b9a6d48e3e&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061823863-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326279143952424/FiveM_by_Cfx.re_5_9_2025_12_50_44_PM.png?ex=6832350c&is=6830e38c&hm=5030ce79ada94a793e4f79e48a6bd9ef85b0bf61a7206a522888725f8a4f734a&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326279143952424/FiveM_by_Cfx.re_5_9_2025_12_50_44_PM.png?ex=6832350c&is=6830e38c&hm=5030ce79ada94a793e4f79e48a6bd9ef85b0bf61a7206a522888725f8a4f734a&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061823863-3',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326279605321781/FiveM_by_Cfx.re_5_9_2025_12_54_34_PM.png?ex=6832350c&is=6830e38c&hm=41fe8213c65a3931f3f170d78a30b1e39c81e234b9828e3773a1735ea1dfe529&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326279605321781/FiveM_by_Cfx.re_5_9_2025_12_54_34_PM.png?ex=6832350c&is=6830e38c&hm=41fe8213c65a3931f3f170d78a30b1e39c81e234b9828e3773a1735ea1dfe529&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061823863-4',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326280167489606/FiveM_by_Cfx.re_5_9_2025_12_59_36_PM.png?ex=6832350c&is=6830e38c&hm=b9cf16ca0eef6f5d73c9134d44acd5ae999dca1236763a0308a83d977095d789&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370326280167489606/FiveM_by_Cfx.re_5_9_2025_12_59_36_PM.png?ex=6832350c&is=6830e38c&hm=b9cf16ca0eef6f5d73c9134d44acd5ae999dca1236763a0308a83d977095d789&",
    caption: 'Untitled',
    category: ['civilian', 'vehicles', 'scenery'],
    author: 'FERDISTREAMS',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061884303-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370240400127688845/mf4.png?ex=6831e511&is=68309391&hm=fe6cb331cd7113187e3ca527fac8f362564dab3d5bbf72b6b25e97ff09e8331f&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370240400127688845/mf4.png?ex=6831e511&is=68309391&hm=fe6cb331cd7113187e3ca527fac8f362564dab3d5bbf72b6b25e97ff09e8331f&",
    caption: 'Untitled',
    category: ['criminal', 'vehicles', 'action'],
    author: 'Ⓥ ela Chanux',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061884303-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370240400664825897/mf2.png?ex=6831e511&is=68309391&hm=1f0276e55d2d38c3635d39379201da30d723b59251e3f537b419b1f4c23a9813&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370240400664825897/mf2.png?ex=6831e511&is=68309391&hm=1f0276e55d2d38c3635d39379201da30d723b59251e3f537b419b1f4c23a9813&",
    caption: 'Untitled',
    category: ['criminal', 'vehicles', 'action'],
    author: 'Ⓥ ela Chanux',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061884303-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370240401403019304/mf1.png?ex=6831e511&is=68309391&hm=271b4fdb4e6e35c82797b822cb73cd78a84367367ee798b517ef50c762bd69ae&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370240401403019304/mf1.png?ex=6831e511&is=68309391&hm=271b4fdb4e6e35c82797b822cb73cd78a84367367ee798b517ef50c762bd69ae&",
    caption: 'Untitled',
    category: ['criminal', 'vehicles', 'action'],
    author: 'Ⓥ ela Chanux',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061949315-0',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155354549260329/new_2.PNG?ex=68323e9c&is=6830ed1c&hm=a826ec6b9c330cdbf2c3928094f2d39ffeba99c21130b1ce4709b336b929b1f4&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155354549260329/new_2.PNG?ex=68323e9c&is=6830ed1c&hm=a826ec6b9c330cdbf2c3928094f2d39ffeba99c21130b1ce4709b336b929b1f4&",
    caption: '❤️  H + S ❤️ 1',
    category: ['civilian', 'scenery'],
    author: 'Ⓥ SONU',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061949315-1',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155355597701180/new_4.PNG?ex=68323e9d&is=6830ed1d&hm=3cac781215e800ed6e5eb1b0ccc7aae55cb927cbb8857fd316ae55f7afcf840a&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155355597701180/new_4.PNG?ex=68323e9d&is=6830ed1d&hm=3cac781215e800ed6e5eb1b0ccc7aae55cb927cbb8857fd316ae55f7afcf840a&",
    caption: '❤️  H + S ❤️ 2',
    category: ['civilian', 'scenery'],
    author: 'Ⓥ SONU',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061949315-2',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155356449411142/new_5.PNG?ex=68323e9d&is=6830ed1d&hm=4b06963cad4888214215e3e3dbeea52d03ef17fbadf434c98743a4eac0e07419&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155356449411142/new_5.PNG?ex=68323e9d&is=6830ed1d&hm=4b06963cad4888214215e3e3dbeea52d03ef17fbadf434c98743a4eac0e07419&",
    caption: '❤️  H + S ❤️ 3',
    category: ['civilian', 'scenery'],
    author: 'Ⓥ SONU',
    date: '2025-05-09'
  },
  {
    id: 'img-1748061949315-3',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155357304782848/new_8.PNG?ex=68323e9d&is=6830ed1d&hm=74a854a9e36b9fa83a773ad1a4b2b57f0737ac02274ff22293d4aeb4951fcaa1&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1370155357304782848/new_8.PNG?ex=68323e9d&is=6830ed1d&hm=74a854a9e36b9fa83a773ad1a4b2b57f0737ac02274ff22293d4aeb4951fcaa1&",
    caption: '❤️  H + S ❤️ 4',
    category: ['civilian', 'scenery'],
    author: 'Ⓥ SONU',
    date: '2025-05-09'
  },
  {
    id: 'img-1748062008459',
    src: "https://cdn.discordapp.com/attachments/1343855665075978300/1369986337608044664/Screenshot_2025-05-06_193625.png?ex=683249f4&is=6830f874&hm=6349f0d66063cc67ce2d78e42e0aee7c3adb8e72856e55c8f19ae2355a19d982&",
    thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1369986337608044664/Screenshot_2025-05-06_193625.png?ex=683249f4&is=6830f874&hm=6349f0d66063cc67ce2d78e42e0aee7c3adb8e72856e55c8f19ae2355a19d982&",
    caption: 'Untitled',
    category: ['civilian', 'scenery'],
    author: 'R 4 S H M 1 K 4',
    date: '2025-05-08'
  }
];

// 🚀 STEPS TO UPDATE:
// 1. Copy this entire code block
// 2. Open src/pages/Gallery.tsx
// 3. Find the existing "const galleryImages: GalleryImage[] = [" line
// 4. Replace the ENTIRE array (including the closing "];") with this code
// 5. Save the file
// 6. Commit to GitHub: git add . && git commit -m "Update gallery images" && git push
// 7. Vercel will auto-deploy in 2-3 minutes! ✨

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