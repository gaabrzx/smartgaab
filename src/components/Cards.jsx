import "../styles/components/cards.sass";

const Cards = () => {
  function redirect() {
    window.open("https://wa.link/vd3046", "_blank");
  }

  return (
    <section id="card">
      <button onClick={redirect}>Whatsapp</button>
    </section>
  );
};

export default Cards;
