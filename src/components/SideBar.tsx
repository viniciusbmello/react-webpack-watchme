import { useContext } from 'react';
import { Genre, MoviesContext } from '../contexts/MoviesContext';
import Button from './Button';

import '../styles/sidebar.scss';

const SideBar: React.FC = () => {
  const context = useContext(MoviesContext);
  const { genres, selectedGenre, handleSelectGenre } = context;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: Genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            name={genre.name}
            onClick={() => handleSelectGenre(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
