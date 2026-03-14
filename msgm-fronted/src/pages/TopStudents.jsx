import React from 'react';
import StudentCard from '../components/StudentCard';

const TopStudents = () => {
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      class: '10',
      percentage: 98.5,
      photo: 'https://images.unsplash.com/photo-1494790108777-3f12982e0f5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Bob Smith',
      class: '12',
      percentage: 97.8,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Carol Davis',
      class: '8',
      percentage: 96.5,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'David Brown',
      class: '10',
      percentage: 95.2,
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Emma Wilson',
      class: '12',
      percentage: 94.8,
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Frank Miller',
      class: '9',
      percentage: 94.0,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="container-padding">
      <h1 className="page-title">Top Students</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default TopStudents;