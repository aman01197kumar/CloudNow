import React from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import boxSearch from "../assets/box-search.png";
import develop from "../assets/develop.png";
import market from "../assets/market.png";
import planning from "../assets/planning.png";
const CardsSection = () => {
  const cards = [
    {
      image: boxSearch,
      title: "Business Idea Planning",
      subtitle: "We present you a proposal and discuss niffty-gritty like",
      bgColor: "#F1F7FF",
    },
    {
      image: planning,
      title: "Financial Planning System",
      subtitle: "Protocols apart from aengage models, pricing billing",
      bgColor: "#FFF7E3",
    },
    {
      image: develop,
      title: "Development Website and App",
      subtitle: "Communication protocols apart from engagement models",
      bgColor: "#FFF2F8",
    },
    {
      image: market,
      title: "Market Analysis Project",
      subtitle: "Protocols apart from aengage models, pricing billing",
      bgColor: "#DEFFEE",
    },
  ];

  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {cards.map((item, index) => {
        return (
          <Cards
            key={item.title}
            index={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            bgColor={item.bgColor}
          />
        );
      })}
    </Container>
  );
};

export default CardsSection;
