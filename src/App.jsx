import logo from "./assets/logo.jpg";
import "./App.css";
import { useState } from "react";

// language
import { useTranslation } from "react-i18next";
import "./I18n"; // استيراد الترجمة

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // دالة لتغيير اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    // تغيير اتجاه الصفحة بناءً على اللغة
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    localStorage.setItem("lang", newLang);
  };

  return (
    <>
      {/* <!-- start header sextion  --> */}
      <header className="bg-main shadow-md font-sans tracking-wide relative z-50 w-full">
        <div className="container px-3 mx-auto flex flex-wrap items-start md:items-center justify-between gap-2  py-3  min-h-[70px]">
          <div className="flex flex-col md:flex-row items-start md:items-center md:gap-3">
            <a
              href="https://www.SSCIA.co"
              target="_blank"
              className={`font-bold ${
                isArabic ? "text-[1rem]" : "text-sm"
              } cursor-pointer`}
            >
              {t("title1")}
            </a>
            {/* here  */}
            <div className={`${isArabic ? "self-start" : "self-end"}`}>
              <i className="fa-solid fa-globe text-white"></i>
              <button
                onClick={toggleLanguage}
                className="font-bold text-white mx-2 "
              >
                {i18n.language === "en" ? "العربية" : "English"}
              </button>
              {/* <h1>{t("hell")}</h1>
            <p>{t("welcome")}</p> */}
            </div>
          </div>
          <div
            id="collapseMenu"
            className={`${
              toggleMenu ? null : "hidden"
            } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 transition duration-500 ease-in-out `}
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full transition-all duration-500 bg-white p-3"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-main max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className=" mb-6 hidden max-lg:block">
                <p className="font-bold text-[1rem]">{t("title")}</p>
              </li>
              <li className="swinging-animation-a-1 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#services"
                  className="  text-black block hover:text-white font-bold text-[15px]"
                >
                  {t("services")}
                </a>
              </li>
              <li className="swinging-animation-a-2 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#why"
                  className=" text-black block hover:text-white font-bold text-[15px]"
                >
                  {t("WhyAreWe")}
                </a>
              </li>
              <li className="swinging-animation-a-2 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#contact"
                  className=" text-black block hover:text-white font-bold text-[15px]"
                >
                  {t("contact")}
                </a>
              </li>

              <li className="swinging-animation-btn-3 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#vision"
                  className=" text-black block hover:text-white font-bold text-[15px]"
                >
                  {t("vision")}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex lg:hidden">
            <button
              id="toggleOpen"
              className="lg:hidden"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* <!-- end header sextion  --> */}
      <main className="container px-3 mx-auto mt-7 bg-white">
        {/* <!-- start hero section  --> */}
        <section
          id="hero"
          className=" w-full bg-white flex flex-col md:flex-row-reverse items-center justify-between"
        >
          <div
            className={`${
              isArabic
                ? "w-[242px] md:w-[75rem] md:ms-8 md:h-[242px] lg:h-[242px] lg:w-[57rem]"
                : "w-[242px] md:w-[110rem] md:ms-8 md:h-[242px] lg:h-[242px] lg:w-[70rem]"
            }`}
          >
            <img
              src={logo}
              loading="lazy"
              className=""
              alt="شعار المركز المتخصص السعودي للتحكيم"
            ></img>
          </div>
          <div>
            <h1
              className={`text-xl md:text-4xl font-bold mb-4 text-center  ${
                isArabic ? "md:text-right" : "md:text-left"
              }`}
            >
              {t("title")}
            </h1>
            <p
              className={` md:text-[1.35rem] font-medium text-gray-600 text-center ${
                isArabic
                  ? "md:text-justify text-[1rem]"
                  : "md:text-justify text-[15px]"
              }`}
            >
              {t("welcome")}
            </p>
          </div>
        </section>
        {/* <!-- end hero section  --> */}
        {/* <!-- start services section  --> */}
        <section id="services" className="min-h[576px] md:min-h-[396px] lg:min-h-[324px]">
          <h2 className="relative text-xl md:text-4xl font-bold text-center rounded-lg my-10 px-6 py-2 border-2  border-main transition duration-500  w-fit mx-auto group z-10">
            {t("services")}
            {/* الدوائر الجانبية */}
            <span className="absolute top-1/2 left-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:rounded-none group-hover:z-[-1]"></span>
            <span className="absolute top-1/2 right-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:rounded-none group-hover:z-[-1]"></span>
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-3  gap-4">
            <article className="relative shadow-md hover:shadow-2xl bg-secondary rounded-lg p-4 text-[1rem] font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-main transition-transform duration-700 translate-y-full group-hover:translate-y-0"></div>
              <p className="relative z-10">{t("article1")}</p>
            </article>
            <article className="relative shadow-md hover:shadow-2xl bg-secondary rounded-lg p-4 text-[1rem] font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-main transition-transform duration-700 translate-y-full group-hover:translate-y-0"></div>
              <p className="relative z-10">{t("article2")}</p>
            </article>
            <article className="relative shadow-md hover:shadow-2xl bg-secondary rounded-lg p-4 text-[1rem] font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-main transition-transform duration-700 translate-y-full group-hover:translate-y-0"></div>
              <p className="relative z-10">{t("article3")}</p>
            </article>
            <article className="relative shadow-md hover:shadow-2xl bg-secondary rounded-lg p-4 text-[1rem] font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-main transition-transform duration-700 translate-y-full group-hover:translate-y-0"></div>
              <p className="relative z-10">{t("article4")}</p>
            </article>
            <article className="relative shadow-md hover:shadow-2xl bg-secondary rounded-lg p-4 text-[1rem] font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-main transition-transform duration-700 translate-y-full group-hover:translate-y-0"></div>
              <p className="relative z-10">{t("article5")}</p>
            </article>
          </div>
        </section>
        {/* <!-- end services section  --> */}
        {/* <!-- start why section  --> */}
        <section id="why" className="">
          <h2 className="relative text-xl md:text-4xl font-bold text-center rounded-lg my-10 px-6 py-2 border-2  border-main transition duration-500  w-fit mx-auto group z-10">
            {t("WhyAreWe")}
            {/* الدوائر الجانبية */}
            <span className="absolute top-1/2 left-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:rounded-none group-hover:z-[-1]"></span>
            <span className="absolute top-1/2 right-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:rounded-none group-hover:z-[-1]"></span>
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-4  gap-4">
            <article className="shadow-md bg-secondary rounded-lg p-4 text-[1rem] font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_6px_1px] hover:shadow-main">
              <p>{t("article6")}</p>
            </article>
            <article className="shadow-md bg-secondary rounded-lg p-4 text-[1rem] font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_6px_1px] hover:shadow-main">
              <p>{t("article7")}</p>
            </article>
            <article className="shadow-md bg-secondary rounded-lg p-4 text-[1rem] font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_6px_1px] hover:shadow-main">
              <p>{t("article8")}</p>
            </article>
            <article className="shadow-md bg-secondary rounded-lg p-4 text-[1rem] font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_6px_1px] hover:shadow-main">
              <p>{t("article9")}</p>
            </article>
          </div>
          <div className="mt-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-center text-gray-600 underline">
              {t("tableTitle")}
            </h3>
            <table className="table-auto border-collapse  border border-slate-500 mt-8">
              <thead>
                <tr>
                  <th className="border border-slate-600 p-1">{t("No")}</th>
                  <th className="border border-slate-600 p-1">{t("Country")}</th>
                  <th className="border border-slate-600 p-1">{t("CenterName")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">1</td>
                  <td className="border border-slate-600 p-1">{t("country1")}</td>
                  <td className="border border-slate-600 p-1">{t("table1")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">2</td>
                  <td className="border border-slate-600 p-1">{t("country2")}</td>
                  <td className="border border-slate-600 p-1">{t("table2")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">3</td>
                  <td className="border border-slate-600 p-1">{t("country3")}</td>
                  <td className="border border-slate-600 p-1">{t("table3")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">4</td>
                  <td className="border border-slate-600 p-1">{t("country4")}</td>
                  <td className="border border-slate-600 p-1">{t("table4")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">5</td>
                  <td className="border border-slate-600 p-1">{t("country5")}</td>
                  <td className="border border-slate-600 p-1">{t("table5")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">6</td>
                  <td className="border border-slate-600 p-1">{t("country6")}</td>
                  <td className="border border-slate-600 p-1">{t("table6")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">7</td>
                  <td className="border border-slate-600 p-1">{t("country7")}</td>
                  <td className="border border-slate-600 p-1">{t("table7")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">8</td>
                  <td className="border border-slate-600 p-1">{t("country8")}</td>
                  <td className="border border-slate-600 p-1">{t("table8")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">9</td>
                  <td className="border border-slate-600 p-1">{t("country9")}</td>
                  <td className="border border-slate-600 p-1">{t("table9")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">10</td>
                  <td className="border border-slate-600 p-1">{t("country10")}</td>
                  <td className="border border-slate-600 p-1">{t("table10")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">11</td>
                  <td className="border border-slate-600 p-1">{t("country11")}</td>
                  <td className="border border-slate-600 p-1">{t("table11")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">12</td>
                  <td className="border border-slate-600 p-1">{t("country12")}</td>
                  <td className="border border-slate-600 p-1">{t("table12")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">13</td>
                  <td className="border border-slate-600 p-1">{t("country13")}</td>
                  <td className="border border-slate-600 p-1">{t("table13")}</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 p-1 text-center">14</td>
                  <td className="border border-slate-600 p-1">{t("country14")}</td>
                  <td className="border border-slate-600 p-1">{t("table14")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* <!-- end why section  --> */}
        {/* <!-- start contact section  --> */}
        <section id="contact" className="mt-10">
          <div className="bg-white rounded-lg shadow-lg flex flex-col items-center ">
            <h2 className="relative text-xl md:text-4xl font-bold text-center rounded-lg my-10 px-6 py-2 border-2  border-main transition duration-500  w-fit mx-auto group z-10">
              {t("contact")}
              {/* الدوائر الجانبية */}
              <span className="absolute top-1/2 left-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:rounded-none group-hover:z-[-1]"></span>
              <span className="absolute top-1/2 right-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:rounded-none group-hover:z-[-1]"></span>
            </h2>
            <form
              action="https://formsubmit.co/45cbf6b2befff1178e921ee8d6c3cde4"
              method="POST"
              className="flex flex-col items-center justify-center gap-4 w-full md:w-[500px]"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Message!" />
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  className="flex w-full rounded-lg border bg-secondary px-3 py-3 text-[1rem] focus-visible:outline-1 outline-cyan-500"
                  placeholder={t("formInput1")}
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="phone"
                  className="flex w-full rounded-lg border bg-secondary px-3 py-3 text-[1rem] focus-visible:outline-1 outline-cyan-500"
                  placeholder={t("formInput2")}
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  className="flex w-full rounded-lg border bg-secondary px-3 py-3 text-[1rem] focus-visible:outline-1 outline-cyan-500"
                  placeholder={t("formInput3")}
                  required
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  className="flex min-h-[80px] w-full rounded-lg border bg-secondary p-3 text-[1rem] focus-visible:outline-1 outline-cyan-500"
                  placeholder={t("formInput4")}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button
                className="flex items-center justify-center px-6 py-3 rounded-lg text-[1rem] font-medium  transition-all duration-500 focus-visible:outline-1 outline-cyan-500 bg-secondary hover:bg-main mb-4"
                type="submit"
              >
                {t("formbtn")}
              </button>
            </form>
          </div>
        </section>
        {/* <!-- end about section  --> */}
        {/* <!-- start section our vision  --> */}
        <section
          id="vision"
          className="mt-10 bg-secondary rounded-lg px-4 py-10"
        >
          <h2 className="relative text-xl md:text-4xl font-bold text-center rounded-lg my-10 px-6 py-2 border-2  border-main transition duration-500  w-fit mx-auto group z-10">
            {t("vision")}
            {/* الدوائر الجانبية */}
            <span className="absolute top-1/2 left-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:rounded-none group-hover:z-[-1]"></span>
            <span className="absolute top-1/2 right-[-30px] w-3 h-3 bg-main rounded-lg transform -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:rounded-none group-hover:z-[-1]"></span>
          </h2>
          <div>
            <p className="text-[1rem] md:text-[1.35rem] font-medium text-center ">
              {t("article10")}
            </p>
          </div>
        </section>
        {/* <!-- end section our vision  --> */}
      </main>
      {/* <!-- start footer section  --> */}
      <footer className=" bg-main py-8 mt-10 ">
        <div className="container px-3 mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          <article className=" flex flex-col items-center md:items-start rounded-lg p-4 text-[1rem] font-medium">
            <p className="mb-4 text-[1rem] ">الرقم الموحد 200202979</p>
            <p className="text-[1rem] ">السجل التجاري 74516</p>
          </article>
          <article className="flex flex-col items-center md:items-end lg:items-center rounded-lg p-4 text-[1rem] font-medium">
            <p className="flex items-center justify-end mb-4">
              <a
                href="mailto:Info@SSCIA.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1rem] hover:text-white"
              >
                Info@SSCIA.co
              </a>
              <i className="fa-regular fa-envelope ms-4"></i>
            </p>
            <p className="flex items-center justify-end">
              <a
                href="https://www.SSCIA.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1rem] hover:text-white"
              >
                www.SSCIA.co
              </a>
              <i className="fa-solid fa-globe ms-4"></i>
            </p>
          </article>
          <article className="flex flex-col items-center md:items-start lg:items-end    rounded-lg p-4 text-[1rem] font-medium">
            <p className="mb-4 text-[1rem] ">National Unified No: 200202979</p>
            <p className="text-[1rem] ">Company Registration No: 74516</p>
          </article>
        </div>
        <p className="container px-3 pt-8 pb-4 mx-auto text-sm md:text-xl text-center">
          <span>{t("rights1")}</span>{" "}
          <span id="year">{new Date().getFullYear()}</span>
          <span> {t("rights2")}</span>
        </p>
      </footer>
      {/* <!-- end footer section  --> */}
    </>
  );
}

export default App;
