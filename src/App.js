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
      <div
        style={{
          textAlign: "center",
          margin: "2em 0",
          fontSize: "2em",
        }}
      >
        <a href="#howitworks" style={{ textDecoration: "none" }}>
          👇🏾
        </a>
      </div>
      <Howitworks />
      <Footer />
    </div>
  );
}

export default App;
