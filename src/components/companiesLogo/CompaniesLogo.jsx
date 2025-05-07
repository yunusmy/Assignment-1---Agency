import React from "react";
import AirbnbLogo from "../icons/AirbnbLogo";
import GoogleLogo from "../icons/GoogleLogo";
import MailchimpLogo from "../icons/MailchimpLogo";
import MashableLogo from "../icons/MashableLogo";
import MicrosoftLogo from "../icons/MicrosoftLogo";
import SpotifyLogo from "../icons/SpotifyLogo";

const CompaniesLogo = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex items-center lg:justify-center">
              <AirbnbLogo />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <GoogleLogo />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <MicrosoftLogo />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <SpotifyLogo />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <MailchimpLogo />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <MashableLogo />
            </a>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default CompaniesLogo;
