import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "admission": "Admission",
      "history": "History",
      "staff": "Staff",
      "topStudents": "Top Students",
      "contact": "Contact",
      
      // School Info
      "schoolName": "MSGM Inter College",
      "schoolLocation": "Kusmara, Mainpuri",
      "schoolTagline": "Excellence in Education Since 1984",
      
      // Home Page
      "welcome": "Welcome to MSGM Inter College",
      "applyNow": "Apply Now",
      "aboutSchool": "About Our School",
      "aboutSchoolDesc": "MSGM Inter College, established in 1984, is a prestigious educational institution in Kusmara, Mainpuri. Affiliated with U.P. Board, we offer quality education from Class 6 to 12 in Science, Arts, and Commerce streams. Our mission is to nurture students into responsible citizens through holistic education.",
      "achievements": "Achievements",
      "facilities": "Facilities",
      "principalMessage": "Principal's Message",
      "readMore": "Read More",
      
      // Footer
      "quickLinks": "Quick Links",
      "contactInfo": "Contact Info",
      "address": "Address",
      "phone": "Phone",
      "email": "Email",
      "hours": "Hours",
      "copyright": "All rights reserved",
      "affiliation": "Affiliated to U.P. Board",
      
      // Admission Page
      "admissionForm": "Admission Form",
      "studentName": "Student Name",
      "fatherName": "Father's Name",
      "motherName": "Mother's Name",
      "dob": "Date of Birth",
      "classApplying": "Class Applying For",
      "address": "Address",
      "phoneNumber": "Phone Number",
      "email": "Email",
      "submit": "Submit Application",
      "successMessage": "Application Submitted Successfully!",
      "successDesc": "We'll contact you soon with further details.",
      
      // History Page
      "ourHistory": "Our History",
      "founder": "Founder",
      "founderName": "Late Shri Mahesh Chandra Gupta",
      "founderQuote": "Education is the medium through which society can progress.",
      "timeline": "Timeline",
      "keyMilestones": "Key Milestones",
      "yearsOfExcellence": "Years of Excellence",
      "alumni": "Alumni",
      "awards": "Awards",
      "passPercentage": "Pass Percentage",
      
      // Staff Page
      "ourStaff": "Our Staff",
      "principal": "Principal",
      "vicePrincipal": "Vice Principal",
      "teacher": "Teacher",
      
      // Top Students
      "topStudents": "Top Students",
      "academicYear": "Academic Year 2023-24 Toppers",
      "class": "Class",
      "percentage": "Percentage",
      
      // Contact Page
      "contactUs": "Contact Us",
      "sendMessage": "Send Message",
      "yourName": "Your Name",
      "yourEmail": "Your Email",
      "yourPhone": "Your Phone",
      "yourMessage": "Your Message",
      "messageSent": "Message sent successfully!",
      "visitUs": "Visit Us",
      "completeAddress": "Complete Address",
      "viewOnMap": "View on Google Map",
      "monSat": "Monday - Saturday",
      "timing": "7:00 AM - 2:00 PM"
    }
  },
  hi: {
    translation: {
      // Navigation
      "home": "होम",
      "admission": "प्रवेश",
      "history": "इतिहास",
      "staff": "शिक्षकगण",
      "topStudents": "मेधावी छात्र",
      "contact": "संपर्क",
      
      // School Info
      "schoolName": "एमएसजीएम इंटर कॉलेज",
      "schoolLocation": "कुसमरा, मैनपुरी",
      "schoolTagline": "1984 से शिक्षा के क्षेत्र में उत्कृष्टता",
      
      // Home Page
      "welcome": "एमएसजीएम इंटर कॉलेज में आपका स्वागत है",
      "applyNow": "अभी आवेदन करें",
      "aboutSchool": "हमारे विद्यालय के बारे में",
      "aboutSchoolDesc": "एमएसजीएम इंटर कॉलेज, कुसमरा, मैनपुरी की स्थापना 1984 में हुई। यू.पी. बोर्ड से मान्यता प्राप्त यह संस्थान कक्षा 6 से 12 तक विज्ञान, कला और वाणिज्य संकाय में गुणवत्तापूर्ण शिक्षा प्रदान करता है। हमारा मिशन छात्रों को सर्वांगीण शिक्षा के माध्यम से जिम्मेदार नागरिक बनाना है।",
      "achievements": "उपलब्धियां",
      "facilities": "सुविधाएं",
      "principalMessage": "प्रधानाचार्य का संदेश",
      "readMore": "और पढ़ें",
      
      // Footer
      "quickLinks": "त्वरित लिंक",
      "contactInfo": "संपर्क जानकारी",
      "address": "पता",
      "phone": "फोन",
      "email": "ईमेल",
      "hours": "समय",
      "copyright": "सर्वाधिकार सुरक्षित",
      "affiliation": "यू.पी. बोर्ड से मान्यता प्राप्त",
      
      // Admission Page
      "admissionForm": "प्रवेश फॉर्म",
      "studentName": "छात्र का नाम",
      "fatherName": "पिता का नाम",
      "motherName": "माता का नाम",
      "dob": "जन्म तिथि",
      "classApplying": "कक्षा",
      "address": "पता",
      "phoneNumber": "फोन नंबर",
      "email": "ईमेल",
      "submit": "आवेदन जमा करें",
      "successMessage": "आवेदन सफलतापूर्वक जमा हो गया!",
      "successDesc": "हम शीघ्र ही आपसे संपर्क करेंगे।",
      
      // History Page
      "ourHistory": "हमारा इतिहास",
      "founder": "संस्थापक",
      "founderName": "स्वर्गीय श्री महेश चंद्र गुप्ता",
      "founderQuote": "शिक्षा वह माध्यम है जिससे समाज का विकास संभव है।",
      "timeline": "समयरेखा",
      "keyMilestones": "प्रमुख उपलब्धियां",
      "yearsOfExcellence": "वर्षों की उत्कृष्टता",
      "alumni": "पूर्व छात्र",
      "awards": "पुरस्कार",
      "passPercentage": "सफलता दर",
      
      // Staff Page
      "ourStaff": "हमारे शिक्षकगण",
      "principal": "प्रधानाचार्य",
      "vicePrincipal": "उप-प्रधानाचार्य",
      "teacher": "शिक्षक",
      
      // Top Students
      "topStudents": "मेधावी छात्र",
      "academicYear": "शैक्षणिक वर्ष 2023-24 के मेधावी छात्र",
      "class": "कक्षा",
      "percentage": "प्रतिशत",
      
      // Contact Page
      "contactUs": "संपर्क करें",
      "sendMessage": "संदेश भेजें",
      "yourName": "आपका नाम",
      "yourEmail": "आपका ईमेल",
      "yourPhone": "आपका फोन नंबर",
      "yourMessage": "आपका संदेश",
      "messageSent": "आपका संदेश सफलतापूर्वक भेज दिया गया है!",
      "visitUs": "हमसे मिलें",
      "completeAddress": "पूरा पता",
      "viewOnMap": "गूगल मैप पर देखें",
      "monSat": "सोमवार - शनिवार",
      "timing": "सुबह 7:00 - दोपहर 2:00"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;