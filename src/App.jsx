import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
// Remove ThemeProvider import

function App() {
  return (
    <div className="mx-auto overflow-hidden bg-gray-50 text-gray-900 dark:bg-[#161513] dark:text-white transition-colors duration-300 ease-in min-h-screen">
      <Navbar />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
