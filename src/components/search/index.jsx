import algoliasearch from 'algoliasearch/lite';
import { createRef, default as React, useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './search-box';
import SearchResult from './search-result';
import useClickOutside from './use-click-outside';

export default function Search({ indices, mobile = false, classList }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_API_KEY
      ),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));
  const searchBoxStyle = mobile
    ? 'md:hidden block w-full'
    : 'hidden md:block right-0 w-80';
  const searchResultStyle = mobile
    ? 'md:hidden block max-h-96 left-4 right-5 top-20 mt-9'
    : 'hidden md:block max-w-xs w-80 max-h-80 top-12';

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={'Home'}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <div className={classList} ref={rootRef}>
        <SearchBox
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
          classList={searchBoxStyle}
        />
        <SearchResult
          show={query}
          indices={indices}
          className={`${query && hasFocus ? searchResultStyle : 'hidden'}`}
        />
      </div>
    </InstantSearch>
  );
}
