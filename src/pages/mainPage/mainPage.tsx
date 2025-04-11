import style from "./mainPage.module.css";
import Template from "../../components/common/templateComp";
import AboutUs from "../../components/mainPage/aboutUs/aboutUs";
import Banner from "../../components/mainPage/banner/banner";
import Important from "../../components/mainPage/important/important";

export default function MainPage() {
  return (
    <>
      <Template>
        <div className={style.main}>
          <Banner />
          <AboutUs />
          <Important />
        </div>
      </Template>
    </>
  );
}
