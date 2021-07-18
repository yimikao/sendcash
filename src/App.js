import "./App.css";
import HeaderBar from "./components/HeaderBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Main />
      <Howitworks />
      <Footer />
    </div>
  );
}

export default App;
