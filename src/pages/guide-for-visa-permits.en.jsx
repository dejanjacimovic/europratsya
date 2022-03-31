import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function VisaPermits({ data }) {
  const metaDescription =
    'Work visa rules country by country for easier career planning in Europe';
  const metaTitle = 'Work visa rules country by country in Europe ';

  data = data.allSanityCountry.nodes;
  let countriesOutput = [];
  for (var key in data) {
    if (data[key].slug == null) continue;

    countriesOutput.push(
      <li>
        <Link to={'/countries/' + data[key].slug.current}>
          {data[key].title.en}
        </Link>
      </li>
    );
  }

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Guides for visa permits
              </h1>
              <div className="prose-indigo mx-auto mt-8 text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <div className="relative w-full md:flex">
                  <div className="md:w-1/3">
                    <ul className="grid grid-cols-3 gap-4 md:block">
                      {countriesOutput}
                    </ul>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-base text-xl font-bold tracking-wide text-black">
                      Unemployment Map
                    </h2>
                    <StaticImage
                      className="my-8 h-full w-auto"
                      src="../images/checklist/Unemployment-Map-2x.png"
                      alt="Unemployment Map"
                      loading="auto"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const COUNTRIES = graphql`
  query allSanityCountries {
    allSanityCountry(sort: { fields: title___en, order: ASC }) {
      nodes {
        slug {
          current
        }
        title {
          en
        }
        id
      }
    }
  }
`;
