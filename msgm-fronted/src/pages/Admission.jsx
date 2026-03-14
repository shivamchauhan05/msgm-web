import React, { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import { CheckCircle } from 'lucide-react';

const Admission = () => {
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

  const classes = ['Nursery', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.studentName) newErrors.studentName = 'Student name is required';
    if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
    if (!formData.motherName) newErrors.motherName = 'Mother name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.class) newErrors.class = 'Please select a class';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.email) newErrors.email = 'Email is required';
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
      setSubmitted(true);
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
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-padding">
      <h1 className="page-title">Admission Form</h1>
      
      {submitted && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-green-800">Application Submitted Successfully!</h3>
            <p className="text-green-600 text-sm">We'll contact you soon with further details.</p>
          </div>
        </div>
      )}

      <Card className="p-6">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            error={errors.studentName}
            required
            placeholder="Enter student's full name"
          />

          <FormInput
            label="Father's Name"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            error={errors.fatherName}
            required
            placeholder="Enter father's full name"
          />

          <FormInput
            label="Mother's Name"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            error={errors.motherName}
            required
            placeholder="Enter mother's full name"
          />

          <FormInput
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
            required
          />

          <FormInput
            label="Class Applying For"
            type="select"
            name="class"
            value={formData.class}
            onChange={handleChange}
            error={errors.class}
            options={classes}
            required
          />

          <FormInput
            label="Address"
            type="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            required
            placeholder="Enter complete address"
          />

          <FormInput
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            placeholder="Enter 10-digit phone number"
          />

          <FormInput
            label="Email"
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
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg mt-4"
          >
            Submit Application
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Admission;