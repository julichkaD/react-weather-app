import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      Open-source code on&nbsp;
      <a
        href="https://github.com/julichkaD/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      &nbsp;by&nbsp;
      <a href="https://github.com/julichkaD" target="_blank" rel="noreferrer">
        {" "}
        Julia Darwish
      </a>{" "}
      , hosted on&nbsp;
      <a
        href="https://react-weather-app-jd.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
