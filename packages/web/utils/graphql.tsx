import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
};



export enum DownloadableMediaState {
  Missing = 'MISSING',
  Downloading = 'DOWNLOADING',
  Downloaded = 'DOWNLOADED',
  Processed = 'PROCESSED'
}

export type DownloadingMedia = {
   __typename?: 'DownloadingMedia';
  title: Scalars['String'];
  resourceId: Scalars['Float'];
  resourceType: Scalars['String'];
};

export type EnrichedMovie = {
   __typename?: 'EnrichedMovie';
  id: Scalars['Float'];
  tmdbId: Scalars['Float'];
  title: Scalars['String'];
  state: DownloadableMediaState;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  posterPath?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  releaseDate: Scalars['String'];
};

export type EnrichedTvEpisode = {
   __typename?: 'EnrichedTVEpisode';
  id: Scalars['Float'];
  episodeNumber: Scalars['Float'];
  seasonNumber: Scalars['Float'];
  state: DownloadableMediaState;
  tvShow: TvShow;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  voteAverage: Scalars['Float'];
  releaseDate: Scalars['String'];
};

export type EnrichedTvShow = {
   __typename?: 'EnrichedTVShow';
  id: Scalars['Float'];
  tmdbId: Scalars['Float'];
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  posterPath?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  releaseDate: Scalars['String'];
};

export type GraphQlCommonResponse = {
   __typename?: 'GraphQLCommonResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Movie = {
   __typename?: 'Movie';
  id: Scalars['Float'];
  tmdbId: Scalars['Float'];
  title: Scalars['String'];
  state: DownloadableMediaState;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
   __typename?: 'Mutation';
  updateParam: GraphQlCommonResponse;
  startScanLibraryJob: GraphQlCommonResponse;
  startFindNewEpisodesJob: GraphQlCommonResponse;
  startDownloadMissingJob: GraphQlCommonResponse;
  trackMovie: Movie;
  removeMovie: GraphQlCommonResponse;
  trackTVShow: TvShow;
  removeTVShow: GraphQlCommonResponse;
};


export type MutationUpdateParamArgs = {
  value: Scalars['String'];
  key: ParameterKey;
};


export type MutationTrackMovieArgs = {
  tmdbId: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationRemoveMovieArgs = {
  tmdbId: Scalars['Int'];
};


export type MutationTrackTvShowArgs = {
  seasonNumbers: Array<Scalars['Int']>;
  tmdbId: Scalars['Int'];
};


export type MutationRemoveTvShowArgs = {
  tmdbId: Scalars['Int'];
};

export enum ParameterKey {
  Region = 'REGION',
  Language = 'LANGUAGE',
  TmdbApiKey = 'TMDB_API_KEY',
  JackettApiKey = 'JACKETT_API_KEY',
  MaxMovieDownloadSize = 'MAX_MOVIE_DOWNLOAD_SIZE',
  MaxTvshowEpisodeDownloadSize = 'MAX_TVSHOW_EPISODE_DOWNLOAD_SIZE',
  PreferredTags = 'PREFERRED_TAGS'
}

export type ParamsHash = {
   __typename?: 'ParamsHash';
  region: Scalars['String'];
  language: Scalars['String'];
  tmdb_api_key: Scalars['String'];
  jackett_api_key: Scalars['String'];
  max_movie_download_size: Scalars['String'];
  max_tvshow_episode_download_size: Scalars['String'];
  preferred_tags: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  getParams: ParamsHash;
  search: TmdbSearchResults;
  getPopular: TmdbSearchResults;
  getTVShowSeasons: Array<TmdbFormattedTvSeason>;
  getTorrentStatus: TorrentStatus;
  getDownloadingMedias: Array<DownloadingMedia>;
  getMovies: Array<EnrichedMovie>;
  getTVShows: Array<EnrichedTvShow>;
  getMissingTVEpisodes: Array<EnrichedTvEpisode>;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
};


export type QueryGetTvShowSeasonsArgs = {
  tvShowTMDBId: Scalars['Int'];
};


export type QueryGetTorrentStatusArgs = {
  resourceType: Scalars['String'];
  resourceId: Scalars['Int'];
};

export type TmdbFormattedTvEpisode = {
   __typename?: 'TMDBFormattedTVEpisode';
  id: Scalars['Float'];
  episodeNumber: Scalars['Float'];
  name: Scalars['String'];
  overview: Scalars['String'];
  seasonNumber: Scalars['Float'];
  voteCount?: Maybe<Scalars['Float']>;
  voteAverage?: Maybe<Scalars['Float']>;
  airDate?: Maybe<Scalars['String']>;
  stillPath?: Maybe<Scalars['String']>;
};

export type TmdbFormattedTvSeason = {
   __typename?: 'TMDBFormattedTVSeason';
  id: Scalars['Float'];
  name: Scalars['String'];
  seasonNumber: Scalars['Float'];
  inLibrary: Scalars['Boolean'];
  overview?: Maybe<Scalars['String']>;
  airDate?: Maybe<Scalars['String']>;
  episodeCount?: Maybe<Scalars['Float']>;
  posterPath?: Maybe<Scalars['String']>;
  episodes?: Maybe<Array<TmdbFormattedTvEpisode>>;
};

export type TmdbSearchResult = {
   __typename?: 'TMDBSearchResult';
  id: Scalars['Float'];
  tmdbId: Scalars['Float'];
  title: Scalars['String'];
  voteAverage: Scalars['Float'];
  posterPath?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
};

export type TmdbSearchResults = {
   __typename?: 'TMDBSearchResults';
  movies: Array<TmdbSearchResult>;
  tvShows: Array<TmdbSearchResult>;
};

export type TorrentStatus = {
   __typename?: 'TorrentStatus';
  id: Scalars['Int'];
  percentDone: Scalars['Float'];
  rateDownload: Scalars['Int'];
  rateUpload: Scalars['Int'];
  uploadRatio: Scalars['Float'];
  uploadedEver: Scalars['BigInt'];
  totalSize: Scalars['BigInt'];
  status: Scalars['Int'];
};

export type TvShow = {
   __typename?: 'TVShow';
  id: Scalars['Float'];
  tmdbId: Scalars['Float'];
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type StartScanLibraryMutationVariables = {};


export type StartScanLibraryMutation = (
  { __typename?: 'Mutation' }
  & { result: (
    { __typename?: 'GraphQLCommonResponse' }
    & Pick<GraphQlCommonResponse, 'success' | 'message'>
  ) }
);

export type StartFindNewEpisodesMutationVariables = {};


export type StartFindNewEpisodesMutation = (
  { __typename?: 'Mutation' }
  & { result: (
    { __typename?: 'GraphQLCommonResponse' }
    & Pick<GraphQlCommonResponse, 'success' | 'message'>
  ) }
);

export type StartDownloadMissingMutationVariables = {};


export type StartDownloadMissingMutation = (
  { __typename?: 'Mutation' }
  & { result: (
    { __typename?: 'GraphQLCommonResponse' }
    & Pick<GraphQlCommonResponse, 'success' | 'message'>
  ) }
);

export type RemoveMovieMutationVariables = {
  tmdbId: Scalars['Int'];
};


export type RemoveMovieMutation = (
  { __typename?: 'Mutation' }
  & { result: (
    { __typename?: 'GraphQLCommonResponse' }
    & Pick<GraphQlCommonResponse, 'success' | 'message'>
  ) }
);

export type RemoveTvShowMutationVariables = {
  tmdbId: Scalars['Int'];
};


export type RemoveTvShowMutation = (
  { __typename?: 'Mutation' }
  & { result: (
    { __typename?: 'GraphQLCommonResponse' }
    & Pick<GraphQlCommonResponse, 'success' | 'message'>
  ) }
);

export type TrackMovieMutationVariables = {
  title: Scalars['String'];
  tmdbId: Scalars['Int'];
};


export type TrackMovieMutation = (
  { __typename?: 'Mutation' }
  & { movie: (
    { __typename?: 'Movie' }
    & Pick<Movie, 'id'>
  ) }
);

export type TrackTvShowMutationVariables = {
  tmdbId: Scalars['Int'];
  seasonNumbers: Array<Scalars['Int']>;
};


export type TrackTvShowMutation = (
  { __typename?: 'Mutation' }
  & { tvShow: (
    { __typename?: 'TVShow' }
    & Pick<TvShow, 'id'>
  ) }
);

export type UpdateParamMutationVariables = {
  key: ParameterKey;
  value: Scalars['String'];
};


export type UpdateParamMutation = (
  { __typename?: 'Mutation' }
  & { result: (
    { __typename?: 'GraphQLCommonResponse' }
    & Pick<GraphQlCommonResponse, 'success' | 'message'>
  ) }
);

export type GetDownloadingQueryVariables = {};


export type GetDownloadingQuery = (
  { __typename?: 'Query' }
  & { rows: Array<(
    { __typename?: 'DownloadingMedia' }
    & Pick<DownloadingMedia, 'title' | 'resourceId' | 'resourceType'>
  )> }
);

export type GetLibraryMoviesQueryVariables = {};


export type GetLibraryMoviesQuery = (
  { __typename?: 'Query' }
  & { movies: Array<(
    { __typename?: 'EnrichedMovie' }
    & Pick<EnrichedMovie, 'id' | 'tmdbId' | 'title' | 'state' | 'posterPath' | 'voteAverage' | 'releaseDate' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetLibraryTvShowsQueryVariables = {};


export type GetLibraryTvShowsQuery = (
  { __typename?: 'Query' }
  & { tvShows: Array<(
    { __typename?: 'EnrichedTVShow' }
    & Pick<EnrichedTvShow, 'id' | 'tmdbId' | 'title' | 'posterPath' | 'voteAverage' | 'releaseDate' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetMissingQueryVariables = {};


export type GetMissingQuery = (
  { __typename?: 'Query' }
  & { tvEpisodes: Array<(
    { __typename?: 'EnrichedTVEpisode' }
    & Pick<EnrichedTvEpisode, 'id' | 'seasonNumber' | 'episodeNumber' | 'releaseDate'>
    & { tvShow: (
      { __typename?: 'TVShow' }
      & Pick<TvShow, 'id' | 'title'>
    ) }
  )> }
);

export type GetParamsQueryVariables = {};


export type GetParamsQuery = (
  { __typename?: 'Query' }
  & { params: (
    { __typename?: 'ParamsHash' }
    & Pick<ParamsHash, 'region' | 'language' | 'tmdb_api_key' | 'jackett_api_key' | 'max_movie_download_size' | 'max_tvshow_episode_download_size' | 'preferred_tags'>
  ) }
);

export type GetPopularQueryVariables = {};


export type GetPopularQuery = (
  { __typename?: 'Query' }
  & { results: (
    { __typename?: 'TMDBSearchResults' }
    & { movies: Array<(
      { __typename?: 'TMDBSearchResult' }
      & Pick<TmdbSearchResult, 'id' | 'tmdbId' | 'title' | 'releaseDate' | 'posterPath' | 'voteAverage'>
    )>, tvShows: Array<(
      { __typename?: 'TMDBSearchResult' }
      & Pick<TmdbSearchResult, 'id' | 'tmdbId' | 'title' | 'releaseDate' | 'posterPath' | 'voteAverage'>
    )> }
  ) }
);

export type GetTorrentStatusQueryVariables = {
  resourceId: Scalars['Int'];
  resourceType: Scalars['String'];
};


export type GetTorrentStatusQuery = (
  { __typename?: 'Query' }
  & { torrent: (
    { __typename?: 'TorrentStatus' }
    & Pick<TorrentStatus, 'id' | 'percentDone' | 'rateDownload' | 'rateUpload' | 'uploadRatio' | 'uploadedEver' | 'totalSize' | 'status'>
  ) }
);

export type GetTvShowSeasonsQueryVariables = {
  tvShowTMDBId: Scalars['Int'];
};


export type GetTvShowSeasonsQuery = (
  { __typename?: 'Query' }
  & { seasons: Array<(
    { __typename?: 'TMDBFormattedTVSeason' }
    & Pick<TmdbFormattedTvSeason, 'id' | 'name' | 'seasonNumber' | 'episodeCount' | 'overview' | 'posterPath' | 'airDate' | 'inLibrary'>
  )> }
);

export type SearchQueryVariables = {
  query: Scalars['String'];
};


export type SearchQuery = (
  { __typename?: 'Query' }
  & { results: (
    { __typename?: 'TMDBSearchResults' }
    & { movies: Array<(
      { __typename?: 'TMDBSearchResult' }
      & Pick<TmdbSearchResult, 'id' | 'tmdbId' | 'title' | 'releaseDate' | 'posterPath' | 'voteAverage'>
    )>, tvShows: Array<(
      { __typename?: 'TMDBSearchResult' }
      & Pick<TmdbSearchResult, 'id' | 'tmdbId' | 'title' | 'releaseDate' | 'posterPath' | 'voteAverage'>
    )> }
  ) }
);


export const StartScanLibraryDocument = gql`
    mutation startScanLibrary {
  result: startScanLibraryJob {
    success
    message
  }
}
    `;
export type StartScanLibraryMutationFn = ApolloReactCommon.MutationFunction<StartScanLibraryMutation, StartScanLibraryMutationVariables>;

/**
 * __useStartScanLibraryMutation__
 *
 * To run a mutation, you first call `useStartScanLibraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartScanLibraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startScanLibraryMutation, { data, loading, error }] = useStartScanLibraryMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartScanLibraryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartScanLibraryMutation, StartScanLibraryMutationVariables>) {
        return ApolloReactHooks.useMutation<StartScanLibraryMutation, StartScanLibraryMutationVariables>(StartScanLibraryDocument, baseOptions);
      }
export type StartScanLibraryMutationHookResult = ReturnType<typeof useStartScanLibraryMutation>;
export type StartScanLibraryMutationResult = ApolloReactCommon.MutationResult<StartScanLibraryMutation>;
export type StartScanLibraryMutationOptions = ApolloReactCommon.BaseMutationOptions<StartScanLibraryMutation, StartScanLibraryMutationVariables>;
export const StartFindNewEpisodesDocument = gql`
    mutation startFindNewEpisodes {
  result: startFindNewEpisodesJob {
    success
    message
  }
}
    `;
export type StartFindNewEpisodesMutationFn = ApolloReactCommon.MutationFunction<StartFindNewEpisodesMutation, StartFindNewEpisodesMutationVariables>;

/**
 * __useStartFindNewEpisodesMutation__
 *
 * To run a mutation, you first call `useStartFindNewEpisodesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartFindNewEpisodesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startFindNewEpisodesMutation, { data, loading, error }] = useStartFindNewEpisodesMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartFindNewEpisodesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartFindNewEpisodesMutation, StartFindNewEpisodesMutationVariables>) {
        return ApolloReactHooks.useMutation<StartFindNewEpisodesMutation, StartFindNewEpisodesMutationVariables>(StartFindNewEpisodesDocument, baseOptions);
      }
export type StartFindNewEpisodesMutationHookResult = ReturnType<typeof useStartFindNewEpisodesMutation>;
export type StartFindNewEpisodesMutationResult = ApolloReactCommon.MutationResult<StartFindNewEpisodesMutation>;
export type StartFindNewEpisodesMutationOptions = ApolloReactCommon.BaseMutationOptions<StartFindNewEpisodesMutation, StartFindNewEpisodesMutationVariables>;
export const StartDownloadMissingDocument = gql`
    mutation startDownloadMissing {
  result: startDownloadMissingJob {
    success
    message
  }
}
    `;
export type StartDownloadMissingMutationFn = ApolloReactCommon.MutationFunction<StartDownloadMissingMutation, StartDownloadMissingMutationVariables>;

/**
 * __useStartDownloadMissingMutation__
 *
 * To run a mutation, you first call `useStartDownloadMissingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartDownloadMissingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startDownloadMissingMutation, { data, loading, error }] = useStartDownloadMissingMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartDownloadMissingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartDownloadMissingMutation, StartDownloadMissingMutationVariables>) {
        return ApolloReactHooks.useMutation<StartDownloadMissingMutation, StartDownloadMissingMutationVariables>(StartDownloadMissingDocument, baseOptions);
      }
export type StartDownloadMissingMutationHookResult = ReturnType<typeof useStartDownloadMissingMutation>;
export type StartDownloadMissingMutationResult = ApolloReactCommon.MutationResult<StartDownloadMissingMutation>;
export type StartDownloadMissingMutationOptions = ApolloReactCommon.BaseMutationOptions<StartDownloadMissingMutation, StartDownloadMissingMutationVariables>;
export const RemoveMovieDocument = gql`
    mutation removeMovie($tmdbId: Int!) {
  result: removeMovie(tmdbId: $tmdbId) {
    success
    message
  }
}
    `;
export type RemoveMovieMutationFn = ApolloReactCommon.MutationFunction<RemoveMovieMutation, RemoveMovieMutationVariables>;

/**
 * __useRemoveMovieMutation__
 *
 * To run a mutation, you first call `useRemoveMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMovieMutation, { data, loading, error }] = useRemoveMovieMutation({
 *   variables: {
 *      tmdbId: // value for 'tmdbId'
 *   },
 * });
 */
export function useRemoveMovieMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveMovieMutation, RemoveMovieMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveMovieMutation, RemoveMovieMutationVariables>(RemoveMovieDocument, baseOptions);
      }
export type RemoveMovieMutationHookResult = ReturnType<typeof useRemoveMovieMutation>;
export type RemoveMovieMutationResult = ApolloReactCommon.MutationResult<RemoveMovieMutation>;
export type RemoveMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveMovieMutation, RemoveMovieMutationVariables>;
export const RemoveTvShowDocument = gql`
    mutation removeTVShow($tmdbId: Int!) {
  result: removeTVShow(tmdbId: $tmdbId) {
    success
    message
  }
}
    `;
export type RemoveTvShowMutationFn = ApolloReactCommon.MutationFunction<RemoveTvShowMutation, RemoveTvShowMutationVariables>;

/**
 * __useRemoveTvShowMutation__
 *
 * To run a mutation, you first call `useRemoveTvShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTvShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTvShowMutation, { data, loading, error }] = useRemoveTvShowMutation({
 *   variables: {
 *      tmdbId: // value for 'tmdbId'
 *   },
 * });
 */
export function useRemoveTvShowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTvShowMutation, RemoveTvShowMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTvShowMutation, RemoveTvShowMutationVariables>(RemoveTvShowDocument, baseOptions);
      }
export type RemoveTvShowMutationHookResult = ReturnType<typeof useRemoveTvShowMutation>;
export type RemoveTvShowMutationResult = ApolloReactCommon.MutationResult<RemoveTvShowMutation>;
export type RemoveTvShowMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveTvShowMutation, RemoveTvShowMutationVariables>;
export const TrackMovieDocument = gql`
    mutation trackMovie($title: String!, $tmdbId: Int!) {
  movie: trackMovie(title: $title, tmdbId: $tmdbId) {
    id
  }
}
    `;
export type TrackMovieMutationFn = ApolloReactCommon.MutationFunction<TrackMovieMutation, TrackMovieMutationVariables>;

/**
 * __useTrackMovieMutation__
 *
 * To run a mutation, you first call `useTrackMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrackMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trackMovieMutation, { data, loading, error }] = useTrackMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      tmdbId: // value for 'tmdbId'
 *   },
 * });
 */
export function useTrackMovieMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TrackMovieMutation, TrackMovieMutationVariables>) {
        return ApolloReactHooks.useMutation<TrackMovieMutation, TrackMovieMutationVariables>(TrackMovieDocument, baseOptions);
      }
export type TrackMovieMutationHookResult = ReturnType<typeof useTrackMovieMutation>;
export type TrackMovieMutationResult = ApolloReactCommon.MutationResult<TrackMovieMutation>;
export type TrackMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<TrackMovieMutation, TrackMovieMutationVariables>;
export const TrackTvShowDocument = gql`
    mutation trackTVShow($tmdbId: Int!, $seasonNumbers: [Int!]!) {
  tvShow: trackTVShow(tmdbId: $tmdbId, seasonNumbers: $seasonNumbers) {
    id
  }
}
    `;
export type TrackTvShowMutationFn = ApolloReactCommon.MutationFunction<TrackTvShowMutation, TrackTvShowMutationVariables>;

/**
 * __useTrackTvShowMutation__
 *
 * To run a mutation, you first call `useTrackTvShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrackTvShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trackTvShowMutation, { data, loading, error }] = useTrackTvShowMutation({
 *   variables: {
 *      tmdbId: // value for 'tmdbId'
 *      seasonNumbers: // value for 'seasonNumbers'
 *   },
 * });
 */
export function useTrackTvShowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TrackTvShowMutation, TrackTvShowMutationVariables>) {
        return ApolloReactHooks.useMutation<TrackTvShowMutation, TrackTvShowMutationVariables>(TrackTvShowDocument, baseOptions);
      }
export type TrackTvShowMutationHookResult = ReturnType<typeof useTrackTvShowMutation>;
export type TrackTvShowMutationResult = ApolloReactCommon.MutationResult<TrackTvShowMutation>;
export type TrackTvShowMutationOptions = ApolloReactCommon.BaseMutationOptions<TrackTvShowMutation, TrackTvShowMutationVariables>;
export const UpdateParamDocument = gql`
    mutation updateParam($key: ParameterKey!, $value: String!) {
  result: updateParam(key: $key, value: $value) {
    success
    message
  }
}
    `;
export type UpdateParamMutationFn = ApolloReactCommon.MutationFunction<UpdateParamMutation, UpdateParamMutationVariables>;

/**
 * __useUpdateParamMutation__
 *
 * To run a mutation, you first call `useUpdateParamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateParamMutation, { data, loading, error }] = useUpdateParamMutation({
 *   variables: {
 *      key: // value for 'key'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useUpdateParamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateParamMutation, UpdateParamMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateParamMutation, UpdateParamMutationVariables>(UpdateParamDocument, baseOptions);
      }
export type UpdateParamMutationHookResult = ReturnType<typeof useUpdateParamMutation>;
export type UpdateParamMutationResult = ApolloReactCommon.MutationResult<UpdateParamMutation>;
export type UpdateParamMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateParamMutation, UpdateParamMutationVariables>;
export const GetDownloadingDocument = gql`
    query getDownloading {
  rows: getDownloadingMedias {
    title
    resourceId
    resourceType
  }
}
    `;

/**
 * __useGetDownloadingQuery__
 *
 * To run a query within a React component, call `useGetDownloadingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDownloadingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDownloadingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDownloadingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDownloadingQuery, GetDownloadingQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDownloadingQuery, GetDownloadingQueryVariables>(GetDownloadingDocument, baseOptions);
      }
export function useGetDownloadingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDownloadingQuery, GetDownloadingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDownloadingQuery, GetDownloadingQueryVariables>(GetDownloadingDocument, baseOptions);
        }
export type GetDownloadingQueryHookResult = ReturnType<typeof useGetDownloadingQuery>;
export type GetDownloadingLazyQueryHookResult = ReturnType<typeof useGetDownloadingLazyQuery>;
export type GetDownloadingQueryResult = ApolloReactCommon.QueryResult<GetDownloadingQuery, GetDownloadingQueryVariables>;
export const GetLibraryMoviesDocument = gql`
    query getLibraryMovies {
  movies: getMovies {
    id
    tmdbId
    title
    state
    posterPath
    voteAverage
    releaseDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetLibraryMoviesQuery__
 *
 * To run a query within a React component, call `useGetLibraryMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLibraryMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLibraryMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLibraryMoviesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLibraryMoviesQuery, GetLibraryMoviesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLibraryMoviesQuery, GetLibraryMoviesQueryVariables>(GetLibraryMoviesDocument, baseOptions);
      }
export function useGetLibraryMoviesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLibraryMoviesQuery, GetLibraryMoviesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLibraryMoviesQuery, GetLibraryMoviesQueryVariables>(GetLibraryMoviesDocument, baseOptions);
        }
export type GetLibraryMoviesQueryHookResult = ReturnType<typeof useGetLibraryMoviesQuery>;
export type GetLibraryMoviesLazyQueryHookResult = ReturnType<typeof useGetLibraryMoviesLazyQuery>;
export type GetLibraryMoviesQueryResult = ApolloReactCommon.QueryResult<GetLibraryMoviesQuery, GetLibraryMoviesQueryVariables>;
export const GetLibraryTvShowsDocument = gql`
    query getLibraryTVShows {
  tvShows: getTVShows {
    id
    tmdbId
    title
    posterPath
    voteAverage
    releaseDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetLibraryTvShowsQuery__
 *
 * To run a query within a React component, call `useGetLibraryTvShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLibraryTvShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLibraryTvShowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLibraryTvShowsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLibraryTvShowsQuery, GetLibraryTvShowsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLibraryTvShowsQuery, GetLibraryTvShowsQueryVariables>(GetLibraryTvShowsDocument, baseOptions);
      }
export function useGetLibraryTvShowsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLibraryTvShowsQuery, GetLibraryTvShowsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLibraryTvShowsQuery, GetLibraryTvShowsQueryVariables>(GetLibraryTvShowsDocument, baseOptions);
        }
export type GetLibraryTvShowsQueryHookResult = ReturnType<typeof useGetLibraryTvShowsQuery>;
export type GetLibraryTvShowsLazyQueryHookResult = ReturnType<typeof useGetLibraryTvShowsLazyQuery>;
export type GetLibraryTvShowsQueryResult = ApolloReactCommon.QueryResult<GetLibraryTvShowsQuery, GetLibraryTvShowsQueryVariables>;
export const GetMissingDocument = gql`
    query getMissing {
  tvEpisodes: getMissingTVEpisodes {
    id
    seasonNumber
    episodeNumber
    releaseDate
    tvShow {
      id
      title
    }
  }
}
    `;

/**
 * __useGetMissingQuery__
 *
 * To run a query within a React component, call `useGetMissingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMissingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMissingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMissingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMissingQuery, GetMissingQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMissingQuery, GetMissingQueryVariables>(GetMissingDocument, baseOptions);
      }
export function useGetMissingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMissingQuery, GetMissingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMissingQuery, GetMissingQueryVariables>(GetMissingDocument, baseOptions);
        }
export type GetMissingQueryHookResult = ReturnType<typeof useGetMissingQuery>;
export type GetMissingLazyQueryHookResult = ReturnType<typeof useGetMissingLazyQuery>;
export type GetMissingQueryResult = ApolloReactCommon.QueryResult<GetMissingQuery, GetMissingQueryVariables>;
export const GetParamsDocument = gql`
    query getParams {
  params: getParams {
    region
    language
    tmdb_api_key
    jackett_api_key
    max_movie_download_size
    max_tvshow_episode_download_size
    preferred_tags
  }
}
    `;

/**
 * __useGetParamsQuery__
 *
 * To run a query within a React component, call `useGetParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetParamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetParamsQuery, GetParamsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetParamsQuery, GetParamsQueryVariables>(GetParamsDocument, baseOptions);
      }
export function useGetParamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetParamsQuery, GetParamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetParamsQuery, GetParamsQueryVariables>(GetParamsDocument, baseOptions);
        }
export type GetParamsQueryHookResult = ReturnType<typeof useGetParamsQuery>;
export type GetParamsLazyQueryHookResult = ReturnType<typeof useGetParamsLazyQuery>;
export type GetParamsQueryResult = ApolloReactCommon.QueryResult<GetParamsQuery, GetParamsQueryVariables>;
export const GetPopularDocument = gql`
    query getPopular {
  results: getPopular {
    movies {
      id
      tmdbId
      title
      releaseDate
      posterPath
      voteAverage
    }
    tvShows {
      id
      tmdbId
      title
      releaseDate
      posterPath
      voteAverage
    }
  }
}
    `;

/**
 * __useGetPopularQuery__
 *
 * To run a query within a React component, call `useGetPopularQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPopularQuery, GetPopularQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPopularQuery, GetPopularQueryVariables>(GetPopularDocument, baseOptions);
      }
export function useGetPopularLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPopularQuery, GetPopularQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPopularQuery, GetPopularQueryVariables>(GetPopularDocument, baseOptions);
        }
export type GetPopularQueryHookResult = ReturnType<typeof useGetPopularQuery>;
export type GetPopularLazyQueryHookResult = ReturnType<typeof useGetPopularLazyQuery>;
export type GetPopularQueryResult = ApolloReactCommon.QueryResult<GetPopularQuery, GetPopularQueryVariables>;
export const GetTorrentStatusDocument = gql`
    query getTorrentStatus($resourceId: Int!, $resourceType: String!) {
  torrent: getTorrentStatus(resourceId: $resourceId, resourceType: $resourceType) {
    id
    percentDone
    rateDownload
    rateUpload
    uploadRatio
    uploadedEver
    totalSize
    status
  }
}
    `;

/**
 * __useGetTorrentStatusQuery__
 *
 * To run a query within a React component, call `useGetTorrentStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTorrentStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTorrentStatusQuery({
 *   variables: {
 *      resourceId: // value for 'resourceId'
 *      resourceType: // value for 'resourceType'
 *   },
 * });
 */
export function useGetTorrentStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTorrentStatusQuery, GetTorrentStatusQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTorrentStatusQuery, GetTorrentStatusQueryVariables>(GetTorrentStatusDocument, baseOptions);
      }
export function useGetTorrentStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTorrentStatusQuery, GetTorrentStatusQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTorrentStatusQuery, GetTorrentStatusQueryVariables>(GetTorrentStatusDocument, baseOptions);
        }
export type GetTorrentStatusQueryHookResult = ReturnType<typeof useGetTorrentStatusQuery>;
export type GetTorrentStatusLazyQueryHookResult = ReturnType<typeof useGetTorrentStatusLazyQuery>;
export type GetTorrentStatusQueryResult = ApolloReactCommon.QueryResult<GetTorrentStatusQuery, GetTorrentStatusQueryVariables>;
export const GetTvShowSeasonsDocument = gql`
    query getTVShowSeasons($tvShowTMDBId: Int!) {
  seasons: getTVShowSeasons(tvShowTMDBId: $tvShowTMDBId) {
    id
    name
    seasonNumber
    episodeCount
    overview
    posterPath
    airDate
    inLibrary
  }
}
    `;

/**
 * __useGetTvShowSeasonsQuery__
 *
 * To run a query within a React component, call `useGetTvShowSeasonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTvShowSeasonsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTvShowSeasonsQuery({
 *   variables: {
 *      tvShowTMDBId: // value for 'tvShowTMDBId'
 *   },
 * });
 */
export function useGetTvShowSeasonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTvShowSeasonsQuery, GetTvShowSeasonsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTvShowSeasonsQuery, GetTvShowSeasonsQueryVariables>(GetTvShowSeasonsDocument, baseOptions);
      }
export function useGetTvShowSeasonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTvShowSeasonsQuery, GetTvShowSeasonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTvShowSeasonsQuery, GetTvShowSeasonsQueryVariables>(GetTvShowSeasonsDocument, baseOptions);
        }
export type GetTvShowSeasonsQueryHookResult = ReturnType<typeof useGetTvShowSeasonsQuery>;
export type GetTvShowSeasonsLazyQueryHookResult = ReturnType<typeof useGetTvShowSeasonsLazyQuery>;
export type GetTvShowSeasonsQueryResult = ApolloReactCommon.QueryResult<GetTvShowSeasonsQuery, GetTvShowSeasonsQueryVariables>;
export const SearchDocument = gql`
    query search($query: String!) {
  results: search(query: $query) {
    movies {
      id
      tmdbId
      title
      releaseDate
      posterPath
      voteAverage
    }
    tvShows {
      id
      tmdbId
      title
      releaseDate
      posterPath
      voteAverage
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;