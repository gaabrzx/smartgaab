import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import "./styles/app.sass";

function App() {
  return (
    <main id="content">
      <Header />
      <Card nome="Whatsapp" link="https://wa.link/vd3046" />
      <Card nome="Meu Designer" link="https://www.instagram.com/estudiogael/" />
    </main>
  );
}

export default App;
