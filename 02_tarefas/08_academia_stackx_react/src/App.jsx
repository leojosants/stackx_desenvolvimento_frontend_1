import {
  ToastContainer
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Hero from './components/HeroComponent/HeroComponent.jsx';
import Programs from './components/ProgramsComponent/ProgramsComponent.jsx';
import Reasons from './components/ReasonsComponent/ReasonsComponent.jsx';
import Plans from './components/PlansComponent/PlansComponent.jsx';
import Testimonials from './components/TestimonialsComponent/TestimonialsComponent.jsx';
import Join from './components/JoinComponent/JoinComponent.jsx';
import Footer from './components/FooterComponent/FooterComponent.jsx';
import './App.css';

function App() {
  return (
    <div className="class-app">
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      <Hero />
      
      <Programs />
      
      <Reasons />
      
      <Plans />
      
      <Testimonials />
      
      <Join />
      
      <Footer />
    </div>
  );
}

export default App;