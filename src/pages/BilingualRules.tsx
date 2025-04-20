// src/pages/BilingualRules.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// export default function BilingualRules(): JSX.Element 

const BilingualRules: React.FC = () =>{
  const [language, setLanguage] = useState<'english' | 'sinhala'>('english');
  const [activeCategory, setActiveCategory] = useState('general');

  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Header with language toggle */}
      <header className="py-4 bg-gradient-to-r from-orange-500 to-purple-600 w-full">
        <div className="w-full px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center sm:text-left">
            {language === 'english' ? 'VENTY Roleplay Server Rules' : 'VENTY රෝල්ප්ලේ සර්වර් නීති'}
          </h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLanguage('english')}
              className={`px-3 py-1 rounded-md ${language === 'english' ? 'bg-white text-purple-600 font-bold' : 'bg-black/30 text-white'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('sinhala')}
              className={`px-3 py-1 rounded-md ${language === 'sinhala' ? 'bg-white text-purple-600 font-bold' : 'bg-black/30 text-white'}`}
            >
              සිංහල
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full px-4 py-6 md:py-8">
        {/* Introduction */}
        <div className="w-full mb-6 md:mb-10 text-center">
          <p className="text-gray-300 text-base md:text-lg">
            {language === 'english' 
              ? 'Please read and follow these rules to ensure a great roleplay experience for everyone.' 
              : 'සියලුම දෙනාට හොඳ රෝල්ප්ලේ අත්දැකීමක් ලබා ගැනීම සඳහා කරුණාකර මෙම නීති කියවා අනුගමනය කරන්න.'}
          </p>
        </div>

        {/* Rule categories tabs */}
        <div className="overflow-x-auto py-2 mb-6 md:mb-8 -mx-4 px-4 md:mx-0 w-full">
          <div className="flex flex-nowrap gap-2 w-max md:w-full md:justify-center md:flex-wrap">
            <CategoryButton 
              id="general" 
              active={activeCategory === 'general'} 
              onClick={() => setActiveCategory('general')}
              language={language}
            />
            <CategoryButton 
              id="roleplay" 
              active={activeCategory === 'roleplay'} 
              onClick={() => setActiveCategory('roleplay')}
              language={language}
            />
            <CategoryButton 
              id="police" 
              active={activeCategory === 'police'} 
              onClick={() => setActiveCategory('police')}
              language={language}
            />
            <CategoryButton 
              id="vehicles" 
              active={activeCategory === 'vehicles'} 
              onClick={() => setActiveCategory('vehicles')}
              language={language}
            />
            <CategoryButton 
              id="comms" 
              active={activeCategory === 'comms'} 
              onClick={() => setActiveCategory('comms')}
              language={language}
            />
          </div>
        </div>
        
        {/* Rules content */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 sm:p-6 md:p-8 w-full ">
          {activeCategory === 'general' && (
            <GeneralRules language={language} />
          )}
          
          {/* {activeCategory === 'roleplay' && (
            <RoleplayRules language={language} />
          )}
          
          {activeCategory === 'police' && (
            <PoliceRules language={language} />
          )} */}
          
          {/* {activeCategory === 'vehicles' && (
            <VehicleRules language={language} />
          )} */}
          
          {activeCategory === 'comms' && (
            <CommunicationRules language={language} />
          )}
          
          <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-orange-400 mb-2">
              {language === 'english' ? 'Rule Enforcement' : 'නීති ක්‍රියාත්මක කිරීම'}
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              {language === 'english'
                ? 'Rules are enforced on a strike system. Repeated or severe violations may result in temporary or permanent bans from the server.'
                : 'නීති ස්ට්‍රයික් පද්ධතියක් මත ක්‍රියාත්මක වේ. නැවත නැවත හෝ බරපතල නීති උල්ලංඝනය කිරීම් නිසා සර්වරයෙන් තාවකාලික හෝ ස්ථිර තහනම් පැනවීමට හේතු විය හැක.'}
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              {language === 'english'
                ? 'If you have questions about any rules or need clarification, please contact our staff team on Discord.'
                : 'ඔබට කිසියම් නීතියක් පිළිබඳව ප්‍රශ්න තිබේ නම් හෝ පැහැදිලි කිරීමක් අවශ්‍ය නම්, කරුණාකර අපගේ කාර්ය මණ්ඩලය Discord හරහා සම්බන්ධ කර ගන්න.'}
            </p>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-center">
          <a
            href="https://discord.gg/Pv77Upbptx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            {language === 'english' ? 'Join Our Discord for Full Rules Documentation' : 'සම්පූර්ණ නීති ප්‍රලේඛනය සඳහා අපගේ Discord සම්බන්ධ වන්න'}
          </a>
        </div>

        {/* Back to home link */}
        <div className="mt-6 md:mt-8 text-center">
          <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base">
            {language === 'english' ? '← Back to Home' : '← මුල් පිටුවට ආපසු'}
          </Link>
        </div>
      </main>
    </div>
  );
};

// Helper Components
interface CategoryButtonProps {
  id: string;
  active: boolean;
  onClick: () => void;
  language: 'english' | 'sinhala';
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ id, active, onClick, language }) => {
  const getLabel = () => {
    if (language === 'english') {
      switch (id) {
        case 'general': return 'General Rules';
        case 'roleplay': return 'Roleplay Guidelines';
        case 'police': return 'Police & Criminal';
        case 'vehicles': return 'Vehicles & Properties';
        case 'comms': return 'Communication';
        default: return '';
      }
    } else {
      switch (id) {
        case 'general': return 'සාමාන්‍ය නීති';
        case 'roleplay': return 'රෝල්ප්ලේ මාර්ගෝපදේශ';
        case 'police': return 'පොලිස් සහ අපරාධ';
        case 'vehicles': return 'වාහන සහ දේපල';
        case 'comms': return 'සන්නිවේදනය';
        default: return '';
      }
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-2 sm:px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm md:text-base whitespace-nowrap ${
        active
          ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {getLabel()}
    </button>
  );
};

interface RuleItemProps {
  number: string;
  titleEn: string;
  titleSi: string;
  descriptionEn: string;
  descriptionSi: string;
  language: 'english' | 'sinhala';
}

const RuleItem: React.FC<RuleItemProps> = ({ 
  number, 
  titleEn, 
  titleSi, 
  descriptionEn, 
  descriptionSi, 
  language 
}) => {
  return (
    <div className="border-b border-gray-700 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="flex-shrink-0 bg-purple-600 text-white font-bold px-2 py-1 text-xs rounded mt-0.5">
          {number}
        </div>
        <div>
          <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-1">
            {language === 'english' ? titleEn : titleSi}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            {language === 'english' ? descriptionEn : descriptionSi}
          </p>
        </div>
      </div>
    </div>
  );
};

// Rule category components
interface RuleSectionProps {
  language: 'english' | 'sinhala';
}

const GeneralRules: React.FC<RuleSectionProps> = ({ language }) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 md:mb-6">
        {language === 'english' ? 'Vehicles & Properties Rules' : 'වාහන සහ දේපල නීති'}
      </h2>
      
      <div className="space-y-2 md:space-y-3">
        <RuleItem 
          number="4.1" 
          titleEn="Vehicle Operation" 
          titleSi="වාහන ක්‍රියාකරවීම"
          descriptionEn="Drive realistically and according to traffic laws when not in emergency situations. Reckless driving without RP justification is prohibited."
          descriptionSi="හදිසි තත්ත්වයන්හි නොමැති විට යථාර්ථවාදී ලෙස සහ රථවාහන නීති වලට අනුව රිය පදවන්න. RP සාධාරණීකරණයකින් තොරව නොසැලකිලිමත් ලෙස රිය පැදවීම තහනම් ය."
          language={language}
        />
        <RuleItem 
          number="4.2" 
          titleEn="Vehicle Ownership" 
          titleSi="වාහන අයිතිය"
          descriptionEn="Do not steal or damage other players' personal vehicles without roleplay justification. Vehicle theft must be roleplayed properly."
          descriptionSi="රෝල්ප්ලේ සාධාරණීකරණයකින් තොරව අනෙකුත් ක්‍රීඩකයින්ගේ පුද්ගලික වාහන සොරකම් නොකරන්න හෝ හානි නොකරන්න. වාහන සොරකම් නිසි ලෙස රංගනය කළ යුතුය."
          language={language}
        />
        <RuleItem 
          number="4.3" 
          titleEn="Property Raiding" 
          titleSi="දේපල වැටලීම"
          descriptionEn="Raiding other players' properties requires proper roleplay and usually police involvement. Random raiding is prohibited."
          descriptionSi="අනෙකුත් ක්‍රීඩකයින්ගේ දේපළ වැටලීම සඳහා නිසි රෝල්ප්ලේ සහ සාමාන්‍යයෙන් පොලිස් සම්බන්ධතාවය අවශ්‍ය වේ. අහඹු වැටලීම් තහනම් ය."
          language={language}
        />
        <RuleItem 
          number="4.4" 
          titleEn="Vehicle Modifications" 
          titleSi="වාහන වෙනස් කිරීම්"
          descriptionEn="Vehicle modifications must comply with server guidelines. Certain vehicles may have restrictions on modifications."
          descriptionSi="වාහන වෙනස් කිරීම් සර්වර් මාර්ගෝපදේශ වලට අනුකූල විය යුතුය. සමහර වාහන සඳහා වෙනස් කිරීම් පිළිබඳ සීමා තිබිය හැක."
          language={language}
        />
        <RuleItem 
          number="4.5" 
          titleEn="Parking" 
          titleSi="රථ ගාල් කිරීම"
          descriptionEn="Park your vehicles appropriately. Blocking entrances, roads, or other players' vehicles without RP reason is prohibited."
          descriptionSi="ඔබේ වාහන සුදුසු ලෙස නවතා තබන්න. RP හේතුවක් නොමැතිව පිවිසුම්, මාර්ග, හෝ අනෙක් ක්‍රීඩකයින්ගේ වාහන අවහිර කිරීම තහනම් ය."
          language={language}
        />
        <RuleItem 
          number="4.6" 
          titleEn="Property Respect" 
          titleSi="දේපල ගරු කිරීම"
          descriptionEn="Respect other players' property boundaries. Do not loiter or harass players at their homes or businesses without reason."
          descriptionSi="අනෙකුත් ක්‍රීඩකයින්ගේ දේපළ සීමාවන්ට ගරු කරන්න. හේතුවක් නොමැතිව ඔවුන්ගේ නිවෙස් හෝ ව්‍යාපාර වල රැඳී සිටීමෙන් හෝ හිරිහැර කිරීමෙන් වළකින්න."
          language={language}
        />
        <RuleItem 
          number="4.7" 
          titleEn="Vehicle Limits" 
          titleSi="වාහන සීමාවන්"
          descriptionEn="Each character is limited to owning 8 vehicles. Vehicles unused for 30 days may be removed from your garage."
          descriptionSi="සෑම චරිතයකටම වාහන 8 ක් දක්වා සීමා වේ. දින 30 ක් භාවිතා නොකරන වාහන ඔබේ ගරාජයෙන් ඉවත් කළ හැක."
          language={language}
        />
      </div>
    </div>
  );
};

const CommunicationRules: React.FC<RuleSectionProps> = ({ language }) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 md:mb-6">
        {language === 'english' ? 'Communication Rules' : 'සන්නිවේදන නීති'}
      </h2>
      
      <div className="space-y-2 md:space-y-3">
        <RuleItem 
          number="5.1" 
          titleEn="Voice Chat" 
          titleSi="හඬ චැට්"
          descriptionEn="Use proximity voice chat appropriately. No voice changers, soundboards, or music playing through voice chat unless for RP purposes."
          descriptionSi="ආසන්න හඬ චැට් නිසි ලෙස භාවිතා කරන්න. RP අරමුණු සඳහා හැර හඬ වෙනස් කරන, ශබ්ද පුවරු, හෝ හඬ චැට් හරහා සංගීතය වාදනය කිරීම නොකරන්න."
          language={language}
        />
        <RuleItem 
          number="5.2" 
          titleEn="Out of Character (OOC)" 
          titleSi="චරිත බාහිර (OOC)"
          descriptionEn="Keep OOC chat to a minimum and use the designated OOC chat channels. Do not mix OOC and IC (In Character) communications."
          descriptionSi="OOC චැට් අවම වශයෙන් තබා ගන්න සහ නියමිත OOC චැට් නාලිකා භාවිතා කරන්න. OOC සහ IC (චරිතය තුළ) සන්නිවේදන මිශ්‍ර නොකරන්න."
          language={language}
        />
        <RuleItem 
          number="5.3" 
          titleEn="Radio Communications" 
          titleSi="රේඩියෝ සන්නිවේදන"
          descriptionEn="Only use radio channels your character would have access to. Police and emergency services have restricted channels."
          descriptionSi="ඔබේ චරිතයට ප්‍රවේශය ඇති රේඩියෝ නාලිකා පමණක් භාවිතා කරන්න. පොලිසිය සහ හදිසි සේවා සඳහා සීමිත නාලිකා ඇත."
          language={language}
        />
        <RuleItem 
          number="5.4" 
          titleEn="Phone Usage" 
          titleSi="දුරකථන භාවිතය"
          descriptionEn="Use the in-game phone for calls, texts, and social media. External communication tools should not be used for in-game advantage."
          descriptionSi="ඇමතුම්, කෙටි පණිවුඩ, සහ සමාජ මාධ්‍ය සඳහා ක්‍රීඩාව තුළ දුරකථනය භාවිතා කරන්න. ක්‍රීඩාව තුළ වාසියක් සඳහා බාහිර සන්නිවේදන මෙවලම් භාවිතා නොකළ යුතුය."
          language={language}
        />
        <RuleItem 
          number="5.5" 
          titleEn="Language" 
          titleSi="භාෂාව"
          descriptionEn="Excessive profanity, hate speech, or discriminatory language is prohibited in all communications."
          descriptionSi="සියලුම සන්නිවේදනයන්හි අධික අසභ්‍ය වචන, වෛරී කථා, හෝ වෙනස්කම් කරන භාෂාව භාවිතා කිරීම තහනම් ය."
          language={language}
        />
        <RuleItem 
          number="5.6" 
          titleEn="Advertisements" 
          titleSi="වෙළඳ දැන්වීම්"
          descriptionEn="In-game advertisements must be relevant to your character's business or activities. No spamming advertisements."
          descriptionSi="ක්‍රීඩාව තුළ වෙළඳ දැන්වීම් ඔබේ චරිතයේ ව්‍යාපාරයට හෝ ක්‍රියාකාරකම් වලට අදාළ විය යුතුය. වෙළඳ දැන්වීම් ස්පෑම් නොකරන්න."
          language={language}
        />
        <RuleItem 
          number="5.7" 
          titleEn="Emergency Channels" 
          titleSi="හදිසි නාලිකා"
          descriptionEn="Do not abuse emergency channels (911) for non-emergency situations. False reports will be punished."
          descriptionSi="හදිසි නොවන තත්ත්වයන් සඳහා හදිසි නාලිකා (911) අවභාවිතා නොකරන්න. වැරදි වාර්තා දඬුවම් ලැබේ."
          language={language}
        />
      </div>
    </div>
  );
};


export default BilingualRules;