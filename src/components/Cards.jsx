import "../styles/components/cards.sass";

const Cards = () => {
  const redirect = () => window.open("https://wa.link/vd3046", "_blank");
  const designer = () =>
    window.open("https://www.instagram.com/estudiogael/", "_blank");

  return (
    <section id="card">
      <button onClick={redirect}>Whatsapp</button>
      <button onClick={designer}>Meu Designer</button>
    </section>
  );
};

export default Cards;
