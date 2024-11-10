import "./assets/css/style.css";
import Header from "./components/Header";
import Hero from "./components/Sections/Hero";
import Clients from "./components/Sections/Clients";
import Features from "./components/Sections/Features";
import Pricing from "./components/Sections/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
