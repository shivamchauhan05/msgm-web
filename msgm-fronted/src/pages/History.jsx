import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import { Calendar, Award, Users, TrendingUp, Landmark, Clock, Star, BookOpen } from 'lucide-react';

const History = () => {
  const { t } = useTranslation();

  const timelineEvents = [
    {
      year: '1984',
      title: 'Foundation',
      description: 'MSGM Inter College was established in Kusmara, Mainpuri with 150 students and 8 teachers.',
      icon: <Landmark size={20} />
    },
    {
      year: '1990',
      title: 'High School Recognition',
      description: 'Received recognition from U.P. Board for High School education.',
      icon: <BookOpen size={20} />
    },
    {
      year: '1995',
      title: 'Intermediate Recognition',
      description: 'Granted recognition for Intermediate (Class 12) education.',
      icon: <Award size={20} />
    },
    {
      year: '2005',
      title: 'Science Stream Launch',
      description: 'Introduced Science stream with Physics, Chemistry, and Biology.',
      icon: <Star size={20} />
    },
    {
      year: '2010',
      title: 'New Campus Inauguration',
      description: 'Inaugurated new building with modern classrooms and laboratories.',
      icon: <Landmark size={20} />
    },
    {
      year: '2015',
      title: 'Computer Lab Establishment',
      description: 'Set up state-of-the-art computer laboratory with 50 systems.',
      icon: <TrendingUp size={20} />
    },
    {
      year: '2020',
      title: 'Digital Classrooms',
      description: 'Implemented smart classrooms with digital learning facilities.',
      icon: <Clock size={20} />
    },
    {
      year: '2023',
      title: 'Best School Award',
      description: 'Received "Best School in District" award from Education Department.',
      icon: <Award size={20} />
    }
  ];

  const milestones = [
    { icon: <Calendar size={32} />, value: '40+', label: t('yearsOfExcellence'), color: 'from-blue-500 to-blue-600' },
    { icon: <Users size={32} />, value: '5000+', label: t('alumni'), color: 'from-green-500 to-green-600' },
    { icon: <Award size={32} />, value: '15+', label: t('awards'), color: 'from-yellow-500 to-yellow-600' },
    { icon: <TrendingUp size={32} />, value: '98%', label: t('passPercentage'), color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('ourHistory')}</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">
              {t('schoolName')} - {t('schoolTagline')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Founder Section */}
        <Card className="p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Landmark size={80} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-3">
                <Star size={24} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('founder')}</h2>
              <h3 className="text-2xl text-blue-700 font-semibold mb-4">{t('founderName')}</h3>
              <p className="text-gray-600 text-lg italic mb-4">"{t('founderQuote')}"</p>
              <p className="text-gray-600 leading-relaxed">
                With this vision, MSGM Inter College was established in 1984. Today, it stands as a 
                premier educational institution in the Kusmara region, having educated thousands of 
                students who have gone on to excel in various fields.
              </p>
            </div>
          </div>
        </Card>

        {/* Key Milestones */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('keyMilestones')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {milestones.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('timeline')}</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {event.icon}
                      </div>
                      <span className="text-lg font-bold text-blue-600">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Section */}
        <Card className="p-8 mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Legacy Continues</h2>
            <p className="text-xl text-blue-200 mb-6 max-w-3xl mx-auto">
              For over four decades, MSGM Inter College has been shaping the future of thousands of students, 
              maintaining the highest standards of education and character development.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">40+</div>
                <div className="text-blue-200">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">5000+</div>
                <div className="text-blue-200">Proud Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">50+</div>
                <div className="text-blue-200">Qualified Teachers</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default History;