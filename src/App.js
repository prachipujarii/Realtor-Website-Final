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
      { value: 'property', label: 'Property Information', trigger: '5' },
      { value: 'financial', label: 'Financial Questions', trigger: '5' },
      { value: 'legal', label: 'Legal and Documentation', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'What would you like to know?',
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 'services', label: 'What services do we offer?', trigger: 'service_options' },
      { value: 'contact', label: 'How can I contact a real estate agent?', trigger: 'contact_options' },
      { value: 'location', label: 'Where are you located?', trigger: 'location_options' },
      { value: 'time', label: 'What are your operating hours?', trigger: 'hours_options' },
      { value: 'properties', label: 'Do you have properties in other states?', trigger: 'properties_options' },
      { value: 'listing', label: 'Are there any new listings available?', trigger: 'new_options' },
      { value: 'property', label: 'How do I sign up for property alerts?', trigger: 'signup_options' },
      { value: 'rental', label: 'Can you help me find a rental property?', trigger: 'rental_options' },
      { value: 'types', label: 'What types of properties do you deal with?', trigger: 'types_options' },
      { value: 'mobile', label: 'Is there a mobile app for your services?', trigger: 'mobile_options' },
      // You can add more options here for "Property Information", "Financial Questions", "Legal and Documentation"
    ],
  },
  // Decision points for General Information
  {
    id: 'service_options',
    message: 'We offer a wide range of real estate services, including buying, selling, and renting residential and commercial properties, property management, and real estate consultancy.',
    trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'contact_options',
    message: 'You can contact our real estate agents by logging in and visiting the specific property that you want to buy/rent. Our team is ready to assist you with your real estate needs.',
    trigger: '7',
  },
  {
    id: 'location_options',
    message: 'Our main office is located in Mumbai, but we operate in multiple locations.',
    trigger: '7',
  },
  {
    id: 'hours_options',
    message: 'Our operating hours are from 9 AM to 6 PM, Monday through Saturday.',
    trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'properties_options',
    message: 'Yes, we have properties available in several states.',
    trigger: '7',
  },
  {
    id: 'new_options',
    message: 'Yes, we frequently update our listings',
    trigger: '7',
  },
  {
    id: 'signup_options',
    message: 'You can sign up for property alerts by providing your email ',
    trigger: '7',
  },
  {
    id: 'rental_options',
    message: 'Certainly! Please go to our places for rent page and you will be able to find them. ',
    trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'types_options',
    message: 'We deal with various types of properties, including residential homes, apartments, commercial properties, and land.',
    trigger: '7',
  },
  {
    id: 'mobile_options',
    message: 'No, we do not have a mobile app yet but we are soon working on it',
    trigger: '7',
  },
  
  {
    id: '8',
    message: 'What would you like to know?',
    trigger: '9',
  },
  {
    id: '9',
    options: [
      { value: 'amenities', label: 'Can I get information about the amenities of a property?', trigger: 'amenities_options' },
      { value: 'square', label: 'What is the square footage of the property?', trigger: 'square_options' },
      { value: 'pet', label: 'Are the properties you list pet-friendly?', trigger: 'pet_options' },
      { value: 'home', label: 'Do you have properties with a home office?', trigger: 'home_options' },
      { value: 'bedrooms', label: 'How many bedrooms does the apartment have?', trigger: 'apartment_options' },
      { value: 'virtual', label: 'Is there a virtual tour available for the property?', trigger: 'virtual_options' },
      { value: 'applicances', label: 'Does the house come with appliances?', trigger: 'appliances_options' },
      // You can add more options here for "Property Information", "Financial Questions", "Legal and Documentation"
    ],
  },
  // Decision points for General Information
  {
    id: 'amenities_options',
    message: 'We offer a wide range of real estate services, including buying, selling, and renting residential and commercial properties, property management, and real estate consultancy.',
    trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'square_options',
    message: 'You can contact our real estate agents by logging in and visiting the specific property that you want to buy/rent. Our team is ready to assist you with your real estate needs.',
    trigger: '7',
  },
  {
    id: 'pet_options',
    message: 'Our main office is located in Mumbai, but we operate in multiple locations.',
    trigger: '7',
  },
  {
    id: 'home_options',
    message: 'Our operating hours are from 9 AM to 6 PM, Monday through Saturday.',
    trigger: '7', // This could lead to a "More Information" or "Main Menu" option
  },
  {
    id: 'apartment_options',
    message: 'Yes, we have properties available in several states.',
    trigger: '7',
  },
  {
    id: 'virtual_options',
    message: 'Yes, we frequently update our listings',
    trigger: '7',
  },
  {
    id: 'appliances_options',
    message: 'You can sign up for property alerts by providing your email ',
    trigger: '7',
  },
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
  botAvatar: './assets/svg/chatbot.jpg', // Corrected image path using require
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
