import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Globe,
  Library,
  Computer,
  FlaskConical,
  Trophy,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // School photo (you can replace this with your actual school photo)
  const schoolPhoto = "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
  
  // Alternative: If you have your own school photo, use this format:
  // const schoolPhoto = "/images/school-building.jpg"; // Place in public/images folder

  const achievements = [
    { 
      icon: <Trophy size={32} />, 
      value: '40+', 
      label: 'Years of Excellence',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    { 
      icon: <Users size={32} />, 
      value: '1000+', 
      label: 'Students',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      icon: <Award size={32} />, 
      value: '98%', 
      label: 'Pass Percentage',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      icon: <GraduationCap size={32} />, 
      value: '50+', 
      label: 'Qualified Teachers',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const facilities = [
    { 
      icon: <BookOpen size={24} />, 
      title: 'Smart Classrooms',
      description: 'Digital classrooms with interactive smart boards',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      icon: <FlaskConical size={24} />, 
      title: 'Science Labs',
      description: 'Well-equipped physics, chemistry & biology labs',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      icon: <Computer size={24} />, 
      title: 'Computer Lab',
      description: 'Modern computer lab with 50+ systems',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      icon: <Library size={24} />, 
      title: 'Library',
      description: 'Rich collection of 5000+ books',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    { 
      icon: <Target size={24} />, 
      title: 'Sports Complex',
      description: 'Ground for cricket, football & athletics',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    { 
      icon: <Heart size={24} />, 
      title: 'Medical Facility',
      description: 'First aid and regular health checkups',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      class: 'Class of 2020',
      quote: 'MSGM Inter College provided me with the perfect foundation for my career. The teachers are incredibly supportive.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Priya Gupta',
      class: 'Class of 2021',
      quote: 'The best years of my life! Excellent faculty and great learning environment.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108777-3f12982e0f5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Amit Kumar',
      class: 'Class of 2019',
      quote: 'Thanks to MSGM for shaping my future. The discipline and education here are top-notch.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Sports Day',
      date: 'December 15, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'School Ground',
      color: 'border-l-4 border-l-blue-500'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: 'November 10, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'School Auditorium',
      color: 'border-l-4 border-l-green-500'
    },
    {
      title: 'Science Exhibition',
      date: 'January 20, 2025',
      time: '11:00 AM - 3:00 PM',
      location: 'Science Lab',
      color: 'border-l-4 border-l-purple-500'
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
      {/* Hero Section - Clean Background Image */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image - Full visibility */}
        <div className="absolute inset-0">
          <img 
            src={schoolPhoto}
            alt="MSGM Inter College Kusmara Mainpuri"
            className="w-full h-full object-cover"
          />
          {/* Very light overlay just for text readability - 10% opacity only */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content - With semi-transparent background for readability */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl text-white max-w-xl">
              <div className="inline-flex items-center bg-yellow-500/90 px-4 py-2 rounded-full mb-6">
                <GraduationCap size={18} className="mr-2" />
                <span className="text-sm font-medium">Est. 1984 • U.P. Board</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {t('welcome')}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('schoolTagline')} - Nurturing young minds with quality education and moral values since 1984.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleApplyNow}
                  className="group bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center space-x-2 cursor-pointer"
                >
                  <span>{t('applyNow')}</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={handleContact}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 cursor-pointer"
                >
                  <Phone size={18} />
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold">40+</div>
                  <div className="text-white/80 text-sm">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-white/80 text-sm">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-white/80 text-sm">Teachers</div>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="hidden md:block relative">
              <div className="absolute top-20 left-0 bg-white/90 backdrop-blur-md rounded-2xl p-6 transform rotate-6 animate-float shadow-xl">
                <Award size={40} className="text-yellow-500 mb-2" />
                <div className="text-gray-800 font-bold">Best School</div>
                <div className="text-gray-600 text-sm">Award 2023</div>
              </div>
              <div className="absolute bottom-20 right-0 bg-white/90 backdrop-blur-md rounded-2xl p-6 transform -rotate-6 animate-float-delayed shadow-xl">
                <Users size={40} className="text-green-500 mb-2" />
                <div className="text-gray-800 font-bold">1000+</div>
                <div className="text-gray-600 text-sm">Students</div>
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

      {/* Rest of the sections remain the same... */}
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">{t('aboutSchool')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t('aboutSchoolDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Quality Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Experienced Teachers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Modern Facilities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-gray-700">Holistic Development</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Students"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Classroom"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Achievements</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Proud Milestones</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Years of dedication and hard work have earned us recognition and accolades
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl ${item.bgColor} ${item.textColor} mb-4`}>
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Our Facilities</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              State-of-the-art infrastructure and modern amenities for holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${facility.bgColor} ${facility.color} group-hover:scale-110 transition-transform`}>
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Principal"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="text-white">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Principal's Message
              </span>
              <h2 className="text-4xl font-bold mb-6">Dr. Rajesh Kumar</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                "Education is not just about academic excellence, but about building character and nurturing young minds to become responsible citizens of tomorrow."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-300 font-semibold">Principal, MSGM Inter College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Events */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Stay Updated</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-8">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 ${event.color}`}>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-blue-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-green-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-red-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-8">What Students Say</h2>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{testimonial.class}</p>
                        <p className="text-gray-700 text-sm italic">"{testimonial.quote}"</p>
                        <div className="flex mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Begin Your Journey With Us</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join MSGM Inter College today and give your child the gift of quality education
          </p>
          <button
            onClick={handleApplyNow}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-lg cursor-pointer"
          >
            Apply for Admission
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;