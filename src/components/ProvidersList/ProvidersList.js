import React from "react";
import ProviderCard from "./ProviderCard/ProviderCard";

export default function ProvidersList({ providers, providerName }) {
  const providerList = providers;
  return (
    <div>
      {providerList.map((provider) => {
        const id = provider.id;
        return <ProviderCard key={id} provider={provider} />;
      })}
    </div>
  );
}
