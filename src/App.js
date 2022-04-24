import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProviders } from "./api";
import "./App.scss";
import BrowseProviders from "./pages/BrowseProviders/BrowseProviders";
import ProviderProfile from "./pages/ProviderProfile/ProviderProfile";

function App() {
  // Set state for list of providers
  const [providers, setProviders] = useState([]);

  // Update state of list of providets
  useEffect(() => {
    fetchProviders().then((providers) => {
      setProviders(providers);
    });
  }, [providers]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BrowseProviders providers={providers} />} />
          <Route path="/provider/:providerId" element={<ProviderProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
