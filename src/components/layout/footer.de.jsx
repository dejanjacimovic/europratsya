import React from 'react';
import { Link } from 'gatsby';
import europratsyaLogo from '../../images/europratsya-white.svg';

export default function FooterDe() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="-mt-4">
                <Link to="/" aria-label="Home">
                  <img
                    className="h-8 w-auto sm:h-12"
                    src={europratsyaLogo}
                    alt="Europratsya logo"
                  />
                </Link>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Sprachen
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/uk"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      Українська 🇺🇦{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      English 🇬🇧{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/de"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      Deutsch 🇩🇪{' '}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Allgemein zugängliche Information
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/de/privacy-policy"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Datenschutz
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/de/our-website"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Unsere Website
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Kontakte
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/de/contact-for-employers"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Für Arbeitgeber
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/de/contact-for-job-seekers"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Für Kandidaten
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div></div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Gesellschaft
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-300 hover:text-white">
                  Europratsya CIC
                  <br />
                  32 Oakbank Crescent
                  <br />
                  UK - Perth PH1 1DF
                </li>

                <li className="text-gray-400">
                  <a
                    href="mailto:info@europratsya.com"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    info@europratsya.com
                  </a>
                  <br />
                  Community interest company (not for profit)
                  <br />
                  Registration number: SC725877
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Europratsya. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
