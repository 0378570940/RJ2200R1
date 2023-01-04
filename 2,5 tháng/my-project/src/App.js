import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Content_function from "./Components/Content_function";
import ContentS from "./Components/ContentS";
import Footer from "./Components/Footer";
// import BasicForm from "./Components/BasicForm";

function App() {
  return (
    <>
      <Header></Header>
      <Content_function />
      <ContentS />
      <Footer />
    </>
  );
}

export default App;
