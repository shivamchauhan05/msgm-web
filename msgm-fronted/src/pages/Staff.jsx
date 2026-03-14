import React from 'react';
import Card from '../components/Card';

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      designation: 'Principal',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      designation: 'Vice Principal',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Ms. Emily Brown',
      designation: 'Head of Mathematics',
      photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Mr. David Wilson',
      designation: 'Head of Science',
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Ms. Lisa Anderson',
      designation: 'English Teacher',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Mr. Robert Taylor',
      designation: 'Sports Coach',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="container-padding">
      <h1 className="page-title">Our Staff</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffMembers.map(member => (
          <Card key={member.id} className="card-hover">
            <div className="relative">
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <p className="text-gray-200 text-sm">{member.designation}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Staff;