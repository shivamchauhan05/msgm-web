import React from 'react';
import Card from './Card';
import { Award } from 'lucide-react';

const StudentCard = ({ student }) => {
  return (
    <Card>
      <div className="relative">
        <img 
          src={student.photo} 
          alt={student.name}
          className="w-full h-48 object-cover"
        />
        {student.percentage >= 90 && (
          <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1">
            <Award size={20} className="text-white" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800">{student.name}</h3>
        <p className="text-primary font-medium text-sm">Class {student.class}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-600 text-sm">Percentage</span>
          <span className="font-bold text-primary">{student.percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-primary rounded-full h-2" 
            style={{ width: `${student.percentage}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default StudentCard;