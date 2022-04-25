import React from "react";
import ContentLoader from "react-content-loader";
import "./Loader.scss";
const Loader = (props) => (
  <div className="loading">
    <ContentLoader
      speed={2}
      width={804}
      height={698}
      viewBox="0 0 804 698"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="522" y="764" rx="3" ry="3" width="88" height="6" />
      <rect x="551" y="772" rx="3" ry="3" width="52" height="6" />
      <rect x="329" y="146" rx="3" ry="3" width="200" height="6" />
      <rect x="379" y="362" rx="3" ry="3" width="100" height="6" />
      <rect x="329" y="89" rx="3" ry="3" width="150" height="6" />
      <circle cx="582" cy="770" r="20" />
      <rect x="564" y="771" rx="0" ry="0" width="36" height="128" />
      <rect x="329" y="109" rx="3" ry="3" width="65" height="6" />
      <rect x="495" y="768" rx="3" ry="3" width="200" height="6" />
      <rect x="506" y="764" rx="3" ry="3" width="224" height="6" />
      <rect x="329" y="130" rx="3" ry="3" width="224" height="6" />
      <rect x="379" y="342" rx="3" ry="3" width="45" height="6" />
      <rect x="329" y="338" rx="0" ry="0" width="33" height="33" />
      <rect x="380" y="412" rx="3" ry="3" width="110" height="6" />
      <rect x="380" y="392" rx="3" ry="3" width="45" height="6" />
      <rect x="330" y="388" rx="0" ry="0" width="33" height="33" />
      <rect x="380" y="461" rx="3" ry="3" width="90" height="6" />
      <rect x="380" y="441" rx="3" ry="3" width="45" height="6" />
      <rect x="330" y="437" rx="0" ry="0" width="33" height="33" />
      <circle cx="579" cy="781" r="14" />
      <rect x="0" y="61" rx="0" ry="0" width="289" height="289" />
      <rect x="0" y="25" rx="3" ry="3" width="80" height="6" />
      <rect x="90" y="25" rx="3" ry="3" width="80" height="6" />
      <rect x="329" y="178" rx="3" ry="3" width="200" height="6" />
      <rect x="329" y="162" rx="3" ry="3" width="224" height="6" />
      <rect x="328" y="222" rx="3" ry="3" width="200" height="6" />
      <rect x="328" y="206" rx="3" ry="3" width="224" height="6" />
      <rect x="329" y="255" rx="3" ry="3" width="200" height="6" />
      <rect x="329" y="239" rx="3" ry="3" width="224" height="6" />
    </ContentLoader>
  </div>
);

export default Loader;
