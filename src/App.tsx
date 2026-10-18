
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import News from "./pages/News";
import Learning from "./pages/Learning";
import OurSchool from "./pages/OurSchool";
import StudentLife from "./pages/StudentLife";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/enquiry"
          element={
            <PageTransition>
              <Enquiry />
            </PageTransition>
          }
        />

        <Route
          path="/news"
          element={
            <PageTransition>
              <News />
            </PageTransition>
          }
        />
        <Route
          path="/learning"
          element={
            <PageTransition>
              <Learning />
            </PageTransition>
          }
        />
        <Route
          path="/our-school"
          element={
            <PageTransition>
              <OurSchool/>
            </PageTransition>
          }
        />
        <Route
          path="/student-life"
          element={
            <PageTransition>
              <StudentLife/>
            </PageTransition>
          }
        />

      </Routes>


      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

