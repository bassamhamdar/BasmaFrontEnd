import React from "react";
import finger_print from "../../../images/finger_print.png";
export const Column = ({ first, second }) => {
  return (
    <div className="column">
      <>
        <img src={finger_print} alt="finger-print" />
        <h3>{first}</h3>
        <p>
          من خلال اتخاذ خيارات أخلاقية تركز على المستخدم ، فإننا نخلق شبكة ويب
          أفضل للجميع.
        </p>
      </>
      <>
        <img src={finger_print} alt="finger-print" />
        <h3>{second}</h3>
        <p>
          من خلال اتخاذ خيارات أخلاقية تركز على المستخدم ، فإننا نخلق شبكة ويب
          أفضل للجميع.
        </p>
      </>
    </div>
  );
};
