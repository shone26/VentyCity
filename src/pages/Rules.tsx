// src/pages/Rules.tsx
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';

const Rules: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [isTranslated, setIsTranslated] = useState(false);

    // Handle anchor scrolling when component mounts
    useEffect(() => {
      // Check if there's a hash in the URL
      const hash = window.location.hash;
      if (hash === '#rules') {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const element = document.querySelector('#rules');
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
    }, []);

  // Toggle translation state
  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  // Sinhala translations (just adding one example rule in each category for demonstration)
  const sinhalaTranslations = {
    general: {
      "1.1": {
        title: "සියලුම ක්‍රීඩකයින්ට ගරු කරන්න",
        description: "ඔවුන්ගේ භූමිකාව, අත්දැකීම් මට්ටම හෝ පසුබිම නොසලකා සියලුම ක්‍රීඩකයින්ට ගෞරවයෙන් සලකන්න. ඕනෑම ආකාරයක වෙනස්කම් කිරීම, හිරිහැර කිරීම හෝ බිය ගැන්වීම තහනම් ය."
      },
      "1.2": {
        title: "ඔබේ ජීවිතය අගයන්න (VDM)",
        description: "ඔබේ චරිතය ඔවුන්ගේ ජීවිතය අගය කරන ලෙස සැමවිටම ක්‍රියා කරන්න. සාධාරණ පුද්ගලයෙකු සැබෑ ජීවිතයේදී නොගන්නා අනවශ්‍ය අවදානම් ගැනීමෙන් වළකින්න."
      },
      "1.3": {
        title: "කාර්ය මණ්ඩල තීරණ අවසන් තීරණ වේ",
        description: "සේවාදායක කාර්ය මණ්ඩලය විසින් ගනු ලබන තීරණ වලට ගරු කරන්න. ඔබ තීරණයක් සමඟ එකඟ නොවන්නේ නම්, අපගේ Discord සේවාදායකයේ නිසි මාර්ග හරහා අභියාචනා කිරීමට ඔබට හැකිය."
      },
      "1.4": {
        title: "එක් පුද්ගලයෙකුට එක් චරිතයක්",
        description: "ඔබට චරිත කිහිපයක් නිර්මාණය කළ හැකි නමුත්, එක් වරකට එක් චරිතයක් පමණක් සක්‍රිය කළ හැකිය. RP ප්‍රතිවිපාක මඟහැරීම සඳහා චරිත මාරු කිරීම තහනම් කර ඇත."
      },
      "1.5": {
        title: "සුදුසු චරිත නාම",
        description: "චරිත නාම යථාර්ථවාදී හා සුදුසු විය යුතුය. අපහාසාත්මක, ප්‍රසිද්ධ පුද්ගලයින්ගේ, හෝ මීම් නාම භාවිතා කිරීමට අවසර නැත."
      },
      "1.6": {
        title: "සටන් වාර්තාකරණය නොකරන්න",
        description: "රෝල්ප්ලේ තත්ත්වයන් මඟහැරීම සඳහා, විශේෂයෙන් සටන් හෝ පොලිස් අන්තර්ක්‍රියා අතරතුර, සේවාදායකයෙන් විසන්ධි වීම තහනම් කර ඇත."
      },
      "1.7": {
        title: "දෝෂ වාර්තා කරන්න",
        description: "ඔබ දෝෂයක් හෝ අයුතු ප්‍රයෝජනයක් සොයාගත හොත්, එය වහාම කාර්ය මණ්ඩලයට වාර්තා කරන්න. පෞද්ගලික වාසි සඳහා දෝෂ අවභාවිතා කිරීම තහනම් කර ඇත."
      }
    },
    roleplay: {
      "2.1": {
        title: "ඔබේ ජීවිතය අගයන්න (VDM)",
        description: "ඔබේ චරිතය ඔවුන්ගේ ජීවිතය අගය කරන ලෙස සැමවිටම ක්‍රියා කරන්න. සාධාරණ පුද්ගලයෙකු සැබෑ ජීවිතයේදී නොගන්නා අනවශ්‍ය අවදානම් ගැනීමෙන් වළකින්න."
      },
      "2.2": {
        title: "බිය රෝල්ප්ලේ (FearRP)",
        description: "තුවක්කුවක් ඔබට එල්ල කරන විට හෝ වෙනත් ජීවිත තර්ජනයක් ඇති අවස්ථාවලදී, ඔබේ චරිතය සුදුසු බියක් හා අනුකූලතාවයක් පෙන්විය යුතුය."
      },
      "2.3": {
        title: "නව ජීවිත නීතිය (NLR)",
        description: "ඔබේ චරිතය මිය ගිය පසු, ඔබගේ මරණයේ අවස්ථා අමතක කළ යුතු අතර මිනිත්තු 30ක් දක්වා එම තත්ත්වයට හෝ ස්ථානයට නැවත පැමිණිය නොහැක."
      },
      "2.4": {
        title: "අහඹු මරණ තරඟ නැත (RDM)",
        description: "නිසි රෝල්ප්ලේ අන්තර්ක්‍රියාවක් හා සාධාරණ හේතුවක් නොමැතිව ක්‍රීඩකයින් මරා නොදමන්න. අහඹු ඝාතන තරයේ තහනම් කර ඇත."
      },
      "2.5": {
        title: "වාහන මරණ තරඟ නැත (VDM)",
        description: "නිසි රෝල්ප්ලේ සාධාරණීකරණයක් නොමැතිව වෙනත් ක්‍රීඩකයින් මැරීමට හෝ තුවාල කිරීමට අවි ලෙස වාහන භාවිතා නොකරන්න."
      },
      "2.6": {
        title: "මෙටාගේමින්",
        description: "ඔබේ චරිතයට ක්‍රීඩාව තුළ නොදැන සිටින තොරතුරු (Discord, ප්‍රවාහයන්, ආදියෙන්) භාවිතා කිරීම තහනම් කර ඇත."
      },
      "2.7": {
        title: "පවර්ගේමින්",
        description: "වෙනත් ක්‍රීඩකයින් මත අවස්ථා බලෙන් පැටවීම හෝ කළ නොහැකි ක්‍රියා කිරීම තහනම් කර ඇත. ඔබේ චරිතයට මානව සීමාවන් ඇත."
      },
    },
    police: {
      "3.1": {
        title: "පොලිස් ප්‍රතිචාර",
        description: "පොලිසිය අනිවාර්යයෙන්ම ඔවුන්ගේ බරපතලකම මත පදනම්ව ඇමතුම් සහ තත්ත්වයන්ට සුදුසු පරිදි ප්‍රතිචාර දැක්විය යුතුය. දෙපාර්තමේන්තු ප්‍රොටෝකෝල සහ අණදීමේ දාමයන් අනුගමනය කරන්න."
      },
      "3.2": {
        title: "කොල්ලකෑම් සිසිලන කාලය",
        description: "ප්‍රධාන කොල්ලකෑම් (බැංකු, වෙළඳසැල්, ආදිය) සඳහා සිසිලන කාලසීමාවන් ඇත. වත්මන් සිසිලන කාල පරාසයන් සඳහා Discord පරීක්ෂා කරන්න."
      },
      "3.3": {
        title: "පණයට ගැනීම් නීති",
        description: "එක් කොල්ලකෑමකට උපරිම වශයෙන් පණයට ගත හැක්කේ පුද්ගලයින් 5 දෙනෙකි. ඔවුන් ඉල්ලීම් වලට අනුකූල වන්නේ නම් පණයට ගත් අයට ජීවත් වීමට සාධාරණ අවස්ථාවක් ලබා දිය යුතුය."
      },
      "3.4": {
        title: "කල්ලි ප්‍රදේශ",
        description: "ප්‍රදේශ සඳහා කල්ලි අතර ඇතිවන ගැටුම් නිසි ලෙස ප්‍රකාශ කර රෝල්ප්ලේ කළ යුතුය. RP සාධාරණීකරණයක් නොමැතිව වෙනත් කල්ලි වලට අහඹු ප්‍රහාර එල්ල කිරීම තහනම් කර ඇත."
      },
      "3.5": {
        title: "පොලිස් උපකරණ",
        description: "පොලිස් නිලධාරීන් ඔවුන්ගේ තනතුර හා තත්ත්වය මත පදනම්ව සුදුසු උපකරණ භාවිතා කළ යුතුය. අනවසර අවි හෝ වාහන භාවිතා නොකරන්න."
      },
      "3.6": {
        title: "අපරාධ ක්‍රියාකාරකම්",
        description: "සියලුම අපරාධ ක්‍රියාකාරකම් ඒ දක්වා නිසි රෝල්ප්ලේ සහිත විය යුතුය. සන්දර්භයක් හෝ සූදානමක් නොමැතිව අහඹු අපරාධ සිදු නොකරන්න."
      },
      "3.7": {
        title: "සාකච්ඡා කිරීම",
        description: "පණයට ගැනීමේ තත්ත්වයන් හෝ මුහුණට මුහුණ දීමේදී පොලිසිය හා අපරාධකරුවන් යන දෙපාර්ශවයම සාකච්ඡා කිරීමට හොඳ විශ්වාසයකින් යුතු ප්‍රයත්නයක් දැරිය යුතුය."
      }
    },
    vehicles: {
      "4.1": {
        title: "වාහන මෙහෙයුම",
        description: "හදිසි අවස්ථා නොවන අවස්ථාවලදී යථාර්ථවාදීව සහ රථවාහන නීති අනුව රිය පදවන්න. RP සාධාරණීකරණයකින් තොරව නොසැලකිලිමත් රිය පැදවීම තහනම් ය."
      },
      "4.2": {
        title: "වාහන අයිතිය",
        description: "රෝල්ප්ලේ සාධාරණීකරණයක් නොමැතිව වෙනත් ක්‍රීඩකයින්ගේ පෞද්ගලික වාහන සොරකම් නොකරන්න හෝ හානි නොකරන්න. වාහන සොරකම් නිසි ලෙස රෝල්ප්ලේ කළ යුතුය."
      },
      "4.3": {
        title: "දේපල වැටලීම",
        description: "වෙනත් ක්‍රීඩකයින්ගේ දේපල වැටලීමට නිසි රෝල්ප්ලේ හා සාමාන්‍යයෙන් පොලිස් මැදිහත්වීම අවශ්‍ය වේ. අහඹු වැටලීම් තහනම් කර ඇත."
      },
      "4.4": {
        title: "වාහන වෙනස්කිරීම්",
        description: "වාහන වෙනස්කිරීම් සේවාදායක මාර්ගෝපදේශයන්ට අනුකූල විය යුතුය. සමහර වාහන සඳහා වෙනස්කිරීම් පිළිබඳ සීමා තිබිය හැක."
      },
      "4.5": {
        title: "වාහන නැවැත්වීම",
        description: "ඔබේ වාහන සුදුසු පරිදි නවතා තබන්න. RP හේතුවක් නොමැතිව ප්‍රවේශ මාර්ග, මාර්ග, හෝ වෙනත් ක්‍රීඩකයින්ගේ වාහන අවහිර කිරීම තහනම් කර ඇත."
      },
      "4.6": {
        title: "දේපල ගෞරවය",
        description: "වෙනත් ක්‍රීඩකයින්ගේ දේපල සීමාවන්ට ගරු කරන්න. හේතුවක් නොමැතිව ඔවුන්ගේ නිවෙස් හෝ ව්‍යාපාර ස්ථානවල අනවශ්‍ය ලෙස රැඳී සිටීමෙන් හෝ හිරිහැර කිරීමෙන් වළකින්න."
      },
      "4.7": {
        title: "වාහන සීමා",
        description: "එක් චරිතයකට වාහන 8ක් දක්වා පමණක් අයිති විය හැක. දින 30ක් භාවිතා නොකරන වාහන ඔබේ ගරාජයෙන් ඉවත් කළ හැක."
      }
    },
    comms: {
      "5.1": {
        title: "හඬ කතාබහ",
        description: "ආසන්නතා හඬ කතාබස සුදුසු පරිදි භාවිතා කරන්න. RP අරමුණු සඳහා හැර හඬ වෙනස් කරන, ශබ්ද පුවරු හෝ සංගීත වාදනය තුළින් හඬ කතාබහ නොකරන්න."
      },
      "5.2": {
        title: "චරිතයෙන් පිටත (OOC)",
        description: "OOC සංවාද අවම වශයෙන් තබා ගන්න සහ නම් කරන ලද OOC සංවාද නාලිකා භාවිතා කරන්න. OOC සහ IC (චරිතය තුළ) සන්නිවේදන මිශ්‍ර නොකරන්න."
      },
      "5.3": {
        title: "රේඩියෝ සන්නිවේදන",
        description: "ඔබේ චරිතයට ප්‍රවේශය ඇති රේඩියෝ නාලිකා පමණක් භාවිතා කරන්න. පොලිසිය සහ හදිසි සේවා සඳහා සීමිත නාලිකා ඇත."
      },
      "5.4": {
        title: "දුරකථන භාවිතය",
        description: "ඇමතුම්, කෙටි පණිවුඩ සහ සමාජ මාධ්‍ය සඳහා ක්‍රීඩාව තුළ ඇති දුරකථනය භාවිතා කරන්න. ක්‍රීඩාව තුළ වාසි සඳහා බාහිර සන්නිවේදන මෙවලම් භාවිතා නොකළ යුතුය."
      },
      "5.5": {
        title: "භාෂාව",
        description: "සියලු සන්නිවේදනයන්හි අධික අශිෂ්ට වචන, වෛරී කථා, හෝ වෙනස්කම් කරන භාෂාව තහනම් කර ඇත."
      },
      "5.6": {
        title: "දැන්වීම්",
        description: "ක්‍රීඩාව තුළ දැන්වීම් ඔබේ චරිතයේ ව්‍යාපාරයට හෝ ක්‍රියාකාරකම් වලට අදාළ විය යුතුය. දැන්වීම් ස්පෑම් කිරීම නොකරන්න."
      },
      "5.7": {
        title: "හදිසි නාලිකා",
        description: "හදිසි නොවන තත්ත්වයන් සඳහා හදිසි නාලිකා (911) අවභාවිතා නොකරන්න. වැරදි වාර්තා සඳහා දඬුවම් කරනු ලැබේ."
      }
    }
  };

  return (
    <div>
      <Hero
        title="SERVER RULES"
        subtitle="Please read and follow these rules to ensure a great roleplay experience for everyone"
        showButtons={false}
        backgroundImage="bg-[url('../assets/images/rules-bg.jpg')]"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-black" id="rules">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Rule categories tabs */}
            <div className="overflow-x-auto py-2 mb-8 sm:mb-12">
              <div className="flex flex-nowrap min-w-max gap-2 justify-center sm:flex-wrap sm:min-w-0" >
                <CategoryButton
                  id="general"
                  active={activeCategory === 'general'}
                  onClick={() => setActiveCategory('general')}
                >
                  General Rules
                </CategoryButton>
                <CategoryButton
                  id="roleplay"
                  active={activeCategory === 'roleplay'}
                  onClick={() => setActiveCategory('roleplay')}
                >
                  Roleplay Guidelines
                </CategoryButton>
                <CategoryButton
                  id="police"
                  active={activeCategory === 'police'}
                  onClick={() => setActiveCategory('police')}
                >
                  Police & Criminal
                </CategoryButton>
                <CategoryButton
                  id="vehicles"
                  active={activeCategory === 'vehicles'}
                  onClick={() => setActiveCategory('vehicles')}
                >
                  Vehicles & Properties
                </CategoryButton>
                <CategoryButton
                  id="comms"
                  active={activeCategory === 'comms'}
                  onClick={() => setActiveCategory('comms')}
                >
                  Communication
                </CategoryButton>
              </div>
            </div>

            {/* Translation toggle button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleTranslation}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                title={isTranslated ? "Show English" : "Show Sinhala"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {isTranslated ? "English" : "සිංහල"}
              </button>
            </div>

            {/* Rules content */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 sm:p-6 md:p-8">
              {activeCategory === 'general' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    General Server Rules
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem
                      number="1.1"
                      title={isTranslated ? sinhalaTranslations.general["1.1"].title : "Respect All Players"}
                      description={isTranslated ? sinhalaTranslations.general["1.1"].description : "Treat all players with respect regardless of their role, experience level, or background. Discrimination, harassment, or bullying of any kind is strictly prohibited."}
                    />
                    <RuleItem
                      number="1.2"
                      title={isTranslated ? sinhalaTranslations.general["1.2"].title : "No Cheating or Exploiting"}
                      description={isTranslated ? sinhalaTranslations.general["1.2"].description : "Use of cheats, mods, exploits, or any third-party tools to gain an unfair advantage is strictly prohibited and will result in a permanent ban."}
                    />
                    <RuleItem
                      number="1.3"
                      title={isTranslated ? sinhalaTranslations.general["1.3"].title : "Staff Decisions Are Final"}
                      description={isTranslated ? sinhalaTranslations.general["1.3"].description : "Respect the decisions made by server staff. If you disagree with a decision, you may appeal through the proper channels on our Discord server."}
                    />
                    <RuleItem
                      number="1.4"
                      title={isTranslated ? sinhalaTranslations.general["1.4"].title : "One Character Per Person"}
                      description={isTranslated ? sinhalaTranslations.general["1.4"].description : "You may create multiple characters, but only one character can be active at a time. Character switching to avoid RP consequences is prohibited."}
                    />
                    <RuleItem
                      number="1.5"
                      title={isTranslated ? sinhalaTranslations.general["1.5"].title : "Appropriate Character Names"}
                      description={isTranslated ? sinhalaTranslations.general["1.5"].description : "Character names must be realistic and appropriate. No offensive, celebrity, or meme names are allowed."}
                    />
                    <RuleItem
                      number="1.6"
                      title={isTranslated ? sinhalaTranslations.general["1.6"].title : "No Combat Logging"}
                      description={isTranslated ? sinhalaTranslations.general["1.6"].description : "Disconnecting from the server to avoid roleplay situations, especially during combat or police interactions, is prohibited."}
                    />
                    <RuleItem
                      number="1.7"
                      title={isTranslated ? sinhalaTranslations.general["1.7"].title : "Report Bugs"}
                      description={isTranslated ? sinhalaTranslations.general["1.7"].description : "If you discover a bug or exploit, report it to staff immediately. Abuse of bugs for personal gain is prohibited."}
                    />
                  </div>
                </div>
              )}

              {activeCategory === 'roleplay' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Roleplay Guidelines
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem
                      number="2.1"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.1"].title : "Value Your Life (VDM)"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.1"].description : "Always act as if your character values their life. Don't take unnecessary risks that no reasonable person would take in real life."}
                    />
                    <RuleItem
                      number="2.2"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.2"].title : "Fear Roleplay (FearRP)"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.2"].description : "When held at gunpoint or in other life-threatening situations, your character must show appropriate fear and compliance."}
                    />
                    <RuleItem
                      number="2.3"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.3"].title : "New Life Rule (NLR)"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.3"].description : "After your character dies, you must forget the circumstances of your death and cannot return to the same situation or location for 30 minutes."}
                    />
                    <RuleItem
                      number="2.4"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.4"].title : "No Random Death Match (RDM)"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.4"].description : "Do not kill players without proper roleplay interaction and reasonable cause. Random killing is strictly prohibited."}
                    />
                    <RuleItem
                      number="2.5"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.5"].title : "No Vehicle Death Match (VDM)"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.5"].description : "Do not use vehicles as weapons to kill or injure other players without proper roleplay justification."}
                    />
                    <RuleItem
                      number="2.6"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.6"].title : "Metagaming"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.6"].description : "Using information your character wouldn't know in-game (from Discord, streams, etc.) is prohibited."}
                    />
                    <RuleItem
                      number="2.7"
                      title={isTranslated ? sinhalaTranslations.roleplay["2.7"].title : "Powergaming"}
                      description={isTranslated ? sinhalaTranslations.roleplay["2.7"].description : "Forcing scenarios on other players or performing impossible actions is prohibited. Your character has human limitations."}
                    />
                  </div>
                </div>
              )}

              {activeCategory === 'police' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Police & Criminal Rules
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem
                      number="3.1"
                      title={isTranslated ? sinhalaTranslations.police["3.1"].title : "Police Response"}
                      description={isTranslated ? sinhalaTranslations.police["3.1"].description : "Police must respond appropriately to calls and situations based on their severity. Follow department protocols and chains of command."}
                    />
                    <RuleItem
                      number="3.2"
                      title={isTranslated ? sinhalaTranslations.police["3.2"].title : "Robbery Cooldowns"}
                      description={isTranslated ? sinhalaTranslations.police["3.2"].description : "Major robberies (banks, stores, etc.) have cooldown periods. Check Discord for the current cooldown timers."}
                    />
                    <RuleItem
                      number="3.3"
                      title={isTranslated ? sinhalaTranslations.police["3.3"].title : "Hostage Rules"}
                      description={isTranslated ? sinhalaTranslations.police["3.3"].description : "Maximum of 5 hostages per robbery. Hostages must be given a fair chance to survive if they comply with demands."}
                    />
                    <RuleItem
                      number="3.4"
                      title={isTranslated ? sinhalaTranslations.police["3.4"].title : "Gang Territory"}
                      description={isTranslated ? sinhalaTranslations.police["3.4"].description : "Gang wars over territory must be properly declared and roleplayed. Random attacks on other gangs without RP justification is prohibited."}
                    />
                    <RuleItem
                      number="3.5"
                      title={isTranslated ? sinhalaTranslations.police["3.5"].title : "Police Equipment"}
                      description={isTranslated ? sinhalaTranslations.police["3.5"].description : "Police officers must use appropriate equipment based on their rank and the situation. No unauthorized weapons or vehicles."}
                    />
                    <RuleItem
                      number="3.6"
                      title={isTranslated ? sinhalaTranslations.police["3.6"].title : "Criminal Activities"}
                      description={isTranslated ? sinhalaTranslations.police["3.6"].description : "All criminal activities must have proper roleplay leading up to them. No random crimes without context or preparation."}
                    />
                    <RuleItem
                      number="3.7"
                      title={isTranslated ? sinhalaTranslations.police["3.7"].title : "Negotiation"}
                      description={isTranslated ? sinhalaTranslations.police["3.7"].description : "Both police and criminals must make a good faith effort to negotiate during hostage situations or standoffs."}
                    />
                  </div>
                </div>
              )}

              {activeCategory === 'vehicles' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Vehicles & Properties Rules
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem
                      number="4.1"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.1"].title : "Vehicle Operation"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.1"].description : "Drive realistically and according to traffic laws when not in emergency situations. Reckless driving without RP justification is prohibited."}
                    />
                    <RuleItem
                      number="4.2"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.2"].title : "Vehicle Ownership"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.2"].description : "Do not steal or damage other players' personal vehicles without roleplay justification. Vehicle theft must be roleplayed properly."}
                    />
                    <RuleItem
                      number="4.3"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.3"].title : "Property Raiding"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.3"].description : "Raiding other players' properties requires proper roleplay and usually police involvement. Random raiding is prohibited."}
                    />
                    <RuleItem
                      number="4.4"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.4"].title : "Vehicle Modifications"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.4"].description : "Vehicle modifications must comply with server guidelines. Certain vehicles may have restrictions on modifications."}
                    />
                    <RuleItem
                      number="4.5"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.5"].title : "Parking"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.5"].description : "Park your vehicles appropriately. Blocking entrances, roads, or other players' vehicles without RP reason is prohibited."}
                    />
                    <RuleItem
                      number="4.6"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.6"].title : "Property Respect"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.6"].description : "Respect other players' property boundaries. Do not loiter or harass players at their homes or businesses without reason."}
                    />
                    <RuleItem
                      number="4.7"
                      title={isTranslated ? sinhalaTranslations.vehicles["4.7"].title : "Vehicle Limits"}
                      description={isTranslated ? sinhalaTranslations.vehicles["4.7"].description : "Each character is limited to owning 8 vehicles. Vehicles unused for 30 days may be removed from your garage."}
                    />
                  </div>
                </div>
              )}

              {activeCategory === 'comms' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Communication Rules
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem
                      number="5.1"
                      title={isTranslated ? sinhalaTranslations.comms["5.1"].title : "Voice Chat"}
                      description={isTranslated ? sinhalaTranslations.comms["5.1"].description : "Use proximity voice chat appropriately. No voice changers, soundboards, or music playing through voice chat unless for RP purposes."}
                    />
                    <RuleItem
                      number="5.2"
                      title={isTranslated ? sinhalaTranslations.comms["5.2"].title : "Out of Character (OOC)"}
                      description={isTranslated ? sinhalaTranslations.comms["5.2"].description : "Keep OOC chat to a minimum and use the designated OOC chat channels. Do not mix OOC and IC (In Character) communications."}
                    />
                    <RuleItem
                      number="5.3"
                      title={isTranslated ? sinhalaTranslations.comms["5.3"].title : "Radio Communications"}
                      description={isTranslated ? sinhalaTranslations.comms["5.3"].description : "Only use radio channels your character would have access to. Police and emergency services have restricted channels."}
                    />
                    <RuleItem
                      number="5.4"
                      title={isTranslated ? sinhalaTranslations.comms["5.4"].title : "Phone Usage"}
                      description={isTranslated ? sinhalaTranslations.comms["5.4"].description : "Use the in-game phone for calls, texts, and social media. External communication tools should not be used for in-game advantage."}
                    />
                    <RuleItem
                      number="5.5"
                      title={isTranslated ? sinhalaTranslations.comms["5.5"].title : "Language"}
                      description={isTranslated ? sinhalaTranslations.comms["5.5"].description : "Excessive profanity, hate speech, or discriminatory language is prohibited in all communications."}
                    />
                    <RuleItem
                      number="5.6"
                      title={isTranslated ? sinhalaTranslations.comms["5.6"].title : "Advertisements"}
                      description={isTranslated ? sinhalaTranslations.comms["5.6"].description : "In-game advertisements must be relevant to your character's business or activities. No spamming advertisements."}
                    />
                    <RuleItem
                      number="5.7"
                      title={isTranslated ? sinhalaTranslations.comms["5.7"].title : "Emergency Channels"}
                      description={isTranslated ? sinhalaTranslations.comms["5.7"].description : "Do not abuse emergency channels (911) for non-emergency situations. False reports will be punished."}
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-2">Rule Enforcement</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Rules are enforced on a strike system. Repeated or severe violations may result in temporary or permanent bans from the server.
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  If you have questions about any rules or need clarification, please contact our staff team on Discord.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Join Our Discord for Full Rules Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const CategoryButton: React.FC<{
  id: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ id, active, onClick, children }) => (
  <button
    id={id}
    onClick={onClick}
    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${active
      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
  >
    {children}
  </button>
);

const RuleItem: React.FC<{
  number: string;
  title: string;
  description: string;
}> = ({ number, title, description }) => (
  <div className="border-b border-gray-700 pb-4">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-purple-600 text-white font-bold px-2 py-1 text-xs sm:text-sm rounded mr-3">
        {number}
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </div>
);

export default Rules;