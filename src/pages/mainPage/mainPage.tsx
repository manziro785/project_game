import React from "react";
import style from "./mainPage.module.css";
import Template from "../../components/common/templateComp";
import AboutUs from "../../components/mainPage/aboutUs/aboutUs";
import Banner from "../../components/mainPage/banner/banner";

export default function MainPage() {
  return (
    <>
      <Template>
        <div className={style.main}>
          MainPage
          <Banner />
          <AboutUs />
        </div>
      </Template>
    </>
  );
}
