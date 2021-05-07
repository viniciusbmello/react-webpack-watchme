import { GenreResponseProps } from '../App';
import Button from './Button';

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
}

const SideBar: React.FC<SideBarProps> = ({
  genres,
  handleClickButton,
  selectedGenreId,
}: SideBarProps) => (
  <nav className="sidebar">
    <span>
      Watch<p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
);

export default SideBar;
