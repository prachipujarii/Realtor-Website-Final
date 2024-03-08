import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Category from "./pages/Category";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import PropertyRateInMumbai from "./pages/PropertyRatesInMumbai";
import PropertyNews from "./pages/PropertyNews";
import SellerGuide from "./pages/SellerGuide";
import BuyerGuide from "./pages/BuyerGuide";

//import RedirectComponent from "./components/RedirectComponent";

// function RentListings() {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     const fetchListings = async () => {
//       // Reference to the listings collection
//       const listingsRef = collection(db, "listings");
      
//       // Create a query against the collection.
//       const q = query(
//         listingsRef,
//         where("type", "==", "rent"),
//         where("regularPrice", "<=", 5000) // Assuming regularPrice is stored as a number
//       );
      
//       // Execute the query
//       const querySnapshot = await getDocs(q);
//       const fetchedListings = [];
      
//       querySnapshot.forEach((doc) => {
//         fetchedListings.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
      
//       // Update state with the fetched listings
//       setListings(fetchedListings);
//     };

//     fetchListings();
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <div>
//       <h2>Rent Listings Under $5000</h2>
//       <ul>
//         {listings.map(listing => (
//           <li key={listing.id}>
//             <h3>{listing.name}</h3>
//             <p>{listing.description}</p>
//             <p>Price: ${listing.regularPrice}</p>
//             {/* Render other listing details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
const steps = [
  {
    id: '0',
    message: 'Welcome to our Real Estate Assistance!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please enter your name:',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I assist you today?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 'general', label: 'General Information', trigger: '5' },
      { value: 'property', label: 'Property Information', trigger: '8' },
      { value: 'financial', label: 'Financial Questions', trigger: 'finance_questions' },
      { value: 'legal', label: 'Legal and Documentation', trigger: 'legal_questions1' },
    ],
  },
  {
    id: '5',
    message: 'Please ask your question.',
    trigger: 'answer1',
  },
  // {
  //   id: 'question',
  //   user: true,
  //   trigger: 'answer',
  // },
  {
    id: 'answer1',
    user: true,
    trigger: ({value}) => {
      if (value.toLowerCase().includes('services')) {
        return 'service';
      } else if (value.toLowerCase().includes('contact')) {
        return 'contact';
      } else if (value.toLowerCase().includes('location')) {
        return 'location';
      } else if (value.toLowerCase().includes('hours')) {
        return 'hours';
      } else if (value.toLowerCase().includes('properties')) {
        return 'properties';
      } else if (value.toLowerCase().includes('listings')) {
        return 'new';
      } else if (value.toLowerCase().includes('sign up')) {
        return 'signup';
      } else if (value.toLowerCase().includes('rental')) {
        return 'rental';
      } else if (value.toLowerCase().includes('types')) {
        return 'types';
      } else if (value.toLowerCase().includes('mobile')) {
        return 'mobile';
      } else if (value.toLowerCase().includes('company')) {
        return 'company';
      } else if (value.toLowerCase().includes('long')) {
        return 'long';
      } else if (value.toLowerCase().includes('management')) {
        return 'management';
      } else if (value.toLowerCase().includes('valuation')) {
        return 'valuation';
      } else if (value.toLowerCase().includes('mortage')) {
        return 'mortage';
      } else if (value.toLowerCase().includes('loan')) {
        return 'loan';
      } else if (value.toLowerCase().includes('good')) {
        return 'good';
      } else if (value.toLowerCase().includes('help')) {
        return 'help';
      } else if (value.toLowerCase().includes('complaint')) {
        return 'complaint';
      } else if (value.toLowerCase().includes('account')) {
        return 'account';
      } else {
        return 'fallback';
      }
      // return trigger; // This ensures the appropriate trigger is returned based on the input
    },
  },
  // Decision points for General Information
  {
    id: 'service',
    message: 'We offer a wide range of real estate services, including buying, selling, and renting residential and commercial properties, property management, and real estate consultancy.',
    trigger: '15', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'contact',
    message: 'You can contact our real estate agents by logging in and visiting the specific property that you want to buy/rent. Our team is ready to assist you with your real estate needs.',
    trigger: '15',
  },
  {
    id: 'location',
    message: 'Our main office is located in Mumbai, but we operate in multiple locations.',
    trigger: '15',
  },
  {
    id: 'hours',
    message: 'Our operating hours are from 9 AM to 6 PM, Monday through Saturday.',
    trigger: '15', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'properties',
    message: 'Yes, we have properties available in several states.',
    trigger: '15',
  },
  {
    id: 'new',
    message: 'Yes, we frequently update our listings',
    trigger: '15',
  },
  {
    id: 'signup',
    message: 'You can sign up for property alerts by providing your email.',
    trigger: '15',
  },
  {
    id: 'rental',
    message: 'Certainly! Please go to our places for rent page and you will be able to find them.',
    trigger: '15', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'types',
    message: 'We deal with various types of properties, including residential homes, apartments, commercial properties, and land.',
    trigger: '15',
  },
  {
    id: 'mobile',
    message: 'No, we do not have a mobile app yet but we are soon working on it.',
    trigger: '15',
  },
  {
    id: 'company',
    message: 'We are a full-service real estate firm with over 20 years of experience, specializing in residential and commercial properties. Our mission is to provide exceptional service and expertise in the real estate market.',
    trigger: '15',
  },
  {
    id: 'long',
    message: 'We are a full-service real estate firm with over 20 years of experience, specializing in residential and commercial properties. Our mission is to provide exceptional service and expertise in the real estate market.',
    trigger: '15',
  },
  {
    id: 'management',
    message: 'Yes, we offer comprehensive property management services, including tenant screening, maintenance, and rent collection. We ensure your investment is well-cared for.',
    trigger: '15',
  },
  {
    id: 'valuation',
    message: 'Yes, we offer property valuation services. Our experts use up-to-date market data to give you an accurate estimate of your property worth. Please contact us for more details.',
    trigger: '15',
  },
  {
    id: 'mortage',
    message: 'We partner with several financial institutions to offer a variety of mortgage options suited for first-time buyers, including low down payment options and competitive rates.',
    trigger: '15',
  },
  {
    id: 'loan',
    message: 'We partner with several financial institutions to offer a variety of mortgage options suited for first-time buyers, including low down payment options and competitive rates.',
    trigger: '15',
  },
  {
    id: 'good',
    message: 'The best time to sell depends on various factors, including market trends and your personal circumstances. Contact Us and our agents can provide a market analysis to help you decide.',
    trigger: '15',
  },
  {
    id: 'help',
    message: 'Absolutely! Please contact our technical support team through the contact form on our website or call us directly. We are here to help you resolve any issues promptly',
    trigger: '15',
  },
  {
    id: 'complaint',
    message: 'Your feedback is important to us! Please leave your feedback through the form on our website, or email us directly at feedback@ourrealestate.com. We look forward to hearing from you.',
    trigger: '15',
  },
  {
    id: 'account',
    message: 'Creating an account is easy! Just click on the Sign Up button on our homepage and sell/buy your dream house.',
    trigger: '15',
  },
  {
    id: 'fallback',
    message: 'I am sorry, I could not understand your question. Please ask a different question.',
    trigger: '15', // Redirects back to asking for a question
  },
  {
    id: '15',
    options: [
      { value: 'more_questions', label: 'Ask more questions?', trigger:'5'},
      { value: 'home', label: 'Return to home', trigger:'4'},
    ]
  },
  {
    id: '8',
    options: [
      { value: 'sell', label: 'I want to put my property on rent/sell my property', trigger:'9'},
      { value: 'buy', label: 'I want to rent/buy a property', trigger:'10'},
    ]
  },
  {
    id: '9',
    message:'You can sell or rent out your property by signing into our website. Here is the path to be followed to put your property on rent or sale: SignIn> Profile > Sell or Rent your home > Create Listing. To visit the Sign-In page please type "Show me the link". ',
    trigger: 'sign-in'
  },
  {
    id: 'sign-in',
    user: true,
    validator: (value) => {
      if (value.toLowerCase() === 'show me the link') {
        // This is where you'd ideally want to show the clickable link, but due to constraints, you proceed to display it as text.
        // Directly opening a link here isn't feasible without custom handling outside the chatbot's standard message system.
        window.open('http://localhost:3000/sign-in', '_blank');
        return true;
      } else {
        return 'Please type "Show me the link" to view the listing.';
      }
    },
    trigger: '7',
  },
  {
    id: '10',
    message: 'What type of property are you looking for?',
    trigger: '11',
  },
  {
    id: '11',
    options: [
      { value: 'rent', label: 'Rent a house', trigger: '12' },
      { value: 'sale', label: 'Buy a house', trigger: '' },
    ],
  },
  {
    id: '12',
    message: 'Choose a price range for rent:',
    trigger: '13',
  },
  {
    id: '13',
    options: [
      { value: '<2000', label: 'Less than $2000', trigger: '' },
      { value: '<5000', label: 'Less than $5000', trigger: '' },
      { value: '<8000', label: 'Less than $8000', trigger: 'below_8000' },
      { value: '<10000', label: 'Less than $10000', trigger: '14' },
      { value: '>10000', label: ' Greater than $10000', trigger: '' },
      // Add more options for other price ranges as needed.
    ],
  },
  {
    id: '14',
    message: 'Luxury Desert Villa - $ 8,000 / month.  Indulge in luxury desert living in this opulent villa, surrounded by majestic sand dunes and offering lavish amenities including a private pool, spa, and rooftop terrace. To view the listing, please type "Show me the link".',
    trigger: 'user-input-link',
  },
  // {
  //   id: 'both-triggers',
  //   options: [
  //     { value: 'user-input-link', label: '', trigger: 'user-input-link' },
  //     { value: 'show-linkl', label: 'Do you want to explore more?', trigger: 'prop2' },
  //   ],
  // },
  {
    id: 'user-input-link',
    user: true,
    validator: (value) => {
      if (value.toLowerCase() === 'show me the link') {
        // This is where you'd ideally want to show the clickable link, but due to constraints, you proceed to display it as text.
        // Directly opening a link here isn't feasible without custom handling outside the chatbot's standard message system.
        window.open('http://localhost:3000/category/rent/X0Lhuu5PW5aFy0bvoAhw', '_blank');
        return true;
      } else {
        return 'Please type "Show me the link" to view the listing.';
      }
    },
    trigger: 'show-linkl',
  },
  {
    id: 'show-linkl',
    message: 'Do you want to explore more?',
    trigger: 'prop2',
  },
  {
    id: 'prop2',
    options: [
      { value: 'yes', label: 'More Properties', trigger: 'prop3' },
      { value: 'return-to-home', label: 'Return to Home', trigger: '7' },
      // Add more options for other price ranges as needed.
    ],
  },
  {
    id: 'prop3',
    message: 'Tropical Paradise Retreat - $ 7,200 / month.Escape to paradise in this tropical retreat, boasting a beachfront villa with palm-fringed gardens, infinity pool, and direct access to pristine white sands. To view the listing, please type "Show me the link".',
    trigger: 'user-input-link1',
  },
  {
    id: 'user-input-link1',
    user: true,
    validator: (value) => {
      if (value.toLowerCase() === 'show me the link') {
        // This is where you'd ideally want to show the clickable link, but due to constraints, you proceed to display it as text.
        // Directly opening a link here isn't feasible without custom handling outside the chatbot's standard message system.
        window.open('http://localhost:3000/category/rent/zRXCykHaLt1Axh8tXXeu', '_blank');
        return true;
      } else {
        return 'Please type "Show me the link" to view the listing.';
      }
    },
    trigger: '7',
  },
  {
    id: 'below_8000',
    message: 'Tropical Paradise Retreat - $ 7,200 / month.Escape to paradise in this tropical retreat, boasting a beachfront villa with palm-fringed gardens, infinity pool, and direct access to pristine white sands. To view the listing, please type "Show me the link".',
    trigger: 'user-input-link1',
  },
  {
    id: 'user-input-link1',
    user: true,
    validator: (value) => {
      if (value.toLowerCase() === 'show me the link') {
        // This is where you'd ideally want to show the clickable link, but due to constraints, you proceed to display it as text.
        // Directly opening a link here isn't feasible without custom handling outside the chatbot's standard message system.
        window.open('http://localhost:3000/category/rent/zRXCykHaLt1Axh8tXXeu', '_blank');
        return true;
      } else {
        return 'Please type "Show me the link" to view the listing.';
      }
    },
    trigger: '7',
  },
  {
    id: 'finance_questions',
    message: 'Please ask your finance-related question.',
    trigger: 'answer2',
  },
  {
    id: 'answer2',
    user: true,
    trigger: ({ value }) => {
      if (value.toLowerCase().includes('investment')) {
        return 'investment';
      } else if (value.toLowerCase().includes('mortgage')) {
        return 'mortgage';
      } else if (value.toLowerCase().includes('loan')) {
        return 'loan';
      } else if (value.toLowerCase().includes('credit score')) {
        return 'credit_score';
      } else if (value.toLowerCase().includes('financial advice')) {
        return 'financial_advice';
      } else if (value.toLowerCase().includes('saving')) {
        return 'saving';
      } else if (value.toLowerCase().includes('retirement')) {
        return 'retirement';
      } else if (value.toLowerCase().includes('budgeting')) {
        return 'budgeting';
      } else if (value.toLowerCase().includes('taxes')) {
        return 'taxes';
      } else if (value.toLowerCase().includes('insurance')) {
        return 'insurance';
      } else {
        return 'fallback';
      }
    },
  },
  {
    id: 'investment',
    message: 'Investment in real estate can be a lucrative option for wealth accumulation and portfolio diversification.',
    trigger: '15',
  },
  {
    id: 'mortgage',
    message: 'We partner with several financial institutions to offer a variety of mortgage options suited for first-time buyers, including low down payment options and competitive rates.',
    trigger: '15',
  },
  {
    id: 'loan',
    message: 'Our company provides various loan options tailored to meet your financial needs. Please contact us for more information.',
    trigger: '15',
  },
  {
    id: 'credit_score',
    message: 'Maintaining a good credit score is crucial for obtaining favorable loan terms and interest rates. We can provide guidance on improving your credit score.',
    trigger: '15',
  },
  {
    id: 'financial_advice',
    message: 'Our team of financial advisors can offer personalized advice to help you achieve your financial goals. Contact Us today!',
    trigger: '15',
  },
  {
    id: 'saving',
    message: 'Saving money is essential for building financial security and achieving long-term financial goals. We can provide tips and strategies for effective saving.',
    trigger: '15',
  },
  {
    id: 'retirement',
    message: 'Planning for retirement is crucial to ensure financial stability in your later years. We offer retirement planning services to help you secure your future.',
    trigger: '15',
  },
  {
    id: 'budgeting',
    message: 'Effective budgeting is the foundation of financial success. Our experts can assist you in creating a personalized budget that aligns with your financial goals.',
    trigger: '15',
  },
  {
    id: 'taxes',
    message: 'Understanding tax implications is essential for making informed financial decisions. Our tax specialists can provide guidance on tax planning and optimization.',
    trigger: '15',
  },
  {
    id: 'insurance',
    message: 'Insurance plays a vital role in protecting your assets and mitigating financial risks. We offer various insurance products to meet your needs.',
    trigger: '15',
  },
  {
    id: 'fallback',
    message: 'I am sorry, I could not understand your question. Please ask a different question.',
    trigger: '15',
  },
  {
    id: '15',
    options: [
      { value: 'more_questions', label: 'Ask more questions?', trigger: '5' },
      { value: 'home', label: 'Return to home', trigger: '4' },
    ]
  },
  {
    id: 'legal_questions1',
    message: 'Please ask your legal documentation-related question.',
    trigger: 'answer3',
  },
  {
    id: 'answer3',
    user: true,
    trigger: ({ value }) => {
      if (value.toLowerCase().includes('contract')) {
        return 'contract';
      } else if (value.toLowerCase().includes('lease agreement')) {
        return 'lease_agreement';
      } else if (value.toLowerCase().includes('title deed')) {
        return 'title_deed';
      } else if (value.toLowerCase().includes('property deed')) {
        return 'property_deed';
      } else if (value.toLowerCase().includes('power of attorney')) {
        return 'power_of_attorney';
      } else if (value.toLowerCase().includes('legal advice')) {
        return 'legal_advice';
      } else if (value.toLowerCase().includes('documentation process')) {
        return 'documentation_process';
      } else if (value.toLowerCase().includes('sale deed')) {
        return 'sale_deed';
      } else if (value.toLowerCase().includes('rent agreement')) {
        return 'rent_agreement';
      } else if (value.toLowerCase().includes('registration process')) {
        return 'registration_process';
      } else if (value.toLowerCase().includes('ownership transfer')) {
        return 'ownership_transfer';
      } else if (value.toLowerCase().includes('property dispute')) {
        return 'property_dispute';
      } else {
        return 'fallback';
      }
    },
  },
  {
    id: 'contract',
    message: 'A contract is a legally binding agreement between two or more parties. It outlines the terms and conditions of a transaction or arrangement.',
    trigger: '15',
  },
  {
    id: 'lease_agreement',
    message: 'A lease agreement is a contract between a landlord and a tenant that outlines the terms and conditions of renting a property.',
    trigger: '15',
  },
  {
    id: 'title_deed',
    message: 'A title deed is a legal document that proves ownership of a property. It contains details such as the property description, ownership history, and any encumbrances.',
    trigger: '15',
  },
  {
    id: 'property_deed',
    message: 'A property deed is a legal document that transfers ownership of a property from one party to another. It must be signed by the seller and recorded with the appropriate government authority.',
    trigger: '15',
  },
  {
    id: 'power_of_attorney',
    message: 'A power of attorney is a legal document that grants someone the authority to act on behalf of another person in legal or financial matters.',
    trigger: '15',
  },
  {
    id: 'legal_advice',
    message: 'Seeking legal advice from a qualified attorney is essential for navigating complex legal issues related to real estate transactions and documentation.',
    trigger: '15',
  },
  {
    id: 'documentation_process',
    message: 'The documentation process involves preparing and reviewing legal documents required for real estate transactions, such as contracts, deeds, and agreements.',
    trigger: '15',
  },
  {
    id: 'sale_deed',
    message: 'A sale deed is a legal document that transfers ownership of a property from the seller to the buyer. It is an essential document in property transactions.',
    trigger: '15',
  },
  {
    id: 'rent_agreement',
    message: 'A rent agreement, also known as a rental contract or lease agreement, is a legal document that outlines the terms and conditions of renting a property.',
    trigger: '15',
  },
  {
    id: 'registration_process',
    message: 'The registration process involves officially recording legal documents, such as deeds and agreements, with the appropriate government authority to ensure their validity and enforceability.',
    trigger: '15',
  },
  {
    id: 'ownership_transfer',
    message: 'Ownership transfer refers to the legal process of transferring ownership of a property from one party to another. It typically involves executing a sale deed or transfer deed.',
    trigger: '15',
  },
  {
    id: 'property_dispute',
    message: 'Property disputes can arise from various issues, such as boundary disputes, title disputes, and breach of contract. Resolving property disputes often requires legal intervention.',
    trigger: '15',
  },
  {
    id: 'fallback',
    message: 'I am sorry, I could not understand your question. Please ask a different question.',
    trigger: '15',
  },
  {
    id: '15',
    options: [
      { value: 'more_questions', label: 'Ask more questions?', trigger: '5' },
      { value: 'home', label: 'Return to home', trigger: '4' },
    ]
  },

  
  
  // {
  //   id: '8',
  //   message: 'What would you like to know?',
  //   trigger: '9',
  // },
  // {
  //   id: '9',
  //   options: [
  //     { value: 'amenities', label: 'Can I get information about the amenities of a property?', trigger: 'amenities_options' },
  //     { value: 'square', label: 'What is the square footage of the property?', trigger: 'square_options' },
  //     { value: 'pet', label: 'Are the properties you list pet-friendly?', trigger: 'pet_options' },
  //     { value: 'home', label: 'Do you have properties with a home office?', trigger: 'home_options' },
  //     { value: 'bedrooms', label: 'How many bedrooms does the apartment have?', trigger: 'apartment_options' },
  //     { value: 'virtual', label: 'Is there a virtual tour available for the property?', trigger: 'virtual_options' },
  //     { value: 'applicances', label: 'Does the house come with appliances?', trigger: 'appliances_options' },
  //     // You can add more options here for "Property Information", "Financial Questions", "Legal and Documentation"
  //   ],
  // },
  // // Decision points for General Information
  // {
  //   id: 'amenities_options',
  //   message: 'We offer a wide range of real estate services, including buying, selling, and renting residential and commercial properties, property management, and real estate consultancy.',
  //   trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  // },
  // {
  //   id: 'square_options',
  //   message: 'You can contact our real estate agents by logging in and visiting the specific property that you want to buy/rent. Our team is ready to assist you with your real estate needs.',
  //   trigger: '7',
  // },
  // {
  //   id: 'pet_options',
  //   message: 'Our main office is located in Mumbai, but we operate in multiple locations.',
  //   trigger: '7',
  // },
  // {
  //   id: 'home_options',
  //   message: 'Our operating hours are from 9 AM to 6 PM, Monday through Saturday.',
  //   trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  // },
  // {
  //   id: 'apartment_options',
  //   message: 'Yes, we have properties available in several states.',
  //   trigger: '7',
  // },
  // {
  //   id: 'virtual_options',
  //   message: 'Yes, we frequently update our listings',
  //   trigger: '7',
  // },
  // {
  //   id: 'appliances_options',
  //   message: 'You can sign up for property alerts by providing your email ',
  //   trigger: '7',
  // },
  // Add similar decision points for Property Information, Financial Questions, Legal and Documentation
  // Placeholder for a return to main menu or further actions
  {
    id: '7',
    options: [
      { value: 'main_menu', label: 'Return to Main Menu', trigger: '4' },
      // Add other options as needed
    ],
  },
];
//Creating our own theme 
const theme = {
  background: '#FFFFFF', // Set background to white
  headerBgColor: '#C41E3A', // Set header background color to light green
  headerFontSize: '20px',
  botBubbleColor: '#ECFFDC', // Set bot bubble color to light green
  headerFontColor: '#FFFFFF', // Set header font color to white
  botFontColor: '#000000', // Set bot font color to white
  userBubbleColor: '#FFFFFF', // Set user bubble color to white
  userFontColor: '#000000', // Set user font color to black
};


// Set some properties of the bot
const config = {
  botAvatar: './images/chatbot.png', // Corrected image path using require
  floating: true,
  };

function App() {
    
  return (
    <>
    <ThemeProvider theme={theme}>
      <ChatBot
 
        // This appears as the header
        // text for the chat bot
        headerTitle="RealtyBot"
        steps={steps}
        style={{ width: '30%' }}
        {...config}
 
      />
    </ThemeProvider>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/category/:categoryName/:listingId" element={<Listing/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/testimonials" element={<Testimonials/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/property-rates-in-mumbai" element={<PropertyRateInMumbai/>}></Route>
        <Route path="/property-news" element={<PropertyNews/>}></Route>
        <Route path="/seller-guide" element={<SellerGuide/>}></Route>
        <Route path="/buyer-guide" element={<BuyerGuide/>}></Route>
        <Route path="/category/:categoryName" element={<Category/>}></Route>
        <Route path="create-listing" element={<PrivateRoute />}>
        <Route path="/create-listing" element={<CreateListing/>}></Route>
        </Route>
        <Route path="edit-listing" element={<PrivateRoute />}>
        <Route path="/edit-listing/:listingId" element={<EditListing/>}></Route>
        </Route>
      </Routes>
      <Footer />
      </Router> 
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      
    </>
  );
}

export default App;
