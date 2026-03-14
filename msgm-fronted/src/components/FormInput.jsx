import React from 'react';

const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  error, 
  required = false,
  options = [],
  ...props 
}) => {
  const baseClassName = "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base";
  
  const inputClassName = error 
    ? `${baseClassName} border-red-500 focus:ring-red-500` 
    : `${baseClassName} border-gray-300 focus:border-transparent`;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={inputClassName}
          required={required}
          {...props}
        >
          <option value="">Select Class</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={inputClassName}
          rows="3"
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClassName}
          required={required}
          {...props}
        />
      )}
      
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;