import React from "react";
import "./BrowseProviders.scss";
import pin from "../../assets/icons/pin.svg";
import ProvidersList from "../../components/ProvidersList/ProvidersList";

export default function BrowseProviders({ providers }) {
  return (
    <main className="browse-providers">
      <section className="browse-providers__top-wrapper">
        <div className="browse-providers__top-container">
          <h1 className="browse-providers__top-heading">
            Browse our providers
          </h1>
          <p className="browse-providers__top-subheading">Mental Wellness</p>
          <div className="browse-providers__top-location-label">
            <img
              className="browse-providers__top-location-icon"
              src={pin}
              alt=""
            />
            <p className="browse-providers__top-location">ON</p>
          </div>
        </div>
      </section>
      <section className="browse-providers__provider-list">
        <ProvidersList providers={providers} />
      </section>
    </main>
  );
}
