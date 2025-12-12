import React from "react";
import "./card.css";

const Card = ({ content_for_card, type }) => {
  // console.log("length", content_for_card.length);
  // const card_length =
  const no_of_cards = type;
  // console.log(no_of_cards);
  let cssCards;
  let cssCardsContainer;
  if (no_of_cards === "four") {
    cssCards = "four_cards";
    cssCardsContainer = "cards_section_four";
  } else {
    cssCards = "card";
    cssCardsContainer = "cards_section";
    // cssCardsContainer=
  }

  return (
    <>
      {/* div.cards_section */}
      <div className={cssCardsContainer}>
        {content_for_card.map(({ img, heading, content, no }, index) => {
          return (
            <div className={cssCards} key={index}>
              <img src={img} alt={heading} />
              {no_of_cards === "four" && <p>{no}</p>}
              <h2>{heading}</h2>

              <p>{content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
