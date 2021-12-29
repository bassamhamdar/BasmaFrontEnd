import React from "react";
import phone_image from "../../images/thumb-1.png";
import { useTranslation } from "react-i18next";
import { Nav } from "./Nav";
export const Header = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="Header_Section">
      {console.log(localStorage.getItem("auth"))}
      <div className="Nav">
        <Nav />
      </div>
      <div className="header__info">
        {i18n.language === "en" && (
          <button
            onClick={() => i18n.changeLanguage("ar")}
            className="language__btn"
          >
            للغة العربية
          </button>
        )}
        {i18n.language === "ar" && (
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="language__btn"
          >
            English
          </button>
        )}
        <h1>{t("header.title")}</h1>
        <p>{t("header.description")}</p>

        <button className="header__btn">
          {i18n.language === "ar" ? "البدء" : "Get Started"}
        </button>
      </div>
      <img src={phone_image} alt="phone" className="double_phone_image" />
    </div>
  );
};
