import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';

import ukrBg from '../images/ukr-background-new.jpg';
import ukrUniBg from '../images/ukr-universities.jpg';

import sponsorKaffebakeriet from '../images/sponsors/kaffebakeriet.jpeg';
import sponsorKodit from '../images/sponsors/kodit.png';
import sponsorSC from '../images/sponsors/stuntcoders.png';
import sponsorDT from '../images/sponsors/daytwo.svg';
import sponsorGrieg from '../images/sponsors/grieg.svg';
import sponsorTM from '../images/sponsors/tm.png';

export default function Home({ data }) {
  const metaDescription =
    'Our web portal helps job-seekers who need to set up a temporary base for their families outside Ukraine. We also post remote jobs suitable for workers based inside Ukraine. One Ukrainian-language database for skills in demand and vacancies across Europe - free for candidates and free for employers.';
  const metaTitle = 'Non-profit job portal for Ukrainian job-seekers in Europe';

  const { t } = useTranslation();

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt="We welcome Ukrainians to European Union."
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              {t('heading')}
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-gray-800 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  <Trans>c1</Trans>
                </h3>
                <p className="mt-4 text-base text-white">
                  Please check our work visa guides and skills shortages guide{' '}
                  <Link to="/skills-in-demand/">country by country</Link>.
                </p>
                <p className="mt-8 text-base text-white">
                  Do you need CV translation help?
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/contact-for-job-seekers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-blue-500 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  Employers
                </h3>
                <p className="mt-4 text-base text-white">
                  To evaluate Ukrainian CVs, please check our{' '}
                  <Link to="/ukr-eduction-explainer/">
                    UKR education explainer
                  </Link>{' '}
                  and our{' '}
                  <Link to="/ukr-expertise-explained/">
                    UKR expertise explainer
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  Register to post your vacancies
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/contact-for-employers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      Join
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
            <p>
              Europratsya post jobs for candidates who need to set up a
              temporary base for their families outside Ukraine. We also post
              remote jobs suitable for workers based inside Ukraine.
            </p>
            <p>
              One Ukrainian-language database for skills in demand and vacancies
              across Europe - free for candidates and employers.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
              Latest vacancies
            </h2>
          </div>
          <JobAds limit="9" lang="en" data={data.allSanityJobPost.edges} />

          <div className="mt-8 text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/vacancies"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                See all vacancies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-3/4 bg-gray-100">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={ukrUniBg}
            alt="Ukrainian universities"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-30" />
        <div className="z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="z-10 m-auto mx-auto mt-64 mb-64 text-center align-middle text-4xl font-extrabold text-white">
            Several Nobel prize winners in medicine, physics, chemistry and
            literature hail from Ukraine. Its oldest universities are from the
            16th and 17th century, and continue to produce world-class graduates
            in sciences, engineering, agriculture and mining.
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
            Sponsors and partners
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src={sponsorKaffebakeriet}
                alt="Kaffebakeriet"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorKodit} alt="Kodit" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorGrieg} alt="Grieg" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorSC} alt="StuntCoders" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorDT} alt="DayTwo" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorTM} alt="Team Magnus" />
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const JOB_POSTS = graphql`
  query JobPostsIndex {
    allSanityJobPost(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          city
          country {
            title {
              en
              uk
              de
            }
          }
          salary
          contact
          title {
            en
            de
            uk
          }
          description {
            en {
              children {
                text
              }
            }
            de {
              children {
                text
              }
            }
            uk {
              children {
                text
              }
            }
          }
          employer {
            name
          }
          job_categories {
            title
          }
          validUntil
          slug {
            current
          }
        }
      }
    }
  }
`;