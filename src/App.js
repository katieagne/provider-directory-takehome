import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchProviders, fetchProvider } from "./api";
import "./App.scss";
import BrowseProviders from "./pages/BrowseProviders/BrowseProviders";
import ProviderProfile from "./pages/ProviderProfile/ProviderProfile";

function App() {
  // Samples of API requests
  fetchProviders().then(console.log);
  fetchProvider("1").then(console.log);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BrowseProviders />} />
          <Route path=":providerId" element={<ProviderProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
