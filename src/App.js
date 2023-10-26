import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

function App({ classNames }) {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="container">
      <div className="language-select">
        <ul>
          <li>
            <span>{t("language")}</span>
          </li>
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <a
                href="#"
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1>{t("welcome_message")}</h1>
      <p>{t("days_since_release", { number_of_days: 10 })}</p>
      <p>{t("Price per Kilogram")}</p>
    </div>
  );
}

export default App;
