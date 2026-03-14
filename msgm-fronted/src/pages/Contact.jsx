import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import { Phone, Mail, MapPin, Clock, Send, Navigation, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: t('phone'),
      details: ['+91 98765 43210', '+91 98765 43211'],
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: <Mail size={24} />,
      title: t('email'),
      details: ['msgm.kusmara@gmail.com', 'admissions@msgm.edu'],
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: <MapPin size={24} />,
      title: t('address'),
      details: ['Kusmara, Mainpuri', 'Uttar Pradesh - 205262'],
      bgColor: 'bg-red-100',
      textColor: 'text-red-600'
    },
    {
      icon: <Clock size={24} />,
      title: t('hours'),
      details: [t('monSat'), t('timing')],
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('contactUs')}</h1>
            <p className="text-xl text-blue-200">Get in touch with us for any queries</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`inline-flex p-3 rounded-xl ${info.bgColor} ${info.textColor} mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <Card className="p-4 h-[500px] overflow-hidden">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <iframe
                title="MSGM Inter College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115253.10766873317!2d78.92956352499999!3d27.1124907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39749e18afd5b6e3%3A0x9a2e3c0c3c0c3c0c!2sMainpuri%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1644262073400!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('sendMessage')}</h2>
            
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
                <p className="text-green-700 font-medium">{t('messageSent')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label={t('yourName')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />

              <FormInput
                label={t('yourEmail')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />

              <FormInput
                label={t('yourPhone')}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />

              <FormInput
                label={t('yourMessage')}
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows={4}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{t('sendMessage')}</span>
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-blue-100 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="p-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Address Details */}
        <Card className="p-8 mt-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('completeAddress')}</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-xl text-blue-800">{t('schoolName')}</p>
                <p>Village - Kusmara, Tehsil - Bhogaon</p>
                <p>District - Mainpuri, Uttar Pradesh</p>
                <p>Pin Code - 205262</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="https://goo.gl/maps/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
              >
                <Navigation size={20} />
                <span>{t('viewOnMap')}</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;