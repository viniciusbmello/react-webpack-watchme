import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {
  const { title, poster, rating, runtime } = props;

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
