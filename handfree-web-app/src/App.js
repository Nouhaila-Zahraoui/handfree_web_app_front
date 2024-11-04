import logo from './logo.svg';
import './App.css';
import Header from './components/js/header';
import Cards from './components/js/cards';
import SpecialOffers from './components/js/SpecialOffers';
import PopularPackages from './components/js/PopularPackages';
import ContactUs from './components/js/ContactUs';
import HappyCustomers from './components/js/HappyCustomers';
import Footer from './components/js/Footer';


function App() {
  return (
    <div className="App">
      <Header />
        <Cards />
        <SpecialOffers />
      <PopularPackages />
      <ContactUs />
        <HappyCustomers />
        <Footer />
    </div>
  );
}

export default App;
