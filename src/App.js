import ClientList from "./components/ClientList";
import Footer from "./components/Footer";
import IntroductoryPage from "./components/IntroductoryPage";
import Middleware from "./components/Middleware";

import SupportSection from "./components/SupportSection";

function App() {
  return (
    <>
      <IntroductoryPage />
      <ClientList />
      <SupportSection />
      <Middleware />

      <Footer />
    </>
  );
}

export default App;
