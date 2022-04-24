import React from "react";
import "./ProviderCard.scss";
// import { useState, useEffect } from "react";
// import { fetchProviders, fetchProvider } from "../../../api";

export default function ProviderCard({ provider }) {
  const { name, title, bio, availabilty, id, occupation } = provider;

  return (
    <div className="card">
      <div className="card__meta">
        <img
          className="card__img"
          src="https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="corgi"
        />
        <div className="card__titles-container">
          <h3 className="card__name">
            {name}, {title}
          </h3>
          <p className="card__title">{occupation}</p>
        </div>
      </div>
      <p className="card__bio">{bio}</p>
      <p className="card__availability-badge">{availabilty}</p>
    </div>
  );
}
