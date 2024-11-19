import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="appDownload" id="appDownload">
      <p className="appDownload_instruction">
        For Bettet Expriance Download <br />{" "}
        <span className="sp">Attica App</span>
      </p>

      <div className="app-download-platforms">
        <img src={assets.playStore} alt="" />
        <img src={assets.appStore} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
