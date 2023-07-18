import "./App.css";
import TopBar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Components/Footer";
import CarousalContainer from "./Components/Carousal";
const PlayPage = lazy(() => import("./Components/Player"));
const AboutPage = lazy(() => import("./Components/About"));
const UploadPage = lazy(() => import("./Components/Upload"));
const MainPage = lazy(() => import("./Components/MainContainer"));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <CarousalContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading.."}>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path="/upload"
            element={
              <Suspense fallback={"Loading..."}>
                <UploadPage />
              </Suspense>
            }
          />
          <Route
            path="/play"
            element={
              <Suspense fallback={"Loading..."}>
                <PlayPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={"Loading..."}>
                <AboutPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
