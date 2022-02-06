import "../../styles/Card.css";

const Card = ({ name, politicalParty }) => {
  return (
    <div className="Card">
      <p className="Card-p">
        {name} arbetar för {politicalParty}
      </p>
    </div>
  );
};

export default Card;
