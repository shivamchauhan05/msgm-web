import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Admission = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    class: '',
    address: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = ['Nursery', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.studentName) newErrors.studentName = t('studentName') + ' is required';
    if (!formData.fatherName) newErrors.fatherName = t('fatherName') + ' is required';
    if (!formData.motherName) newErrors.motherName = t('motherName') + ' is required';
    if (!formData.dob) newErrors.dob = t('dob') + ' is required';
    if (!formData.class) newErrors.class = t('classApplying') + ' is required';
    if (!formData.address) newErrors.address = t('address') + ' is required';
    if (!formData.phone) newErrors.phone = t('phoneNumber') + ' is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.email) newErrors.email = t('email') + ' is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      
      // Add submission date
      const submissionData = {
        ...formData,
        submissionDate: new Date().toLocaleString()
      };

      // Send email via EmailJS
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMISSION,
        submissionData
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSubmitted(true);
        setLoading(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            studentName: '',
            fatherName: '',
            motherName: '',
            dob: '',
            class: '',
            address: '',
            phone: '',
            email: '',
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to submit application. Please try again.');
        setLoading(false);
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-padding">
      <h1 className="page-title">{t('admissionForm')}</h1>
      
      {submitted && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-green-800">{t('successMessage')}</h3>
            <p className="text-green-600 text-sm">{t('successDesc')}</p>
          </div>
        </div>
      )}

      <Card className="p-6">
        <form ref={formRef} onSubmit={handleSubmit}>
          <FormInput
            label={t('studentName')}
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            error={errors.studentName}
            required
            placeholder="Enter student's full name"
          />

          <FormInput
            label={t('fatherName')}
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            error={errors.fatherName}
            required
            placeholder="Enter father's full name"
          />

          <FormInput
            label={t('motherName')}
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            error={errors.motherName}
            required
            placeholder="Enter mother's full name"
          />

          <FormInput
            label={t('dob')}
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
            required
          />

          <FormInput
            label={t('classApplying')}
            type="select"
            name="class"
            value={formData.class}
            onChange={handleChange}
            error={errors.class}
            options={classes}
            required
          />

          <FormInput
            label={t('address')}
            type="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            required
            placeholder="Enter complete address"
          />

          <FormInput
            label={t('phoneNumber')}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            placeholder="Enter 10-digit phone number"
          />

          <FormInput
            label={t('email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="Enter email address"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary hover:bg-secondary bg-fuchsia-950 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg mt-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : t('submit')}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Admission;