import { GenreResponseProps } from '../App'
import '../styles/sidebar.scss'
import { Button } from './Button'

interface Props {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClick: (id: number) => void
}

export function SideBar({ genres, selectedGenreId, handleClick }: Props) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}