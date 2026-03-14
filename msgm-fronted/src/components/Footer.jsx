import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-auto">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={24} />
              <div>
                <span className="font-bold text-lg">MSGM Inter College</span>
                <p className="text-xs text-yellow-300">Kusmara, Mainpuri</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              शिक्षा का मंदिर - उत्तर प्रदेश के मुख्यमंत्री द्वारा स्थापित, 
              Kusmara क्षेत्र में गुणवत्तापूर्ण शिक्षा प्रदान करने वाला अग्रणी संस्थान।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors">
                  प्रवेश / Admission
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors">
                  शिक्षकगण / Staff
                </Link>
              </li>
              <li>
                <Link to="/top-students" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors">
                  मेधावी छात्र / Top Students
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors">
                  संपर्क करें / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-300">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin size={16} className="text-yellow-300" />
                <span>MSGM Inter College, Kusmara, Mainpuri, UP - 205262</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone size={16} className="text-yellow-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail size={16} className="text-yellow-300" />
                <span>msgm.kusmara@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Clock size={16} className="text-yellow-300" />
                <span>सोम-शनि: 7:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2024 MSGM Inter College Kusmara Mainpuri. सर्वाधिकार सुरक्षित।</p>
          <p className="text-xs mt-1">उत्तर प्रदेश माध्यमिक शिक्षा परिषद से मान्यता प्राप्त</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;