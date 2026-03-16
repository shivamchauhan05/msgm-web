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
      "schoolMotto": "Indian Values, Global Approach",
      
      // Home Page
      "welcome": "Welcome to MSGM Inter College",
      "applyNow": "Apply Now",
      "contactUs": "Contact Us",
      "aboutUs": "About Us",
      "aboutSchool": "About Our School",
      "aboutSchoolDesc": "MSGM Group of Institutions, where Students are nurtured under the guidance of well qualified teachers. The school was set up in the year 1984 with the motto Indian Values. MSGM envisions fostering the emissaries of Global beneficiaries by transcending life transforming values to garner Global recognition. The mission of the school is to transform its vision into reality. Aligning with the motto INDIAN VALUES, GLOBAL APPROACH the educands are instilled with versatility to set their foot on global village. Induced with culture sensitivity, they are learnt to embrace the vibrant amalgamation of various customs, traditions & values of Indian Culture to bequeath to future generations.",
      "aboutSchoolShort": "MSGM Group of Institutions, where Students are nurtured under the guidance of well qualified teachers. The school was set up in the year 1984 with the motto Indian Values.",
      "ourAchievements": "Our Achievements",
      "proudMilestones": "Proud Milestones",
      "ourFacilities": "Our Facilities",
      "whatWeOffer": "What We Offer",
      "whyChooseUs": "Why Choose Us",
      "reasonsToChoose": "Reasons to Choose MSGM",
      "excellenceInEducation": "Excellence in Education",
      "since1984": "Serving since 1984",
      "principalMessage": "Principal's Message",
      "principalQuote": "Education is not just about academic excellence, but about building character and nurturing young minds to become responsible citizens of tomorrow.",
      "principal": "Principal",
      "testimonials": "Testimonials",
      "whatStudentsSay": "What Students Say",
      "gallery": "Gallery",
      "campusLife": "Campus Life",
      "beginJourney": "Begin Your Journey With Us",
      "joinMessage": "Join MSGM Inter College today and give your child the gift of quality education",
      "applyForAdmission": "Apply for Admission",
      "ourCampus": "Our Campus",
      "vision": "Our Vision",
      "mission": "Our Mission",
      "motto": "Our Motto",
      
      // Stats
      "yearsOfExcellence": "Years of Excellence",
      "students": "Students",
      "passPercentage": "Pass Percentage",
      "qualifiedTeachers": "Qualified Teachers",
      
      // Quality Points
      "qualityEducation": "Quality Education",
      "experiencedTeachers": "Experienced Teachers",
      "modernFacilities": "Modern Facilities",
      "holisticDevelopment": "Holistic Development",
      
      // Footer
      "quickLinks": "Quick Links",
      "contactInfo": "Contact Info",
      "address": "Address",
      "phone": "Phone",
      "email": "Email",
      "hours": "Hours",
      "copyright": "All rights reserved",
      "affiliation": "Affiliated to U.P. Board",
      "establishedBy": "Established by",
      
      // Founder
      "founder": "Founder",
      "founderName": "Arun Acharya",
      "founderQuote": "Education is the medium through which society can progress.",
      
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
      "founderName": "Arun Acharya",
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
      "schoolMotto": "भारतीय मूल्य, वैश्विक दृष्टिकोण",
      
      // Home Page
      "welcome": "एमएसजीएम इंटर कॉलेज में आपका स्वागत है",
      "applyNow": "अभी आवेदन करें",
      "contactUs": "संपर्क करें",
      "aboutUs": "हमारे बारे में",
      "aboutSchool": "हमारे विद्यालय के बारे में",
      "aboutSchoolDesc": "एमएसजीएम ग्रुप ऑफ इंस्टीट्यूशंस, जहां छात्रों को योग्य शिक्षकों के मार्गदर्शन में पोषित किया जाता है। विद्यालय की स्थापना वर्ष 1984 में 'भारतीय मूल्य' आदर्श वाक्य के साथ की गई थी। एमएसजीएम जीवन परिवर्तनकारी मूल्यों को पार करते हुए वैश्विक पहचान हासिल करने के लिए वैश्विक लाभार्थियों के दूतों को बढ़ावा देने की परिकल्पना करता है। विद्यालय का मिशन अपनी दृष्टि को वास्तविकता में बदलना है। 'भारतीय मूल्य, वैश्विक दृष्टिकोण' आदर्श वाक्य के अनुरूप, शिक्षार्थियों को वैश्विक गांव में अपना कदम रखने के लिए बहुमुखी प्रतिभा से युक्त किया जाता है। सांस्कृतिक संवेदनशीलता से प्रेरित होकर, वे भारतीय संस्कृति के विभिन्न रीति-रिवाजों, परंपराओं और मूल्यों के जीवंत समामेलन को भावी पीढ़ियों को हस्तांतरित करना सीखते हैं।",
      "aboutSchoolShort": "एमएसजीएम ग्रुप ऑफ इंस्टीट्यूशंस, जहां छात्रों को योग्य शिक्षकों के मार्गदर्शन में पोषित किया जाता है। विद्यालय की स्थापना वर्ष 1984 में 'भारतीय मूल्य' आदर्श वाक्य के साथ की गई थी।",
      "ourAchievements": "हमारी उपलब्धियां",
      "proudMilestones": "गौरवशाली उपलब्धियां",
      "ourFacilities": "हमारी सुविधाएं",
      "whatWeOffer": "हम क्या प्रदान करते हैं",
      "whyChooseUs": "हमें क्यों चुनें",
      "reasonsToChoose": "एमएसजीएम चुनने के कारण",
      "excellenceInEducation": "शिक्षा में उत्कृष्टता",
      "since1984": "1984 से सेवारत",
      "principalMessage": "प्रधानाचार्य का संदेश",
      "principalQuote": "शिक्षा केवल शैक्षणिक उत्कृष्टता के बारे में नहीं है, बल्कि चरित्र निर्माण और युवा मस्तिष्क को कल के जिम्मेदार नागरिक बनाने के बारे में है।",
      "principal": "प्रधानाचार्य",
      "testimonials": "समीक्षाएं",
      "whatStudentsSay": "छात्र क्या कहते हैं",
      "gallery": "गैलरी",
      "campusLife": "कैंपस लाइफ",
      "beginJourney": "हमारे साथ अपनी यात्रा शुरू करें",
      "joinMessage": "आज ही एमएसजीएम इंटर कॉलेज ज्वाइन करें और अपने बच्चे को गुणवत्तापूर्ण शिक्षा का उपहार दें",
      "applyForAdmission": "प्रवेश के लिए आवेदन करें",
      "ourCampus": "हमारा कैंपस",
      "vision": "हमारा दृष्टिकोण",
      "mission": "हमारा मिशन",
      "motto": "हमारा आदर्श वाक्य",
      
      // Stats
      "yearsOfExcellence": "वर्षों की उत्कृष्टता",
      "students": "छात्र",
      "passPercentage": "सफलता दर",
      "qualifiedTeachers": "योग्य शिक्षक",
      
      // Quality Points
      "qualityEducation": "गुणवत्तापूर्ण शिक्षा",
      "experiencedTeachers": "अनुभवी शिक्षक",
      "modernFacilities": "आधुनिक सुविधाएं",
      "holisticDevelopment": "सर्वांगीण विकास",
      
      // Footer
      "quickLinks": "त्वरित लिंक",
      "contactInfo": "संपर्क जानकारी",
      "address": "पता",
      "phone": "फोन",
      "email": "ईमेल",
      "hours": "समय",
      "copyright": "सर्वाधिकार सुरक्षित",
      "affiliation": "यू.पी. बोर्ड से मान्यता प्राप्त",
      "establishedBy": "द्वारा स्थापित",
      
      // Founder
      "founder": "संस्थापक",
      "founderName": "अरुण आचार्य",
      "founderQuote": "शिक्षा वह माध्यम है जिससे समाज का विकास संभव है।",
      
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
      "founderName": "अरुण आचार्य",
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
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;