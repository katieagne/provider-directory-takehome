import React from "react";
import "./ProvidersList.scss";
import ProviderCard from "./ProviderCard/ProviderCard";
import { Link } from "react-router-dom";

export default function ProvidersList({ providers }) {
  const providerList = providers;
  const total = providerList.length;
  return (
    <div className="providers">
      <p className="providers__count">
        <span className="providers__number">{total}</span> providers in Ontario
      </p>
      {providerList.map((provider) => {
        const id = provider.id;
        return (
          <Link to={`/provider/${id}`} key={id} className="providers__link">
            <ProviderCard provider={provider} />
          </Link>
        );
      })}
    </div>
  );
}
