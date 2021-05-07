import { useContext } from 'react';
import MovieCard from './MovieCard';
import Header from './Header';
import { MoviesContext } from '../contexts/MoviesContext';

import '../styles/content.scss';

const Content: React.FC = () => {
  const context = useContext(MoviesContext);
  const { movies } = context;

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Content;
