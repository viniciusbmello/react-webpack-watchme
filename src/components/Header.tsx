import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';

import '../styles/header.scss';

const Header: React.FC = () => {
  const context = useContext(MoviesContext);
  const { selectedGenre } = context;

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};

export default Header;
