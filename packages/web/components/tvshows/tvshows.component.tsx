import React from 'react';
import styled from 'styled-components';
import { Skeleton, Empty } from 'antd';

import { useGetLibraryTvShowsQuery } from '../../utils/graphql';

import { MoviesComponentStyles } from '../movies/movies.styles';
import { DownloadingComponent } from '../downloading/downloading.component';
import { MissingComponent } from '../missing/missing.component';
import { TMDBCardComponent } from '../tmdb-card/tmdb-card.component';

const TVShowsComponentStyles = styled(MoviesComponentStyles)``;

export function TVShowsComponent() {
  const { data, loading } = useGetLibraryTvShowsQuery();

  return (
    <>
      <div style={{ background: '#A4BCC2', padding: '24px 0' }}>
        <DownloadingComponent types={['season', 'episode']} />
        <MissingComponent />
      </div>
      <TVShowsComponentStyles>
        <div className="wrapper">
          <Skeleton active={true} loading={loading}>
            {data?.tvShows?.length === 0 && <Empty />}
            <div className="flex">
              {data?.tvShows?.map((tvShow) => (
                <div className="tvshow-card" key={tvShow.id}>
                  <TMDBCardComponent
                    type="tvshow"
                    result={tvShow}
                    inLibrary={true}
                  />
                </div>
              ))}
            </div>
          </Skeleton>
        </div>
      </TVShowsComponentStyles>
    </>
  );
}
