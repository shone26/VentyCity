// src/pages/Gallery.tsx
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';

// Import gallery images
import image1 from '@/assets/gallery/1.png';
const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | GalleryImage>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        handleCloseLightbox();
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
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

  // Curated gallery images with real data
  const galleryImages: GalleryImage[] = [
    {
      id: 'img-1',
      src: image1,
      thumbnail: image1,
      caption: 'On a mountain',
      category: ['civilian', 'scenery'],
      author: 'Ⓥ Manikh',
      date: 'March 04, 2025'
    },
    {
      id: 'img-2',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272905420810/Screenshot_522.png?ex=6805e373&is=680491f3&hm=c28115229204e9a5bd96f0ec4bf560f22c8dc7cdc84d37eef6ef2deef376f754&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272905420810/Screenshot_522.png?ex=6805e373&is=680491f3&hm=c28115229204e9a5bd96f0ec4bf560f22c8dc7cdc84d37eef6ef2deef376f754&  ",
      caption: 'Thrimana',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 19, 2025'
    },
    {
      id: 'img-3',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272540782602/Screenshot_521.png?ex=6805e373&is=680491f3&hm=fa4ef5dae6bd76572901c773f41b8ccb1e1075c3ac413a22192b89bed7677c9f&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036272540782602/Screenshot_521.png?ex=6805e373&is=680491f3&hm=fa4ef5dae6bd76572901c773f41b8ccb1e1075c3ac413a22192b89bed7677c9f&  ",
      caption: 'Thrimana',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 19, 2025'
    },
    {
      id: 'img-4',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036428849778688/Screenshot_513.png?ex=6805e398&is=68049218&hm=7bb87d2f63934a8638c3f3cd4dbfe3a1a4417f0fa54bd1b652479ba7050fdcc9&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036428849778688/Screenshot_513.png?ex=6805e398&is=68049218&hm=7bb87d2f63934a8638c3f3cd4dbfe3a1a4417f0fa54bd1b652479ba7050fdcc9&  ",
      caption: 'Thrimana',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 19, 2025'
    },
    {
      id: 'img-5',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036273333501982/Screenshot_523.png?ex=6805e373&is=680491f3&hm=04dd5170860c999a92e6c8bff3a0fd887e23821cec70716c3a447fe2f5abe298&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1363036273333501982/Screenshot_523.png?ex=6805e373&is=680491f3&hm=04dd5170860c999a92e6c8bff3a0fd887e23821cec70716c3a447fe2f5abe298&  ",
      caption: 'Thrimana',
      category: ['events', 'civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 19, 2025'
    },
    {
      id: 'img-6',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1353656891712213044/Screenshot2040-enhanced.png?ex=68060b38&is=6804b9b8&hm=867e7c72105b806068c895b8b55d444f0c14da3cc784b57d1bf6c391869ce67a&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1353656891712213044/Screenshot2040-enhanced.png?ex=68060b38&is=6804b9b8&hm=867e7c72105b806068c895b8b55d444f0c14da3cc784b57d1bf6c391869ce67a&  ",
      caption: 'Inside a cafe',
      category: ['civilian'],
      author: 'Ⓥ BEASTBOY',
      date: 'March 24, 2025'
    },
    {
      id: 'img-7',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1350461612397428797/FiveM20by20Cfx-re20-20Venty20Roleplay203_15_2025206_56_3520PM1-enhanced.png?ex=6805a022&is=68044ea2&hm=7f627e921579837a1c599438d29906f935e070964e3e47c159fb969017e69e3b&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1350461612397428797/FiveM20by20Cfx-re20-20Venty20Roleplay203_15_2025206_56_3520PM1-enhanced.png?ex=6805a022&is=68044ea2&hm=7f627e921579837a1c599438d29906f935e070964e3e47c159fb969017e69e3b&  ",
      caption: 'Inside Bahama Mamas',
      category: ['events', 'civilian'],
      author: 'Ⓥ Manikh',
      date: 'March 15, 2025'
    },
    {
      id: 'img-8',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1348177896031780947/image.png?ex=6805e302&is=68049182&hm=cfe9197d380f880512d249e8fe0e73d43c766abb57a2d9646c3976193120bd0e&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1348177896031780947/image.png?ex=6805e302&is=68049182&hm=cfe9197d380f880512d249e8fe0e73d43c766abb57a2d9646c3976193120bd0e&  ",
      caption: 'A murder',
      category: ['criminal', 'police'],
      author: 'Nigga',
      date: 'March 9, 2025'
    },
    {
      id: 'img-9',
      src: "https://files.mastodon.social/media_attachments/files/113/862/398/818/659/282/original/1f53153d490ffb2d.png  ",
      thumbnail: "https://files.mastodon.social/media_attachments/files/113/862/398/818/659/282/original/1f53153d490ffb2d.png  ",
      caption: 'Police Station',
      category: ['police', 'action'],
      author: 'Anonymous',
      date: 'April 15, 2025'
    },
    {
      id: 'img-10',
      src: "https://files.mastodon.social/media_attachments/files/113/862/393/796/845/821/original/de3ccc322f9ede65.png  ",
      thumbnail: "https://files.mastodon.social/media_attachments/files/113/862/393/796/845/821/original/de3ccc322f9ede65.png  ",
      caption: ' A Yakuza Member',
      category: ['action', 'criminal'],
      author: 'Anonymous',
      date: 'January 21, 2025'
    },
    {
      id: 'img-11',
      src: "https://files.mastodon.social/media_attachments/files/113/561/850/059/069/034/original/9c701eb5c3b68d78.png  ",
      thumbnail: "https://files.mastodon.social/media_attachments/files/113/561/850/059/069/034/original/9c701eb5c3b68d78.png  ",
      caption: 'A group of civilians',
      category: ['action', 'civilian'],
      author: 'Soul',
      date: 'November 28, 2024'
    },
    {
      id: 'img-12',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057737647325327/enhanced_Screenshot_489.png?ex=6805f10b&is=68049f8b&hm=1581f5ee488672c888b85d80f48d22b87843a5d436e47b44d1e768d2649cd22e&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057737647325327/enhanced_Screenshot_489.png?ex=6805f10b&is=68049f8b&hm=1581f5ee488672c888b85d80f48d22b87843a5d436e47b44d1e768d2649cd22e&  ",
      caption: 'Phillbox Hospital member',
      category: ['civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵:',
      date: 'April 14, 2025'
    },
    {
      id: 'img-13',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057739400413385/enhanced_Screenshot_485.png?ex=6805f10c&is=68049f8c&hm=52344c0f312ac9c6a0d2c3088840406d4f29175e1c9173e03d46b535e8c31228&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057739400413385/enhanced_Screenshot_485.png?ex=6805f10c&is=68049f8c&hm=52344c0f312ac9c6a0d2c3088840406d4f29175e1c9173e03d46b535e8c31228&",
      caption: 'Phillbox Hospital',
      category: ['civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 14, 2025'
    },
    {
      id: 'img-14',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057738528133250/enhanced_Screenshot_488.png?ex=6805f10c&is=68049f8c&hm=ebfeb4cfc077ddd0a2ed4f852d43511b7d21c25e2c307d1c395c4e6a7129e176&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057738528133250/enhanced_Screenshot_488.png?ex=6805f10c&is=68049f8c&hm=ebfeb4cfc077ddd0a2ed4f852d43511b7d21c25e2c307d1c395c4e6a7129e176&  ",
      caption: 'Phillbox Hospital',
      category: ['civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 14, 2025'
    },
    {
      id: 'img-15',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057740310446140/enhanced_Screenshot_484.png?ex=6805f10c&is=68049f8c&hm=118dbacf770671fc8b22d599636bd94a6d5b2a517f13963ec8a3037b16078c18&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1361057740310446140/enhanced_Screenshot_484.png?ex=6805f10c&is=68049f8c&hm=118dbacf770671fc8b22d599636bd94a6d5b2a517f13963ec8a3037b16078c18&  ",
      caption: 'Phillbox Hospital',
      category: ['civilian'],
      author: '𝑼𝑺𝑯𝑨𝑵',
      date: 'April 14, 2025'
    },
    {
      id: 'img-16',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1358759907830009976/vvv.png?ex=68057e06&is=68042c86&hm=76d9614117bbe9845c090824d19650a4a6bcda6cafa44fa42b05f5dfc6ac81d1&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1358759907830009976/vvv.png?ex=68057e06&is=68042c86&hm=76d9614117bbe9845c090824d19650a4a6bcda6cafa44fa42b05f5dfc6ac81d1&  ",
      caption: 'Beach sunset',
      category: ['scenary', 'civilian'],
      author: 'Ⓥ ela Chanux',
      date: 'April 07, 2025'
    },
    {
      id: 'img-17',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1346367807914508318/IMG_0355.jpg?ex=6805e4bb&is=6804933b&hm=7b671b81992502e618811ac03ada3e2d546f60ed16c92734b4c6efd966da59ce&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1346367807914508318/IMG_0355.jpg?ex=6805e4bb&is=6804933b&hm=7b671b81992502e618811ac03ada3e2d546f60ed16c92734b4c6efd966da59ce&  ",
      caption: 'A scenary of city on a mountain',
      category: ['civilian', 'scenary'],
      author: 'RanDiNeX',
      date: 'March 04, 2025'
    },
    {
      id: 'img-18',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1346366250904719412/IMG_20250205_103706-enhanced.png?ex=6805e348&is=680491c8&hm=1a7adb9ef5d1395bfdb45ee283569c4b6d331905a3cf1f7f28ecbf76693b9a97&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1346366250904719412/IMG_20250205_103706-enhanced.png?ex=6805e348&is=680491c8&hm=1a7adb9ef5d1395bfdb45ee283569c4b6d331905a3cf1f7f28ecbf76693b9a97&  ",
      caption: 'A view of a tower in the beach',
      category: ['scenary', 'civilian'],
      author: 'Ⓥ Manikh',
      date: 'March 04, 2025'
    },
    {
      id: 'img-19',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1352309286729941104/FiveM20by20Cfx-re20-20Venty20Roleplay203_20_2025206_00_1520PM-enhanced.png?ex=6805c16a&is=68046fea&hm=46a8e05b98db7c22b17d47a4507007da6e07cc1b82dc407966a9f52c3284943d&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1352309286729941104/FiveM20by20Cfx-re20-20Venty20Roleplay203_20_2025206_00_1520PM-enhanced.png?ex=6805c16a&is=68046fea&hm=46a8e05b98db7c22b17d47a4507007da6e07cc1b82dc407966a9f52c3284943d&  ",
      caption: 'Inside a tunnel',
      category: ['vehicles', 'civilian'],
      author: 'Ⓥ Manikh:',
      date: 'March 20, 2025'
    },
    {
      id: 'img-20',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1351195776071499826/Screenshot_2025-03-17_211413.png?ex=6805a8e1&is=68045761&hm=afe308b0fb304fcb176e1c66a44f7298d6f9db92d33604f49731b4756fc007b0&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1351195776071499826/Screenshot_2025-03-17_211413.png?ex=6805a8e1&is=68045761&hm=afe308b0fb304fcb176e1c66a44f7298d6f9db92d33604f49731b4756fc007b0&  ",
      caption: 'A memeber with his bike',
      category: ['vehicles', 'civilian'],
      author: 'R 4 S H M 1 K 4:',
      date: 'March 17, 2025'
    },
    {
      id: 'img-21',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1349432487708721214/Capture1-enhanced.png?ex=6805d630&is=680484b0&hm=ce41553b2d0e975e2593e2664e1d92b2891ad8b6d1df749238ac80b7af6c30d9&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1349432487708721214/Capture1-enhanced.png?ex=6805d630&is=680484b0&hm=ce41553b2d0e975e2593e2664e1d92b2891ad8b6d1df749238ac80b7af6c30d9&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-22',
      src: "https://media.discordapp.net/attachments/1343855665075978300/1348530022415208490/Desktop20Screenshot202025-02-2120-2013-59-34-93-enhanced.png?ex=6805d973&is=680487f3&hm=ecfc96aea88b59db72247b7cf4e194272f8fb0ff8b53465ca1c8f75543158e9b&=&format=webp&quality=lossless&width=1005&height=800  ",
      thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1348530022415208490/Desktop20Screenshot202025-02-2120-2013-59-34-93-enhanced.png?ex=6805d973&is=680487f3&hm=ecfc96aea88b59db72247b7cf4e194272f8fb0ff8b53465ca1c8f75543158e9b&=&format=webp&quality=lossless&width=1005&height=800  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-23',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1348342858335260753/FiveM20by20Cfx-re20-20Venty20Roleplay203_9_2025209_05_4520PM1-enhanced_1.png?ex=6805d3e4&is=68048264&hm=e4a4cc1f9d0c84acab72abeb94df21458cf02b4919a60494b37464087f352760&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1348342858335260753/FiveM20by20Cfx-re20-20Venty20Roleplay203_9_2025209_05_4520PM1-enhanced_1.png?ex=6805d3e4&is=68048264&hm=e4a4cc1f9d0c84acab72abeb94df21458cf02b4919a60494b37464087f352760&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-24',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1355536287427465457/Screenshot20165658-enhanced_g.png?ex=6805a14b&is=68044fcb&hm=eec3a7204cb26ba59729849b860ae5dcb460bf35d04f1c7b0dcdaec845c66c9f&",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1355536287427465457/Screenshot20165658-enhanced_g.png?ex=6805a14b&is=68044fcb&hm=eec3a7204cb26ba59729849b860ae5dcb460bf35d04f1c7b0dcdaec845c66c9f&",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-25',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1360925903135309905/Screenshot_74.png?ex=68057644&is=680424c4&hm=ad3c0945d3f3e80ea3e2efec292c2c14e867ffeac430ecdda88425fd4fadeb2a&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1360925903135309905/Screenshot_74.png?ex=68057644&is=680424c4&hm=ad3c0945d3f3e80ea3e2efec292c2c14e867ffeac430ecdda88425fd4fadeb2a&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-26',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1360717790616748282/image.png?ex=680605f2&is=6804b472&hm=99b807239b7e66c629acdb5f0fb4280cbc648a300d3eaa516d7db153bb78d22a&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1360717790616748282/image.png?ex=680605f2&is=6804b472&hm=99b807239b7e66c629acdb5f0fb4280cbc648a300d3eaa516d7db153bb78d22a&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-27',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1346366192188657716/IMG_20250205_103807-enhanced.png?ex=6805e33a&is=680491ba&hm=afdc0b986ef845bc24933dec6d77ffea9d7aceb31fb8700ae6e7d3970116416d&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1346366192188657716/IMG_20250205_103807-enhanced.png?ex=6805e33a&is=680491ba&hm=afdc0b986ef845bc24933dec6d77ffea9d7aceb31fb8700ae6e7d3970116416d&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-28',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1357845745054777345/Screenshot_2025-04-05_035805.png?ex=68057665&is=680424e5&hm=5796db542999a725dfc2d0d6f773095aa82c54cbf359c759b0b4a67b9ba51c9e&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1357845745054777345/Screenshot_2025-04-05_035805.png?ex=68057665&is=680424e5&hm=5796db542999a725dfc2d0d6f773095aa82c54cbf359c759b0b4a67b9ba51c9e&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-29',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1354484775607468212/Screenshot_472.png?ex=6805c27f&is=680470ff&hm=7a1bd29c13054a574b3aca25dbc183d2798904ef08c610cf46fa9b5a3fc88ddb&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1354484775607468212/Screenshot_472.png?ex=6805c27f&is=680470ff&hm=7a1bd29c13054a574b3aca25dbc183d2798904ef08c610cf46fa9b5a3fc88ddb&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-30',
      src: "https://media.discordapp.net/attachments/1343855665075978300/1349606711677292588/4a191c98-d7b9-42fb-885b-fd994e8e94f7.jpg?ex=6805cfb2&is=68047e32&hm=5b6b346b0634d5f03ff378d095b5c056cd18ae4e7896d688553476a10adffd85&=&format=webp&width=1419&height=800  ",
      thumbnail: "https://media.discordapp.net/attachments/1343855665075978300/1349606711677292588/4a191c98-d7b9-42fb-885b-fd994e8e94f7.jpg?ex=6805cfb2&is=68047e32&hm=5b6b346b0634d5f03ff378d095b5c056cd18ae4e7896d688553476a10adffd85&=&format=webp&width=1419&height=800  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-31',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1349606712285335602/4e4fe78d-cf55-4f91-9608-2f640f734064.jpg?ex=6805cfb2&is=68047e32&hm=9c2ccee27e645810ad5d9bef1a8ecf2a77358b4b13bb62848f0a875a3e089ef0&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1349606712285335602/4e4fe78d-cf55-4f91-9608-2f640f734064.jpg?ex=6805cfb2&is=68047e32&hm=9c2ccee27e645810ad5d9bef1a8ecf2a77358b4b13bb62848f0a875a3e089ef0&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    },
    {
      id: 'img-32',
      src: "https://cdn.discordapp.com/attachments/1343855665075978300/1346890808569364662/FiveM20by20Cfx-re20-20Venty20Roleplay203_5_20252010_01_1220PM1-enhanced.png?ex=6805d190&is=68048010&hm=ff28523de97240f23507d4ed3e220aaa76b0795b943a007ca84dc13a1dabb58f&  ",
      thumbnail: "https://cdn.discordapp.com/attachments/1343855665075978300/1346890808569364662/FiveM20by20Cfx-re20-20Venty20Roleplay203_5_20252010_01_1220PM1-enhanced.png?ex=6805d190&is=68048010&hm=ff28523de97240f23507d4ed3e220aaa76b0795b943a007ca84dc13a1dabb58f&  ",
      caption: 'On a mountain',
      category: ['action'],
      author: 'OfficerBrave',
      date: 'April 15, 2025'
    }
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => Array.isArray(img.category) && img.category.includes(activeCategory));

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
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
            {/* Filter Categories */}
            <div className="mb-8 sm:mb-12 overflow-x-auto py-2">
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
      {/* Fixed Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
          style={{ zIndex: 1500 }} // keep as is, this should overlay navbar
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseLightbox();
            }
          }}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            aria-label="Next image"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="max-h-[75vh] max-w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-[75vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>

          {/* Image info */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 sm:p-4 text-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking info
          >
            <p className="font-bold text-base sm:text-lg truncate">{selectedImage.caption}</p>
            <p className="text-gray-300 text-xs sm:text-sm truncate">
              By {selectedImage.author} • {selectedImage.date}
            </p>
          </div>

          {/* ESC key hint */}
          <div className="absolute top-4 left-4 text-white/70 text-sm bg-black/50 px-2 py-1 rounded">
            Press ESC to close
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
      <p className="text-gray-300 text-xs sm:text-sm truncate">By {image.author}</p>
    </div>
  </div>
);

export default Gallery;