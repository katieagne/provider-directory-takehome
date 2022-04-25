import React from "react";
import "./ProviderCard.scss";
import stock from "../../../assets/img/stock.png";

export default function ProviderCard({ provider }) {
  const { name, title, bio, availabilty, occupation } = provider;

  return (
    <div className="card">
      <div className="card__meta">
        <img className="card__img" src={stock} alt="provider" />
        <div className="card__titles-container">
          <h3 className="card__name">
            {name}, {title}
          </h3>
          <p className="card__title">{occupation}</p>
        </div>
      </div>
      <p className="card__bio">{bio}</p>

      <p className="card__availability-badge">{`Available ${availabilty}`}</p>
    </div>
  );
}
