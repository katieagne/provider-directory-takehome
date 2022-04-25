import React from "react";
import "./ProviderProfile.scss";
import { useState } from "react";
import { fetchProvider } from "../../api";
import { useParams } from "react-router-dom";
import arrow from "../../assets/icons/chevron.svg";
import map from "../../assets/icons/location.svg";
import world from "../../assets/icons/world.svg";
import edu from "../../assets/icons/edu.svg";
import { Link } from "react-router-dom";
import stock from "../../assets/img/stock.png";
import Loader from "../../components/Loader/Loader";

export default function ProviderProfile() {
  const { providerId } = useParams();
  const [provider, setProvider] = useState("");
  const [readMore, setReadMore] = useState(false);

  if (providerId === "1") {
    fetchProvider("1")
      .then((provider) => {
        setProvider(provider);
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
        // console.log(provider.languages);
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

  function displayAllLanguages() {
    if (languages && languages.length > 1) {
      return languages.join(", ");
    }
    return languages;
  }

  if (provider) {
    return (
      <main className="profile">
        <div className="profile__container">
          <p className="profile__breadcrumb">
            <Link to="/" className="profile__breadcrumb-link">
              Mental Wellness
            </Link>
            <img
              className="profile__breadcrumb-icon"
              src={arrow}
              alt="small arrow pointing right"
            />
            <span className="profile__provider">{`${name}, ${title}`}</span>
          </p>
          <div className="profile__wrapper">
            <img className="profile__img" src={stock} alt="provider" />
            <div className="profile__info">
              <h3 className="profile__name">{name}</h3>
              <p className="profile__occupation">{occupation}</p>
              <div className="profile__bio-container">
                <p
                  className={`${
                    !readMore ? " profile__bio-truncated" : "profile__bio"
                  }`}
                >
                  {bio}
                </p>
                <span
                  className="profile__read-more"
                  onClick={() => setReadMore(!readMore)}
                >
                  {!readMore ? "Read More" : "Read Less"}
                </span>
              </div>
              <div className="profile__details">
                <img
                  className="profile__icon"
                  src={map}
                  alt="icon of unfolded map with pin"
                />
                <div className="profile__details-container">
                  <p className="profile__label">Location</p>
                  <p className="profile__data">{location}</p>
                </div>
              </div>
              <div className="profile__details">
                <img
                  className="profile__icon"
                  src={edu}
                  alt="icon of graduate cap"
                />
                <div className="profile__details-container">
                  <p className="profile__label">Education</p>
                  <p className="profile__data">{education}</p>
                </div>
              </div>
              <div className="profile__details">
                <img
                  className="profile__icon"
                  src={world}
                  alt="icon of world with grid"
                />
                <div className="profile__details-container">
                  <p className="profile__label">Language</p>
                  <p className="profile__data">{displayAllLanguages()}</p>
                </div>
              </div>
              <button
                className="profile__cta"
                onClick={() => {
                  console.log("Clicked!");
                }}
              >
                Book with us
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return <Loader />;
  }
}
