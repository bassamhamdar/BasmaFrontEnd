import React from "react";
import { Column } from "./Column";
import { useTranslation } from "react-i18next";
import "./style.css";
export const First = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="Section-1">
      <div className="Section-1__header">
        <h1>{t("firstSection.title")}</h1>
        <p>{t("firstSection.description")}</p>
        <div className="Section-1__flex">
          <Column
            first={t("firstSection.firstPoint")}
            second={t("firstSection.secondPoint")}
          />
          <Column
            first={t("firstSection.firstPoint")}
            second={t("firstSection.thirdPoint")}
          />
          <Column
            first={t("firstSection.firstPoint")}
            second={t("firstSection.fourthPoint")}
          />
        </div>
      </div>
    </div>
  );
};
