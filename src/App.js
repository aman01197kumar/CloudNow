import ClientList from "./components/ClientList";
import Footer from "./components/Footer";
import IntroductoryPage from "./components/IntroductoryPage";
import SupportSection from "./components/SupportSection";

function App() {
  return (
    <>
      <IntroductoryPage />
      <br />
      <br />
      <ClientList />
      <SupportSection />
      <Footer />
    </>
  );
}

export default App;
