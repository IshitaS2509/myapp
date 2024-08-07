import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Homebanner1 from './components/Homebanner1/Homebanner1';
import Homebanner2 from './components/Homebanner2/Homebanner2';
import Page from './Workout/Page';
import ReportPage from './report/ReportPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Swiper } from 'swiper/react';
import Front from './components/Swiper/Swiper';
import ProfileForm from './Profile/ProfileForm';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";
import { useDarkMode } from "./useDarkMode";


export default function App() {
  const [theme, toggleTheme] = useDarkMode("light");
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Navigationbar /><br/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reports" element={<Homebanner1 />} />
          <Route path="/workouts" element={<Homebanner2 />} />
          <Route path="/profile" element={<ProfileForm />} />
  
          <Route path="/" element={
            <>
               <Front/>
              {/* <Homebanner1 /> */}
              {/* <Homebanner2 /> */}
            </>
          } />
          <Route path="/workout/:type" element={<Page />} />
          <Route path="/report/:name" element={<ReportPage />} />
        </Routes>
        hello
        <Footer/>
        <ToastContainer />
        <GlobalStyles />
        {/* <Toggle onToggle={toggleTheme}>Toggle theme</Toggle> */}
    </ThemeProvider>
    </BrowserRouter>
  );
}
