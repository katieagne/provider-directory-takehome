import React from "react";
import "./ProviderProfile.scss";
import { useState } from "react";
import { fetchProvider } from "../../api";
import { useParams } from "react-router-dom";
import arrow from "../../assets/icons/chevron.svg";
import map from "../../assets/icons/location.svg";
import edu from "../../assets/icons/edu.svg";
import lang from "../../assets/icons/lang.svg";

export default function ProviderProfile() {
  // Access URL id param
  const { providerId } = useParams();

  // Set state for single provider
  const [provider, setProvider] = useState("");

  // Update state based on URL id param
  if (providerId === "1") {
    fetchProvider("1")
      .then((provider) => {
        setProvider(provider);
        // console.log(provider);
      })
      .catch((e) => console.log(e));
  }
  if (providerId === "2") {
    fetchProvider("2")
      .then((provider) => {
        setProvider(provider);
      })
      .catch((e) => console.log(e));
  }
  if (providerId === "3") {
    fetchProvider("3")
      .then((provider) => {
        setProvider(provider);
      })
      .catch((e) => console.log(e));
  }
  if (providerId === "4") {
    fetchProvider("4")
      .then((provider) => {
        setProvider(provider);
      })
      .catch((e) => console.log(e));
  }

  const { name, title, bio, occupation, education, location, languages } =
    provider;
  return (
    <main className="profile">
      <div className="profile__container">
        <p className="profile__breadcrumb">
          Mental Wellness
          <img className="profile__breadcrumb-icon" src={arrow} />
          <span className="profile__provider">{`${name}, ${title}`}</span>
        </p>
        <div className="profile__wrapper">
          <img
            className="profile__img"
            src="https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="corgi"
          />
          <div className="profile__info">
            <h3 className="profile__name">{name}</h3>
            <p className="profile__occupation">{occupation}</p>
            <div className="profile__bio-container">
              {/* TODO: readmore functionality */}
              <p className="profile__bio">{bio}</p>
            </div>
            <div className="profile__details">
              <img className="profile__icon" src={map} />
              <div className="profile__details-container">
                <p className="profile__label">Location</p>
                <p className="profile__data">{location}</p>
              </div>
            </div>
            <div className="profile__details">
              <img className="profile__icon" src={edu} />
              <div className="profile__details-container">
                <p className="profile__label">Education</p>
                <p className="profile__data">{education}</p>
              </div>
            </div>
            <div className="profile__details">
              <img className="profile__icon" src={lang} />
              <div className="profile__details-container">
                <p className="profile__label">Language</p>
                <p className="profile__data">{languages}</p>
              </div>
            </div>
            <button className="profile__cta">Book with us</button>
          </div>
        </div>
      </div>
    </main>
  );
}
