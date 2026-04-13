import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const toppers = [
  {
    id: 1,
    rank: 1,
    name: 'Priya Sharma',
    class: '12',
    medium: 'English Medium',
    percentage: 98.6,
    subjects: 'Science (PCM)',
    achievement: 'District Topper | Science Olympiad Gold Medalist',
    description:
      'Priya is an exceptional student known for her analytical thinking and dedication. She secured the highest marks in the district board examinations and represented the school at the State Science Olympiad, bringing home the gold medal.',
    photo:
      'https://images.unsplash.com/photo-1494790108777-3f12982e0f5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    rank: 2,
    name: 'Rahul Verma',
    class: '12',
    medium: 'Hindi Medium',
    percentage: 97.2,
    subjects: 'Commerce',
    achievement: 'State Merit List | Best Student Award',
    description:
      'राहुल एक मेधावी छात्र हैं जिन्होंने वाणिज्य विषय में उत्कृष्ट प्रदर्शन किया। उन्होंने राज्य मेरिट सूची में स्थान प्राप्त किया और विद्यालय के सर्वश्रेष्ठ छात्र पुरस्कार से सम्मानित किए गए।',
    photo:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    rank: 3,
    name: 'Anjali Gupta',
    class: '10',
    medium: 'English Medium',
    percentage: 96.4,
    subjects: 'All Subjects',
    achievement: 'School Topper Class X | Cultural Ambassador',
    description:
      'Anjali consistently topped her class throughout the year and emerged as the School Topper in Class X board exams. Beyond academics, she is an active participant in cultural events and serves as the school\'s Cultural Ambassador.',
    photo:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    rank: 4,
    name: 'Vikram Singh',
    class: '10',
    medium: 'Hindi Medium',
    percentage: 95.0,
    subjects: 'All Subjects',
    achievement: 'Mathematics Genius Award | Sports Captain',
    description:
      'विक्रम एक बहुमुखी प्रतिभा के धनी छात्र हैं। उन्होंने गणित में 100 में से 100 अंक प्राप्त किए और विद्यालय की क्रिकेट टीम के कप्तान के रूप में जिला स्तरीय प्रतियोगिता में विद्यालय को विजय दिलाई।',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

const rankConfig = {
  1: { bg: 'bg-yellow-400', text: 'text-yellow-900', border: 'border-yellow-400', icon: <Trophy size={14} />, label: '1st' },
  2: { bg: 'bg-gray-300', text: 'text-gray-800', border: 'border-gray-400', icon: <Award size={14} />, label: '2nd' },
  3: { bg: 'bg-orange-400', text: 'text-orange-900', border: 'border-orange-400', icon: <Star size={14} />, label: '3rd' },
  4: { bg: 'bg-blue-400', text: 'text-blue-900', border: 'border-blue-400', icon: <Star size={14} />, label: '4th' },
};

const TopperCard = ({ student }) => {
  const rank = rankConfig[student.rank];

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border-t-4 ${rank.border}`}>
      {/* Photo */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={student.photo}
          alt={student.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Rank Badge */}
        <div className={`absolute top-3 left-3 ${rank.bg} ${rank.text} flex items-center gap-1 font-bold text-xs px-2.5 py-1 rounded-full shadow`}>
          {rank.icon}
          Rank {rank.label}
        </div>

        {/* Medium Badge */}
        <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/30">
          {student.medium}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mt-0.5">
          Class {student.class} · {student.subjects}
        </p>

        {/* Achievement */}
        <p className="text-xs text-blue-700 font-medium mt-2 bg-blue-50 rounded-lg px-3 py-1.5">
          🏆 {student.achievement}
        </p>

        {/* Percentage Bar */}
        <div className="mt-4 mb-1 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">Score</span>
          <span className="text-sm font-bold text-gray-800">{student.percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${student.percentage}%` }}
          />
        </div>

        <div className="w-8 h-0.5 bg-gray-200 my-3 rounded" />

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">{student.description}</p>
      </div>
    </div>
  );
};

const TopStudents = () => {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-12">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-2">
        <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-2">
          Academic Excellence · Pride of Our School
        </p>
        <div className="w-16 h-0.5 bg-yellow-600 mx-auto mb-4 rounded" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Top Students</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          We proudly celebrate the outstanding achievements of our brightest stars who have brought glory to the school through their hard work and dedication.
        </p>
        <div className="w-16 h-0.5 bg-yellow-600 mx-auto mt-4 rounded" />
      </div>

      {/* Cards Grid — 2 cols on tablet+, 1 col on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {toppers.map((student) => (
          <TopperCard key={student.id} student={student} />
        ))}
      </div>

    </div>
  );
};

export default TopStudents;