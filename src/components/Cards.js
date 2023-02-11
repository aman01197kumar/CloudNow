// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
const Cards = ({ index, image, title, subtitle, bgColor }) => {
  console.log(title);
  console.log(image);
  return (
    <div
      className={`${index % 2 === 0 ? "card-position" : "card-position-up"}`}
    >
      <Card className={`shadow border-0 m-3 `} id="cardStyling">
        <Card.Body className="d-flex p-3 justify-content-center align-items-center flex-column">
          <div
            className="d-flex w-8 h-8 p-2 justify-content-center align-items-center"
            style={{ background: bgColor, borderRadius: "20px" }}
          >
            <img alt="" src={image} width="70%" />
          </div>
          <Card.Title className="m-4 text-center">{title} </Card.Title>
          <Card.Text className="text-center text-muted">{subtitle}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
