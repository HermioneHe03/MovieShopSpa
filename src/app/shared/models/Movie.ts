// Generated by https://quicktype.io
import { Cast } from 'src/app/shared/models/Cast';
import { Genre } from 'src/app/shared/models/Genre';
import { Trailer } from 'src/app/shared/models/Trailer';

export interface Movie {
    id:             number;
    title:          string;
    posterUrl:      string;
    backdropUrl:    string;
    rating:         number;
    overview:       string;
    tagline:        string;
    budget:         number;
    revenue:        number;
    imdbUrl:        string;
    tmdbUrl:        string;
    releasedate:    string;
    runTime:        number;
    price:          number;
    favoritesCount: number;
    casts:          Cast[];
    genres:         Genre[];
    reviews:        any[];
    trailers:       Trailer[];
}
