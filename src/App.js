import { fetchProviders, fetchProvider } from "./api";
import "./App.scss";

function App() {
  // Samples of API requests
  fetchProviders().then(console.log);
  fetchProvider("1").then(console.log);

  return <div className="App">clean!</div>;
}

export default App;
