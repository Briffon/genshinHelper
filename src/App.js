import "./main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="web-container">
        <Nav />
        <Routes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
