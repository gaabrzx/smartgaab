import "../styles/components/cards.sass";

const Card = ({ nome, link }) => {
  return (
    <a href={link} target="_blank">
      <h1>{nome}</h1>
    </a>
  );
};

export default Card;
