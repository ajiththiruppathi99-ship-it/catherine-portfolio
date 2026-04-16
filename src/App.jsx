import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"; 
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";
import Testimonials from "./components/Testimonials/Testimonials";
import Quote from "./components/Quote/Quote";
import Contact from "./components/Contact/Contact";
import Message from "./components/Message/Message"; 
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="partners"><Partners /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="quote"><Quote /></section>
      <section id="contact"><Contact /></section>
      <section id="message"><Message /></section>
    </>
  );
}

export default App;