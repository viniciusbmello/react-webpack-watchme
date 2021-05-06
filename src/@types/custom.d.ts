declare module '*.svg'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps{
  movies: MovieProps[]
  selectedGenre: GenreResponseProps
}

interface SideBarProps{
  genres: GenreResponseProps[]
  handleClickButton( id: number ): void
  selectedGenreId: number
}