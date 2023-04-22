import Banner from "./components/banner/Banner";
import Business from "./components/business/Business";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Partners from "./components/partners/Partners";
import Services from "./components/services/Services";
import FreeTrail from "./components/startFreeTrial/FreeTrail";
import Store from "./components/store/Store";
import Stories from "./components/stories/Stories";
import Templates from "./components/templates/Templates";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Templates />
      <Services />
      <Store />
      <Business />
      <Partners />
      <Stories />
      <FreeTrail />
      <Footer />
    </div>
  );
}

export default App;
