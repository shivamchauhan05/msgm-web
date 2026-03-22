import React from 'react';

const topStaff = [
  {
    id: 1,
    name: 'Sh. Rajendra Kumar Sharma',
    designation: 'Director',
    description:
      'With over 30 years of distinguished service in education, our Director provides visionary leadership and strategic direction to the institution. His commitment to academic excellence has shaped generations of students.',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    badge: 'Director',
    badgeClass: 'bg-yellow-700',
  },
  {
    id: 2,
    name: 'Smt. Sunita Devi Gupta',
    designation: 'Principal – Hindi Medium',
    description:
      'सुश्री सुनीता देवी गुप्ता हिंदी माध्यम विभाग की प्रधानाचार्या हैं। इनके मार्गदर्शन में छात्र-छात्राएँ शैक्षणिक एवं सांस्कृतिक क्षेत्र में उत्कृष्ट प्रदर्शन कर रहे हैं। इन्हें 25 वर्षों का अध्यापन अनुभव है।',
    photo:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    badge: 'Hindi Medium',
    badgeClass: 'bg-red-700',
  },
];

const middleStaff = [
  {
    id: 3,
    name: 'Mr. Arvind Mehta',
    designation: 'Principal – English Medium',
    description:
      'Mr. Arvind Mehta leads the English Medium wing with a strong emphasis on communication and critical thinking. A postgraduate in Education from Delhi University, he brings 22 years of academic leadership to his role.',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    badge: 'English Medium',
    badgeClass: 'bg-blue-700',
  },
  {
    id: 4,
    name: 'Dr. Priya Singh',
    designation: 'Vice Principal – Girls Wing',
    description:
      "Dr. Priya Singh oversees the Girls Wing with dedication and empathy. A Gold Medallist in Education, she champions women's empowerment and inclusive academic practices that nurture every student's potential.",
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    badge: 'Girls Wing',
    badgeClass: 'bg-purple-700',
  },
];

const StaffCard = ({ member }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className={`absolute top-3 right-3 ${member.badgeClass} text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full`}>
        {member.badge}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-gray-900 leading-snug">{member.name}</h3>
      <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mt-1 mb-3">
        {member.designation}
      </p>
      <div className="w-8 h-0.5 bg-gray-200 mb-3 rounded" />
      <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
    </div>
  </div>
);

const Staff = () => {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-12">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-2">
        <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-2">
          Est. 1985 · Excellence in Education
        </p>
        <div className="w-16 h-0.5 bg-yellow-600 mx-auto mb-4 rounded" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Leadership & Staff</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Meet the dedicated professionals who inspire, guide, and shape the future of our students every single day.
        </p>
        <div className="w-16 h-0.5 bg-yellow-600 mx-auto mt-4 rounded" />
      </div>

      {/* Row 1 — Director & Hindi Principal (2 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
        {topStaff.map((member) => (
          <StaffCard key={member.id} member={member} />
        ))}
      </div>

      {/* Row 2 — English Principal & Girls Wing (2 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
        {middleStaff.map((member) => (
          <StaffCard key={member.id} member={member} />
        ))}
      </div>

      {/* Row 3 — Big Group Photo Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          {/* Wide landscape photo */}
          <div className="relative h-72 sm:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Our Staff"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute top-4 right-4 bg-green-700 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
              Our Team
            </span>
            {/* Name overlay on photo */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">Our Dedicated Faculty</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mt-1">
                Teaching & Non-Teaching Staff
              </p>
            </div>
          </div>
          {/* Description below */}
          <div className="px-6 py-5">
            <div className="w-10 h-0.5 bg-gray-200 mb-4 rounded" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our school is proud to have a team of highly qualified and passionate educators spread across all departments. With deep subject expertise, a love for teaching, and unwavering dedication, our faculty members go beyond the classroom to mentor, motivate, and mold students into confident individuals. Together, they foster an environment of curiosity, discipline, and excellence — guiding every student toward a bright and successful future.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Staff;