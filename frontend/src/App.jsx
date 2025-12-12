import MainPage from './Components/MainPage/MainPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './pages/PageNotFound/PageNotFound';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import FirstSection from './Components/FirstSection/FirstSection';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Technologies from './pages/Technologies/Technologies';
import Vision from './pages/Vision/Vision';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstSection />} />
          <Route path="/what_we_do" element={<WhatWeDo />} />
          <Route path="/how_it_works" element={<HowItWorks />} />
          <Route path="/technologies" element={<Technologies/>} />
          <Route path="/vision" element={<Vision />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
