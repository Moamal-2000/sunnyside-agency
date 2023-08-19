import Footer from "./Components/Footer/Footer";
import ImagesSection from "./Components/Footer/ImagesSection";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Testimonials />
      <ImagesSection />
      <Footer />
    </div>
  );
}

export default App;
