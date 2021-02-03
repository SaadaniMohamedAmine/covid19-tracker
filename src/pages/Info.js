import React, { useState } from "react";
import { Card } from "antd";
import Corona2 from "../images/corona-2.jpeg";
import Corona3 from "../images/corona-3.jpeg";

const Info = () => {
  const tabListNoTitle = [
    {
      key: "General_info",
      tab: "General-info",
    },
    {
      key: "Protection",
      tab: "Protection",
    },
    {
      key: "Corona_tracker",
      tab: "Corona_tracker",
    },
  ];

  const contentListNoTitle = {
    General_info: (
      <div style={{ padding: "15px" }}>
        <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
          oronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Most people infected with the COVID-19
          virus will experience mild to moderate respiratory illness and recover
          without requiring special treatment. Older people, and those with
          underlying medical problems like cardiovascular disease, diabetes,
          chronic respiratory disease, and cancer are more likely to develop
          serious illness.
        </p>
        <img src={Corona2} alt="corona" className="img-info-section" />
      </div>
    ),
    Protection: (
      <div style={{ padding: "15px" }}>
        <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
          Maintain at least a 1-metre distance between yourself and others to
          reduce your risk of infection when they cough, sneeze or speak.
          Maintain an even greater distance between yourself and others when
          indoors. The further away, the better. Make wearing a mask a normal
          part of being around other people. The appropriate use, storage and
          cleaning or disposal are essential to make masks as effective as
          possible. Here are the basics of how to wear a mask: Clean your hands
          before you put your mask on, as well as before and after you take it
          off, and after you touch it at any time. Make sure it covers both your
          nose, mouth and chin. When you take off a mask, store it in a clean
          plastic bag, and every day either wash it if it’s a fabric mask, or
          dispose of a medical mask in a trash bin. Don’t use masks with valves.
        </p>
        <img src={Corona3} alt="corona-2" className="img-info-section" />
      </div>
    ),
    Corona_tracker: (
      <div style={{ padding: "20px" }}>
        <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
          So,this was a simple and practical react application for tracking
          corona virus from several countries in earth
        </p>
        <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
          I use for it an api information for the reusability and the fastest
          updating for the information
        </p>
        <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
          I am Mohamed Amine Saadani,Full stack Js Web Developper
        </p>
      </div>
    ),
  };
  const [handle, setHandle] = useState({
    key: "tab1",
    noTitleKey: "app",
  });

  const onTabChange = (key, type) => {
    setHandle({ [type]: key });
  };
  return (
    <div className="info-page">
      <Card
        style={{ width: "60%", margin: "30px auto" }}
        tabList={tabListNoTitle}
        activeTabKey={handle.noTitleKey}
        onTabChange={(key) => {
          onTabChange(key, "noTitleKey");
        }}
      >
        {contentListNoTitle[handle.noTitleKey]}
      </Card>
    </div>
  );
};

export default Info;
