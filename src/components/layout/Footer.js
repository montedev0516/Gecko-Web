import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer bg-[#121318] dark:bg-gray-100 text-white">
        <div className="n-container">
          <div className="py-5 sm:py-10 sm:flex justify-between gap-10">
            <div className="items-center justify-start">
              <img src="/img/logo.png" className="h-20 m-auto sm:m-0" alt="" />
              <p className="footer_text max-w-[440px] mt-0 mx-6 sm:mx-0 sm:mt-0 text-white text-center sm:text-start">
                Football World Community is a project that was created with the
                aim of bringing football and cryptocurrencies together so that
                users can enter the world of crypto football.
              </p>
            </div>

            <div className="grid-cols-2 sm:grid-cols-4 px-2 sm:px-0 gap-5 w-full hidden sm:grid">
              <div className="mt-3">
                <h1 className="footer_title bg-gradient-to-r from-[]">
                  {t("Products")}
                </h1>
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]"></div>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="footer_title">{t("Company")}</h1>
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]"></div>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="footer_title">{t("Support ")}</h1>
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]"></div>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="footer_title">{t("Socials")}</h1>
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]"></div>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#595959] py-4 sm:flex justify-between items-center">
            <div className="text-center sm:text-right text-sm sm:text-base">
              <p>© 2022 Football World Communityt. All rights reserved</p>
            </div>
            <div className="flex gap-2 justify-center mt-4 sm:mt-0">
              <img src="/img/socials/discord.png" alt="" />
              <img src="/img/socials/facebook.png" alt="" />
              <img src="/img/socials/twitter.png" alt="" />
              <img src="/img/socials/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
