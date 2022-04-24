import React from "react";
import "./ProviderProfile.scss";
import { useState } from "react";
import { fetchProvider } from "../../api";
import { useParams } from "react-router-dom";

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

  const { name, title, bio, availabilty, id, occupation } = provider;
  return <div>{name}</div>;
}
