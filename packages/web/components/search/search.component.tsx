import React, { useState } from 'react';
import { Skeleton } from 'antd';
import { useTheme } from 'styled-components';

import {
  FaSearch,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircleNotch,
} from 'react-icons/fa';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import {
  useGetPopularQuery,
  useSearchLazyQuery,
  TmdbSearchResult,
  useGetLibraryMoviesQuery,
  useGetLibraryTvShowsQuery,
} from '../../utils/graphql';

import { TMDBCardComponent } from '../tmdb-card/tmdb-card.component';
import { SearchStyles, Wrapper } from './search.styles';
import movies from '../../pages/library/movies';

export function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularQuery = useGetPopularQuery();
  const [search, { data, loading }] = useSearchLazyQuery();

  const displayTVResults = searchQuery && data?.results?.tvShows?.length;
  const displayMovieResults = searchQuery && data?.results?.movies?.length;

  const SearchIcon = loading ? FaCircleNotch : FaSearch;
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search({ variables: { query: searchQuery } });
  };

  return (
    <SearchStyles>
      <div className="search-bar--container">
        <Wrapper>
          <div className="search-bar--title">What are we watching next?</div>
          <div className="search-bar--subtitle">Search anything...</div>
          <form onSubmit={handleSearch}>
            <div className="search-bar--input-container">
              <input
                type="text"
                className="search-bar--input"
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
              />
              <button type="submit" className="search-bar--input-submit">
                <SearchIcon style={{ marginRight: 8 }} /> Search
              </button>
            </div>
          </form>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="search-results--container">
          <Skeleton active={true} loading={popularQuery.loading}>
            <div className="search-results--category">
              {displayMovieResults ? 'Found Movies' : 'Popular Movies'}
            </div>
            <ResultsCarousel
              type="movie"
              results={
                displayMovieResults
                  ? data?.results?.movies || []
                  : popularQuery.data?.results?.movies || []
              }
            />
            <div className="spacer" />
            <div className="search-results--category">
              {displayTVResults ? 'Found TV Shows' : 'Popular TV Shows'}
            </div>
            <ResultsCarousel
              type="tvshow"
              results={
                displayTVResults
                  ? data?.results?.tvShows || []
                  : popularQuery.data?.results?.tvShows || []
              }
            />
          </Skeleton>
        </div>
      </Wrapper>
    </SearchStyles>
  );
}

function ResultsCarousel({
  results,
  type,
}: {
  results: TmdbSearchResult[];
  type: 'movie' | 'tvshow';
}) {
  const theme = useTheme();
  const { data: moviesLibrary } = useGetLibraryMoviesQuery();
  const { data: tvShowsLibrary } = useGetLibraryTvShowsQuery();

  const tmdbIds = [
    ...(moviesLibrary?.movies?.map(({ tmdbId }) => tmdbId) || []),
    ...(tvShowsLibrary?.tvShows?.map(({ tmdbId }) => tmdbId) || []),
  ];

  return (
    <div className="carrousel--container">
      <CarouselProvider
        naturalSlideHeight={theme.tmdbCardHeight}
        naturalSlideWidth={220}
        totalSlides={results.length}
        dragEnabled={false}
        visibleSlides={5}
        step={5}
      >
        <ButtonBack className="arrow-left">
          <FaChevronCircleLeft size={16} />
        </ButtonBack>
        <Slider>
          {results.map((result, index) => (
            <Slide
              key={result.id}
              index={index}
              innerClassName="carrousel--slide"
            >
              <TMDBCardComponent
                key={result.id}
                type={type}
                result={result}
                inLibrary={tmdbIds.includes(result.tmdbId)}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="arrow-right">
          <FaChevronCircleRight size={16} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
