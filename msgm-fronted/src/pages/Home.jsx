import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Star,
  Heart,
  Target,
  Library,
  Computer,
  FlaskConical,
  Trophy,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  School,
  Bus,
  Wifi,
  X,
  ZoomIn,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   PHOTO GALLERY POPUP  (Hotstar-style)
───────────────────────────────────────────── */
const PhotoPopup = ({ photos, initialIndex, onClose }) => {
  const [current, setCurrent] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [photos.length, isAnimating]);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c + 1) % photos.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [photos.length, isAnimating]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const currentPhoto = photos[current];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-4 sm:px-10 md:px-20 py-8 sm:py-12 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-black aspect-video">
          <img
            key={current}
            src={currentPhoto.src}
            alt={currentPhoto.label}
            className="w-full h-full object-cover animate-fadeScale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-sm"
          >
            <X size={20} />
          </button>
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {current + 1} / {photos.length}
          </div>
          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:translate-x-[-2px] backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:translate-x-[2px] backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <div className="bg-white/95 backdrop-blur-sm px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-slideUp">
          <div className="flex-1">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">{currentPhoto.label}</p>
            {currentPhoto.description && (
              <p className="text-xs text-gray-600 mt-1">{currentPhoto.description}</p>
            )}
            <p className="text-xs text-gray-400 mt-0.5">MSGM Inter College • Kusmara, Mainpuri</p>
          </div>
          <div className="flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrent(i);
                    setTimeout(() => setIsAnimating(false), 300);
                  }
                }}
                className={`rounded-full transition-all duration-500 ${
                  i === current 
                    ? 'w-6 h-2 bg-blue-600' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   HERO SLIDESHOW with dynamic heading & subheading
───────────────────────────────────────────── */
const SLIDE_DURATION = 5000;

const HeroSlideshow = ({ slides, onApply, onContact, onPhotoClick }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = performance.now();
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setActive((prev) => (prev + 1) % slides.length);
        start = performance.now();
        setProgress(0);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [slides.length]);

  const goTo = (i) => {
    setActive(i);
    setProgress(0);
  };

  const currentSlide = slides[active];

  return (
    <section className="relative h-[520px] sm:h-[680px] md:h-[820px] overflow-hidden bg-slate-900">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-out cursor-pointer ${
            active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onClick={() => onPhotoClick(i)}
        >
          <img src={s.src} alt={s.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
            <ZoomIn size={18} className="text-white" />
          </div>
        </div>
      ))}

      <div className="relative h-full flex items-center pointer-events-none">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="max-w-xl text-white pointer-events-auto animate-slideUp">
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-5 shadow-lg animate-fadeIn">
              <GraduationCap size={16} className="animate-bounce-subtle" />
              <span>Est. 1984 • U.P. Board Affiliated</span>
            </div>

            {/* Dynamic Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slideRight">
              {currentSlide.heading}
            </h1>

            {/* Dynamic Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 mb-4 leading-relaxed animate-slideRight animation-delay-100">
              {currentSlide.subheading}
            </p>

            {currentSlide.caption && (
              <div className="mb-6 animate-fadeIn bg-black/30 backdrop-blur-sm rounded-lg p-3 inline-block">
                <p className="text-yellow-300 text-sm sm:text-base font-medium">{currentSlide.caption}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 animate-slideUp animation-delay-200">
              <button
                onClick={onApply}
                className="group flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base cursor-pointer"
              >
                <span>{t('applyNow')}</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={onContact}
                className="flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/15 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm sm:text-base cursor-pointer backdrop-blur-sm hover:-translate-y-1"
              >
                <Phone size={16} className="animate-pulse-subtle" />
                <span>{t('contactUs')}</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-10 mt-9">
              {[
                { val: '40+', label: t('yearsOfExcellence'), delay: 300 },
                { val: '1000+', label: t('students'), delay: 400 },
                { val: '50+', label: t('qualifiedTeachers'), delay: 500 },
              ].map((s, i) => (
                <div 
                  key={i} 
                  className="animate-fadeIn"
                  style={{ animationDelay: `${s.delay}ms`, animationFillMode: 'both' }}
                >
                  <div className="text-2xl sm:text-3xl font-bold animate-count-up">{s.val}</div>
                  <div className="text-white/70 text-xs sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? 'w-8 h-2.5 bg-yellow-400'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70 hover:scale-125'
            }`}
          />
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-none z-10"
        style={{ width: `${progress}%` }}
      />

      <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 pointer-events-auto animate-fadeIn">
        {active + 1} / {slides.length}
      </div>

      <div className="absolute bottom-24 right-5 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full z-10 pointer-events-none animate-pulse-subtle">
        <ZoomIn size={12} className="inline mr-1" /> Click photo to enlarge
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#f9fafb" fillOpacity="1" d="M0,40L60,48C120,56,240,72,360,72C480,72,600,56,720,50C840,44,960,50,1080,54C1200,58,1320,60,1380,61L1440,62L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CAMPUS PHOTO STRIP
───────────────────────────────────────────── */
const CampusStrip = ({ photos, onPhotoClick }) => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
          {t('ourCampus')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => onPhotoClick(i)}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-28 sm:h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-3">
                <span className="text-white text-xs sm:text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.label}
                </span>
              </div>
              <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn size={14} className="text-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   MAIN HOME COMPONENT
───────────────────────────────────────────── */
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [popupPhotos, setPopupPhotos] = useState([]);

  const openPopup = (photosArray, index) => {
    setPopupPhotos(photosArray);
    setPopupIndex(index);
    setPopupOpen(true);
  };
  const closePopup = () => setPopupOpen(false);

  // Hero slides with unique headings, subheadings, and captions
  const heroSlides = [
    { 
      src:'msgm.jpeg',
      label: 'Main Building - MSGM Inter College',
      heading: 'Welcome to MSGM Inter College',
      subheading: 'उत्कृष्टता का केंद्र • Centre of Excellence',
      caption: '🎓 Excellence in Education Since 1984',
      description: 'Our iconic main building houses state-of-the-art classrooms and administrative offices.'
    },
    { 
      
       src:'game4.jfif',
      label: 'Digital Library & Reading Room',
      heading: 'Knowledge Beyond Books',
      subheading: 'Digital Library with 5000+ Resources',
      caption: '📚 Read, Learn, Grow',
      description: 'A quiet place for students to explore knowledge with modern digital tools.'
    },
    { 
      src:'hero 5.jfif',
      label: 'Annual Sports Meet',
      heading: 'Champions Are Made Here',
      subheading: 'Sports • Fitness • Team Spirit',
      caption: '🏆 Play, Compete, Excel',
      description: 'Students participating in athletics, cricket, football, and more.'
    },
    { 
      src:'hero 4.jfif',
      label: 'Science Laboratory',
      heading: 'Where Curiosity Meets Discovery',
      subheading: 'Hands-on Learning in Modern Labs',
      caption: '🔬 Experiment • Innovate • Succeed',
      description: 'Fully equipped physics, chemistry, and biology labs for practical education.'
    },
    { 
      src:'hero 2.jfif',
      label: 'Cultural Festival',
      heading: 'Celebrate Diversity & Talent',
      subheading: 'Art • Music • Dance • Drama',
      caption: '🎭 Express Yourself',
      description: 'Annual cultural fest showcasing student creativity and performances.'
    },
  ];

  // Campus strip photos (distinct from hero)
  

  // Gallery photos (sports & events - distinct from above)
  const galleryPhotos = [
    { 
      src:'game.jfif',
      label: 'Cricket Match',
      description: 'Inter-school cricket tournament at our ground.'
    },
    { 
      src:'game1.jfif',
      label: 'Football Practice',
      description: 'Students training under professional coach.'
    },
    { 
      src:'game2.jfif',
      label: 'Athletics Meet',
      description: 'Annual sports day – 100m, 200m, and relay races.'
    },
    { 
      src:'game3.jfif',
      label: 'Yoga & Meditation',
      description: 'Daily wellness sessions for students.'
    },
    { 
      src:'hero 5.jfif',
      label: 'Chess Competition',
      description: 'Developing strategic thinking through chess.'
    },
  ];

  const achievements = [
    { icon: <Trophy size={30} />, value: '40+', label: t('yearsOfExcellence'), sublabel: '1984 से', bg: 'bg-yellow-50', text: 'text-yellow-600' },
    { icon: <Users size={30} />, value: '10000+', label: t('students'), sublabel: 'विद्यार्थी', bg: 'bg-blue-50', text: 'text-blue-600' },
    { icon: <Award size={30} />, value: '98%', label: t('passPercentage'), sublabel: 'परीक्षा परिणाम', bg: 'bg-green-50', text: 'text-green-600' },
    { icon: <GraduationCap size={30} />, value: '50+', label: t('qualifiedTeachers'), sublabel: 'शिक्षक', bg: 'bg-purple-50', text: 'text-purple-600' },
  ];

  const whyChooseUs = [
    { icon: <School size={22} />, title: 'Quality Education', titleHi: 'गुणवत्तापूर्ण शिक्षा', desc: 'Experienced teachers and modern teaching methods', descHi: 'अनुभवी शिक्षक और आधुनिक शिक्षण पद्धति', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: <Target size={22} />, title: 'Holistic Development', titleHi: 'सर्वांगीण विकास', desc: 'Focus on academics, sports & cultural activities', descHi: 'शिक्षा, खेल एवं सांस्कृतिक गतिविधियों पर ध्यान', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: <Users size={22} />, title: 'Experienced Faculty', titleHi: 'अनुभवी शिक्षक', desc: 'Dedicated teachers with years of experience', descHi: 'वर्षों के अनुभव वाले समर्पित शिक्षक', color: 'text-purple-600', bg: 'bg-purple-100' },
    { icon: <Bus size={22} />, title: 'Transport Facility', titleHi: 'परिवहन सुविधा', desc: 'Safe and comfortable bus service', descHi: 'सुरक्षित एवं आरामदायक बस सेवा', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { icon: <Wifi size={22} />, title: 'Digital Learning', titleHi: 'डिजिटल लर्निंग', desc: 'Smart classrooms and computer labs', descHi: 'स्मार्ट क्लासरूम और कंप्यूटर लैब', color: 'text-red-600', bg: 'bg-red-100' },
    { icon: <Heart size={22} />, title: 'Safe Environment', titleHi: 'सुरक्षित वातावरण', desc: '24/7 security and CCTV surveillance', descHi: '24/7 सुरक्षा और सीसीटीवी निगरानी', color: 'text-pink-600', bg: 'bg-pink-100' },
  ];

  const facilities = [
    { icon: <BookOpen size={22} />, title: 'Smart Classrooms', titleHi: 'स्मार्ट क्लासरूम', desc: 'Digital classrooms with interactive smart boards', descHi: 'डिजिटल बोर्ड के साथ आधुनिक कक्षाएं', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: <FlaskConical size={22} />, title: 'Science Labs', titleHi: 'विज्ञान प्रयोगशाला', desc: 'Well-equipped physics, chemistry & biology labs', descHi: 'भौतिकी, रसायन विज्ञान और जीव विज्ञान लैब', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: <Computer size={22} />, title: 'Computer Lab', titleHi: 'कंप्यूटर लैब', desc: 'Modern computer lab with 50+ systems', descHi: '50+ सिस्टम के साथ आधुनिक कंप्यूटर लैब', color: 'text-purple-600', bg: 'bg-purple-100' },
    { icon: <Library size={22} />, title: 'Library', titleHi: 'पुस्तकालय', desc: 'Rich collection of 5000+ books', descHi: '5000+ पुस्तकों का समृद्ध संग्रह', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { icon: <Target size={22} />, title: 'Sports Complex', titleHi: 'खेल परिसर', desc: 'Ground for cricket, football & athletics', descHi: 'क्रिकेट, फुटबॉल और एथलेटिक्स का मैदान', color: 'text-red-600', bg: 'bg-red-100' },
    { icon: <Heart size={22} />, title: 'Medical Facility', titleHi: 'चिकित्सा सुविधा', desc: 'First aid and regular health checkups', descHi: 'प्राथमिक उपचार और नियमित स्वास्थ्य जांच', color: 'text-pink-600', bg: 'bg-pink-100' },
  ];

  const testimonials = [
    { name: 'Rahul Sharma', cls: 'Class of 2020', quote: 'MSGM Inter College provided me with the perfect foundation for my career.', quoteHi: 'एमएसजीएम इंटर कॉलेज ने मुझे मेरे करियर के लिए सही नींव दी।', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { name: 'Priya Gupta', cls: 'Class of 2021', quote: 'The best years of my life! Excellent faculty and great learning environment.', quoteHi: 'मेरे जीवन के सर्वश्रेष्ठ वर्ष! उत्कृष्ट शिक्षक और बेहतरीन माहौल।', rating: 5, img: 'https://images.unsplash.com/photo-1494790108777-3f12982e0f5f?w=100&q=80' },
    { name: 'Amit Kumar', cls: 'Class of 2019', quote: 'Thanks to MSGM for shaping my future. The discipline and education here are top-notch.', quoteHi: 'मेरा भविष्य बनाने के लिए एमएसजीएम का धन्यवाद।', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  ];

  const isHindi = t('language') === 'hi';

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSlideshow
        slides={heroSlides}
        onApply={() => navigate('/admission')}
        onContact={() => navigate('/contact')}
        onPhotoClick={(index) => openPopup(heroSlides, index)}
      />


      {/* Achievements Section */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest animate-fadeIn">
              {t('ourAchievements')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-slideUp">
              {t('proudMilestones')}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item, i) => (
              <Card 
                key={i} 
                className="p-5 sm:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl ${item.bg} ${item.text} mb-3 transition-all duration-300 hover:scale-110 hover:rotate-3`}>
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{item.label}</div>
                <div className="text-gray-400 text-xs mt-1">{item.sublabel}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="animate-slideRight">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">
                {t('aboutUs')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-2">
                {t('aboutSchool')}
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded-r-lg transition-all duration-300 hover:shadow-md">
                <p className="text-blue-800 font-semibold italic text-sm sm:text-base">"{t('schoolMotto')}"</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{t('aboutSchoolDesc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                {[
                  { title: t('vision'), desc: 'Fostering global beneficiaries with Indian values', bg: 'from-blue-50 to-blue-100', text: 'text-blue-800' },
                  { title: t('mission'), desc: 'Transform vision into reality through quality education', bg: 'from-green-50 to-green-100', text: 'text-green-800' },
                  { title: t('motto'), desc: 'Indian Values, Global Approach', bg: 'from-purple-50 to-purple-100', text: 'text-purple-800' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`bg-gradient-to-br ${item.bg} p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fadeIn`}
                    style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                  >
                    <h3 className={`font-bold ${item.text} mb-1 text-sm`}>{item.title}</h3>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slideLeft">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                alt="MSGM Students"
                className="rounded-2xl shadow-2xl w-full transition-all duration-500 hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-lg animate-bounce-subtle">
                <GraduationCap size={28} />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold animate-pulse-subtle">
                Since 1984
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest animate-fadeIn">
              {t('whyChooseUs')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-slideUp">
              {t('reasonsToChoose')}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, i) => (
                <Card 
                  key={i} 
                  className="p-4 sm:p-5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} inline-block mb-3 transition-all duration-300 hover:scale-110 hover:rotate-6`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">
                    {isHindi ? item.titleHi : item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {isHindi ? item.descHi : item.desc}
                  </p>
                </Card>
              ))}
            </div>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group animate-fadeIn"
              onClick={() => openPopup(galleryPhotos, 0)}
            >
              <img
              src='b7649345-dd48-404d-817f-9bf01e33ffc3.jfif'
                alt="Why Choose Us"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg sm:text-xl font-bold mb-1">{t('excellenceInEducation')}</h3>
                <p className="text-xs sm:text-sm text-white/80">{t('since1984')}</p>
              </div>
              <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn size={16} className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest animate-fadeIn">
              {t('ourFacilities')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-slideUp">
              {t('whatWeOffer')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((f, i) => (
              <Card 
                key={i} 
                className="p-4 sm:p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl ${f.bg} ${f.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 flex-shrink-0`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">
                      {isHindi ? f.titleHi : f.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {isHindi ? f.descHi : f.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 md:order-1 animate-slideRight">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-ping-slow" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-white rounded-full opacity-10 animate-pulse-slow" />
              <img 
                src="msgm-principal.jfif" 
                alt="Principal" 
                className="relative rounded-2xl shadow-2xl w-full max-w-sm mx-auto transition-all duration-500 hover:scale-105" 
              />
            </div>
            <div className="text-white order-1 md:order-2 animate-slideLeft">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Shri Arun Acharya</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed mb-6">{t('principalQuote')}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-0.5 bg-yellow-400" />
                <span className="text-yellow-300 font-semibold text-sm">Founder — MSGM Inter College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest animate-fadeIn">
              {t('testimonials')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-slideUp">
              {t('whatStudentsSay')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((tm, i) => (
              <Card 
                key={i} 
                className="p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={tm.img} 
                    alt={tm.name} 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6" 
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">{tm.name}</h3>
                    <p className="text-gray-400 text-xs mb-2">{tm.cls}</p>
                    <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed">
                      "{isHindi ? tm.quoteHi : tm.quote}"
                    </p>
                    <div className="flex mt-2 gap-0.5">
                      {[...Array(tm.rating)].map((_, j) => (
                        <Star key={j} size={13} className="text-yellow-400 fill-yellow-400 animate-scale" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Sports & Events */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest animate-fadeIn">
             
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-slideUp">
              {t('campusLife')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div
              className="col-span-2 row-span-2 cursor-pointer group relative overflow-hidden rounded-2xl animate-fadeIn"
              onClick={() => openPopup(galleryPhotos, 0)}
            >
              <img 
                src={galleryPhotos[0].src} 
                alt={galleryPhotos[0].label} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 min-h-[200px] sm:min-h-[280px]" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <ZoomIn size={40} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100" />
              </div>
            </div>
            {galleryPhotos.slice(1).map((photo, idx) => (
              <div
                key={idx}
                className="cursor-pointer group relative overflow-hidden rounded-2xl animate-fadeIn"
                style={{ animationDelay: `${(idx + 1) * 100}ms`, animationFillMode: 'both' }}
                onClick={() => openPopup(galleryPhotos, idx + 1)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.label} 
                  className="w-full h-32 sm:h-40 object-cover transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-slideUp">
            {t('beginJourney')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fadeIn">
            {t('joinMessage')}
          </p>
          <button
            onClick={() => navigate('/admission')}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-sm sm:text-lg cursor-pointer group animate-bounce-subtle"
          >
            {t('applyForAdmission')}
            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {popupOpen && (
        <PhotoPopup
          photos={popupPhotos}
          initialIndex={popupIndex}
          onClose={closePopup}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeScale {
          from { opacity: 0.5; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulseSubtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
        .animate-popIn { animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-fadeScale { animation: fadeScale 0.3s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
        .animate-slideRight { animation: slideRight 0.6s ease-out forwards; }
        .animate-slideLeft { animation: slideLeft 0.6s ease-out forwards; }
        .animate-bounce-subtle { animation: bounceSubtle 2s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulseSubtle 2s ease-in-out infinite; }
        .animate-ping-slow { animation: pingSlow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
        .animate-count-up { animation: countUp 0.8s ease-out forwards; }
        .animate-scale { animation: scale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .hover\\:translate-y-\\[-2px\\]:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default Home;