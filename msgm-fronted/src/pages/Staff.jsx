import React from 'react';

// ========== STAFF DATA (from your input) ==========
const staffMembers = [
  {
    id: 1,
    name: 'Darmendar Kumar',
    designation: 'Director',
    qualification: 'M.A., B.Ed., 30+ years experience',
    description: 'Visionary leader with decades of experience in educational administration. Under his guidance, the institution has achieved numerous academic and co-curricular milestones.',
    badge: 'Director',
    badgeClass: 'bg-yellow-700',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
  },
  {
    id: 2,
    name: 'Surendra Yadav',
    designation: 'Hindi Pravakta',
    qualification: 'M.A. (Hindi), B.Ed.',
    description: 'Expert in Hindi literature and pedagogy. Known for making language learning engaging and effective. Guides students for board exams with excellent results.',
    badge: 'Hindi Dept.',
    badgeClass: 'bg-orange-700',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
  },
  {
    id: 3,
    name: 'Ashishwad Mishra',
    designation: 'Chemistry teacher',
    qualification: 'M.Sc., B.Ed.',
    description: 'Specializes in organic and inorganic chemistry. Uses practical demonstrations to simplify complex concepts. Consistently produces top results in science stream.',
    badge: 'Science',
    badgeClass: 'bg-green-700',
    photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&q=80',
  },
  {
    id: 4,
    name: 'Ravikant',
    designation: 'Computer Operator',
    qualification: 'M.A.',
    description: 'Manages all digital records, examination data, and administrative systems. Ensures smooth online processes and technical support for staff and students.',
    badge: 'Admin',
    badgeClass: 'bg-gray-700',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    id: 5,
    name: 'Kuldeep Yadav',
    designation: 'Chemistry Teacher (B.Sc.)',
    qualification: 'B.Sc. (Chemistry)',
    description: 'Young and dynamic educator who connects well with students. Focuses on fundamentals and problem-solving skills for competitive exams.',
    badge: 'Science',
    badgeClass: 'bg-green-700',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  },
  {
    id: 6,
    name: 'Dr. shubhas sir',
    designation: 'Geography Pravakta',
    qualification: 'M.A., M.Phil (Geography)',
    description: 'Deep knowledge of physical and human geography. Uses maps, models, and digital tools to make geography interactive and exam-oriented.',
    badge: 'Social Science',
    badgeClass: 'bg-teal-700',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=500&q=80',
  },
  {
    id: 7,
    name: 'Prabhakar Shakya',
    designation: 'Mathematics Teacher',
    qualification: 'M.Sc. (Maths), B.Ed.',
    description: 'Renowned for simplifying complex mathematical problems. Prepares students for board exams and competitive tests like JEE and Olympiads.',
    badge: 'Maths',
    badgeClass: 'bg-indigo-700',
    photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&q=80',
  },
  {
    id: 8,
    name: 'Kamlesh Kumar',
    designation: 'Principal – MSGM',
    qualification: 'M.A., B.Ed., M.Phil',
    description: 'Academic head with a student-centric approach. Oversees curriculum, discipline, and overall school development. A mentor to both students and teachers.',
    badge: 'Principal',
    badgeClass: 'bg-blue-700',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
  },
  {
    id: 9,
    name: 'Shivam Sir',
    designation: 'Biology Lecturer',
    qualification: 'M.Sc. (Botany/Zoology), B.Ed.',
    description: 'Passionate about life sciences. Uses charts, models, and virtual labs to teach botany and zoology. Excellent board exam track record.',
    badge: 'Science',
    badgeClass: 'bg-green-700',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&q=80',
  },
  {
    id: 10,
    name: 'Sunita Mam',
    designation: 'English Teacher',
    qualification: 'M.A. (English), B.Ed.',
    description: 'Fosters language proficiency and communication skills. Known for her innovative grammar teaching methods and literature appreciation sessions.',
    badge: 'English',
    badgeClass: 'bg-pink-700',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
  },
  {
    id: 11,
    name: 'Jitendar Yadav',
    designation: 'Physical Training Instructor (PTI)',
    qualification: 'B.P.Ed., NIS Certified',
    description: 'Develops physical fitness, sportsmanship, and team spirit. Trains school teams for district and state-level competitions.',
    badge: 'Sports',
    badgeClass: 'bg-red-700',
    photo: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500&q=80',
  },
  {
    id: 12,
    name: 'Rajiv Tripathi',
    designation: 'Physics Lecturer',
    qualification: 'M.Sc. (Physics), B.Ed.',
    description: 'Makes physics relatable through experiments and real-world applications. Guides students for competitive exams like NEET and JEE.',
    badge: 'Science',
    badgeClass: 'bg-green-700',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    id: 13,
    name: 'Rajkishor',
    designation: 'Drawing Teacher',
    qualification: 'B.F.A., M.F.A.',
    description: 'Nurtures creativity and artistic expression. Prepares students for fine arts exams and encourages participation in cultural events.',
    badge: 'Arts',
    badgeClass: 'bg-purple-700',
    photo: 'https://images.unsplash.com/photo-1544717305-38c914e2b6f5?w=500&q=80',
  },
  {
    id: 14,
    name: 'Shubhash Sir',
    designation: 'Geography Lecturer',
    qualification: 'M.A. (Geography)',
    description: 'Specialist in Indian and world geography. Uses modern teaching aids and fieldwork to enhance understanding of geographical concepts.',
    badge: 'Social Science',
    badgeClass: 'bg-teal-700',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=500&q=80',
  },
  {
    id: 15,
    name: 'Happy Sir',
    designation: 'English Lecturer',
    qualification: 'M.A. (English), B.Ed.',
    description: 'Energetic and student-friendly approach to English literature and grammar. Focuses on spoken English and writing skills.',
    badge: 'English',
    badgeClass: 'bg-pink-700',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
  },
];

// ========== STAFF CARD COMPONENT ==========
const StaffCard = ({ member }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
    {/* Image with gradient overlay */}
    <div className="relative h-64 overflow-hidden bg-gray-200">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className={`absolute top-3 right-3 ${member.badgeClass} text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-md`}>
        {member.badge}
      </span>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-gray-900 leading-tight">{member.name}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700 mt-1 mb-2">
        {member.designation}
      </p>
      <div className="w-10 h-0.5 bg-gray-200 rounded mb-3" />
      
      {/* Qualification */}
      <div className="mb-3">
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
          {member.qualification}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
    </div>
  </div>
);

// ========== MAIN STAFF COMPONENT ==========
const Staff = () => {
  // Group staff by category for visual variety (optional)
  const directorAndPrincipal = staffMembers.filter(m => 
    m.badge === 'Director' || m.badge === 'Principal'
  );
  const teachingStaff = staffMembers.filter(m => 
    !['Director', 'Principal', 'Admin', 'Computer Operator'].includes(m.badge) && m.badge !== 'Principal'
  );
  const adminStaff = staffMembers.filter(m => 
    m.badge === 'Admin' || m.designation === 'Computer Operator'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-100 px-4 py-12 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-yellow-700 mb-2">
          Est. 1984 · Excellence in Education
        </p>
        <div className="w-20 h-0.5 bg-yellow-600 mx-auto mb-4 rounded-full" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Leadership & Staff
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Meet the dedicated educators and professionals who inspire, guide, and shape the future of our students every single day.
        </p>
        <div className="w-20 h-0.5 bg-yellow-600 mx-auto mt-5 rounded-full" />
      </div>

      {/* Director & Principal Section (highlighted) */}
      {directorAndPrincipal.length > 0 && (
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 px-4">Leadership</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directorAndPrincipal.map(member => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Teaching Staff Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 px-4">Teaching Faculty</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingStaff.map(member => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Admin & Support Staff Section */}
      {adminStaff.length > 0 && (
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 px-4">Administration & Support</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adminStaff.map(member => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Group Photo / Collective Message Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="Staff Group"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold">Our Complete Family</h3>
              <p className="text-sm sm:text-base text-yellow-300 font-medium mt-1">
                Teaching & Non-Teaching Staff
              </p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our school is proud to have a team of highly qualified and passionate educators spread across all departments. 
              With deep subject expertise, a love for teaching, and unwavering dedication, our faculty members go beyond 
              the classroom to mentor, motivate, and mold students into confident individuals. Together, they foster an 
              environment of curiosity, discipline, and excellence — guiding every student toward a bright and successful future.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">👥 15+ Staff Members</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">📚 7+ Departments</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">🏆 98% Board Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;