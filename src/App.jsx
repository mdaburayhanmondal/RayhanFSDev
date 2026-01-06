import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* bg-gray-50 = Light Mode Background
         dark:bg-[#161513] = Dark Mode Background
         text-gray-900 = Light Mode Text
         dark:text-gray-900 dark:text-white = Dark Mode Text
      */}
      <div className="mx-auto overflow-hidden bg-gray-50 text-gray-900 dark:bg-[#161513] dark:text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <Navbar />
        <main className="min-h-screen pt-20">
          <Outlet />
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
