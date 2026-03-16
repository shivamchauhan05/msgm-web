import React from 'react';
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
  Wifi
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // School Photos (Replace with your actual school photos)
  const schoolPhotos = {
    hero: "msgm.jpeg",
    about1: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    about2: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    whyUs: "b7649345-dd48-404d-817f-9bf01e33ffc3.jfif",
    students: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    campus: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    library: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    sports: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  };

  const achievements = [
    { 
      icon: <Trophy size={32} />, 
      value: '40+', 
      label: t('yearsOfExcellence'),
      sublabel: '1984 से',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    { 
      icon: <Users size={32} />, 
      value: '10000+', 
      label: t('students'),
      sublabel: 'विद्यार्थी',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      icon: <Award size={32} />, 
      value: '98%', 
      label: t('passPercentage'),
      sublabel: 'परीक्षा परिणाम',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      icon: <GraduationCap size={32} />, 
      value: '50+', 
      label: t('qualifiedTeachers'),
      sublabel: 'शिक्षक',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: <School size={24} />,
      title: 'Quality Education',
      titleHi: 'गुणवत्तापूर्ण शिक्षा',
      description: 'Experienced teachers and modern teaching methods',
      descriptionHi: 'अनुभवी शिक्षक और आधुनिक शिक्षण पद्धति',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Target size={24} />,
      title: 'Holistic Development',
      titleHi: 'सर्वांगीण विकास',
      description: 'Focus on academics, sports & cultural activities',
      descriptionHi: 'शिक्षा, खेल एवं सांस्कृतिक गतिविधियों पर ध्यान',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Users size={24} />,
      title: 'Experienced Faculty',
      titleHi: 'अनुभवी शिक्षक',
      description: 'Dedicated teachers with years of experience',
      descriptionHi: 'वर्षों के अनुभव वाले समर्पित शिक्षक',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: <Bus size={24} />,
      title: 'Transport Facility',
      titleHi: 'परिवहन सुविधा',
      description: 'Safe and comfortable bus service',
      descriptionHi: 'सुरक्षित एवं आरामदायक बस सेवा',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: <Wifi size={24} />,
      title: 'Digital Learning',
      titleHi: 'डिजिटल लर्निंग',
      description: 'Smart classrooms and computer labs',
      descriptionHi: 'स्मार्ट क्लासरूम और कंप्यूटर लैब',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: <Heart size={24} />,
      title: 'Safe Environment',
      titleHi: 'सुरक्षित वातावरण',
      description: '24/7 security and CCTV surveillance',
      descriptionHi: '24/7 सुरक्षा और सीसीटीवी निगरानी',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  const facilities = [
    { 
      icon: <BookOpen size={24} />, 
      title: 'Smart Classrooms',
      titleHi: 'स्मार्ट क्लासरूम',
      description: 'Digital classrooms with interactive smart boards',
      descriptionHi: 'डिजिटल बोर्ड के साथ आधुनिक कक्षाएं',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      icon: <FlaskConical size={24} />, 
      title: 'Science Labs',
      titleHi: 'विज्ञान प्रयोगशाला',
      description: 'Well-equipped physics, chemistry & biology labs',
      descriptionHi: 'भौतिकी, रसायन विज्ञान और जीव विज्ञान लैब',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      icon: <Computer size={24} />, 
      title: 'Computer Lab',
      titleHi: 'कंप्यूटर लैब',
      description: 'Modern computer lab with 50+ systems',
      descriptionHi: '50+ सिस्टम के साथ आधुनिक कंप्यूटर लैब',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      icon: <Library size={24} />, 
      title: 'Library',
      titleHi: 'पुस्तकालय',
      description: 'Rich collection of 5000+ books',
      descriptionHi: '5000+ पुस्तकों का समृद्ध संग्रह',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    { 
      icon: <Target size={24} />, 
      title: 'Sports Complex',
      titleHi: 'खेल परिसर',
      description: 'Ground for cricket, football & athletics',
      descriptionHi: 'क्रिकेट, फुटबॉल और एथलेटिक्स का मैदान',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    { 
      icon: <Heart size={24} />, 
      title: 'Medical Facility',
      titleHi: 'चिकित्सा सुविधा',
      description: 'First aid and regular health checkups',
      descriptionHi: 'प्राथमिक उपचार और नियमित स्वास्थ्य जांच',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      class: 'Class of 2020',
      quote: 'MSGM Inter College provided me with the perfect foundation for my career.',
      quoteHi: 'एमएसजीएम इंटर कॉलेज ने मुझे मेरे करियर के लिए सही नींव दी।',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Priya Gupta',
      class: 'Class of 2021',
      quote: 'The best years of my life! Excellent faculty and great learning environment.',
      quoteHi: 'मेरे जीवन के सर्वश्रेष्ठ वर्ष! उत्कृष्ट शिक्षक और बेहतरीन माहौल।',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108777-3f12982e0f5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Amit Kumar',
      class: 'Class of 2019',
      quote: 'Thanks to MSGM for shaping my future. The discipline and education here are top-notch.',
      quoteHi: 'मेरा भविष्य बनाने के लिए एमएसजीएम का धन्यवाद। अनुशासन और शिक्षा बेहतरीन है।',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const handleApplyNow = () => {
    navigate('/admission');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[850px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={schoolPhotos.hero}
            alt="MSGM Inter College Kusmara Mainpuri"
            className="w-full h-full object-cover"
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center md:justify-start">
          <div className="text-center md:text-left text-white max-w-2xl">
            {/* Est. Badge - Now visible on mobile */}
            <div className="inline-flex items-center bg-yellow-500 px-4 py-2 rounded-full mb-6 shadow-lg">
              <GraduationCap size={18} className="mr-2" />
              <span className="text-sm font-bold">Est. 1984 • U.P. Board</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t('welcome')}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              {t('schoolTagline')}
            </p>

            {/* Buttons - Now visible */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleApplyNow}
                className="group bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center space-x-2 cursor-pointer text-base sm:text-lg"
              >
                <span>{t('applyNow')}</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleContact}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 cursor-pointer text-base sm:text-lg border-2 border-white/50"
              >
                <Phone size={18} />
                <span>{t('contactUs')}</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-12 justify-center md:justify-start">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">40+</div>
                <div className="text-white/80 text-xs sm:text-sm">{t('yearsOfExcellence')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">1000+</div>
                <div className="text-white/80 text-xs sm:text-sm">{t('students')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">50+</div>
                <div className="text-white/80 text-xs sm:text-sm">{t('qualifiedTeachers')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Photo Gallery Strip - 5 Photos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">{t('ourCampus')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="relative group overflow-hidden rounded-xl">
              <img src={schoolPhotos.about1} alt="Students" className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img src={schoolPhotos.about2} alt="Classroom" className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img src={schoolPhotos.campus} alt="Campus" className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img src={schoolPhotos.library} alt="Library" className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img src={schoolPhotos.sports} alt="Sports" className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{t('ourAchievements')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{t('proudMilestones')}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl ${item.bgColor} ${item.textColor} mb-4`}>
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-1">{item.sublabel}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      {/* About Section with Photo */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
      <div>
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{t('aboutUs')}</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 mt-2">{t('aboutSchool')}</h2>
        
        {/* School Motto */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
          <p className="text-blue-800 font-semibold italic">
            "{t('schoolMotto')}"
          </p>
        </div>
        
        {/* Full Description */}
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('aboutSchoolDesc')}
        </p>
        
        {/* Vision, Mission, Motto Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
            <h3 className="font-bold text-blue-800 mb-2">{t('vision')}</h3>
            <p className="text-sm text-gray-700">Fostering global beneficiaries with Indian values</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
            <h3 className="font-bold text-green-800 mb-2">{t('mission')}</h3>
            <p className="text-sm text-gray-700">Transform vision into reality through quality education</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
            <h3 className="font-bold text-purple-800 mb-2">{t('motto')}</h3>
            <p className="text-sm text-gray-700">Indian Values, Global Approach</p>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">{t('qualityEducation')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">{t('experiencedTeachers')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">{t('modernFacilities')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">{t('holisticDevelopment')}</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <img 
          src={schoolPhotos.students}
          alt="MSGM Students"
          className="rounded-2xl shadow-2xl w-full"
        />
        <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl shadow-lg">
          <GraduationCap size={32} />
        </div>
        {/* Established Badge */}
        <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg">
          <span className="font-bold">Since 1984</span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Why Choose Us Section with Photo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{t('whyChooseUs')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{t('reasonsToChoose')}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.color} inline-block mb-3`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2">
                    {t('language') === 'hi' ? item.titleHi : item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {t('language') === 'hi' ? item.descriptionHi : item.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="relative">
               <img 
    src={schoolPhotos.whyUs}
    alt="Why Choose Us"
    className="rounded-2xl shadow-2xl w-full h-full object-contain"
  />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-2">{t('excellenceInEducation')}</h3>
                <p className="text-sm">{t('since1984')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{t('ourFacilities')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{t('whatWeOffer')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${facility.bgColor} ${facility.color} group-hover:scale-110 transition-transform`}>
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2">
                      {t('language') === 'hi' ? facility.titleHi : facility.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {t('language') === 'hi' ? facility.descriptionHi : facility.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message with Photo */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
              <img 
                src="msgm-principal.jfif" 
                alt="Principal"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="text-white order-1 md:order-2">
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dr. Arun Acharya</h2>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6">
                {t('principalQuote')}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-300 font-semibold text-sm sm:text-base">Founder MSGM Inter College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{t('testimonials')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{t('whatStudentsSay')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2">{testimonial.class}</p>
                    <p className="text-gray-700 text-xs sm:text-sm italic">
                      "{t('language') === 'hi' ? testimonial.quoteHi : testimonial.quote}"
                    </p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} sm:size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{t('gallery')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{t('campusLife')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img src={schoolPhotos.campus} alt="Campus" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" />
            </div>
            <img src={schoolPhotos.about1} alt="Students" className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" />
            <img src={schoolPhotos.about2} alt="Classroom" className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" />
            <img src={schoolPhotos.library} alt="Library" className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" />
            <img src={schoolPhotos.sports} alt="Sports" className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">{t('beginJourney')}</h2>
          <p className="text-base sm:text-lg text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {t('joinMessage')}
          </p>
          <button
            onClick={handleApplyNow}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-base sm:text-lg cursor-pointer"
          >
            {t('applyForAdmission')}
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;