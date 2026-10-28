
import './App.css';

// Import the images used for each movie
import hookImage from './images/hook.jpg';
import barbieImage from './images/barbie.jpg';
import hiddenFiguresImage from './images/hidden-figures.jpg';
import laLaLandImage from './images/la-la-land.jpg';
import rogerRabbitImage from './images/who-framed-roger-rabbit.jpg';
import palmSpringsImage from './images/palm-springs.jpg';

// Store the movie details in an array to display them on the website
const movies = [
  {
    id: 1,
    title: 'Hook (1991)',
    image: hookImage,
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.'
  },
  {
    id: 2,
    title: 'Barbie (2023)',
    image: barbieImage,
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!'
  },
  {
    id: 3,
    title: 'Hidden Figures (2016)',
    image: hiddenFiguresImage,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers."
  },
  {
    id: 4,
    title: 'La La Land (2016)',
    image: laLaLandImage,
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!'
  },
  {
    id: 5,
    title: 'Who Framed Roger Rabbit (1988)',
    image: rogerRabbitImage,
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!'
  },
  {
    id: 6,
    title: 'Palm Springs (2020)',
    image: palmSpringsImage,
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.'
  }
];

// Create the header with the website logo, navigation links and search button
function Header() {
  return (
    <header className="site-header">
      <h1 className="logo">watch.it</h1>

      <nav className="navigation" aria-label="Movie categories">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        SEARCH
      </button>
    </header>
  );
}

// Create a reusable card to display each movie's image and information
function MovieCard({ movie, index }) {
  let cardClass = 'movie-card';

  // Use different layouts for the first movie and the last three movies
  if (index === 0) {
    cardClass += ' featured';
  } else if (index >= 3) {
    cardClass += ' horizontal';
  }

  return (
    <article className={cardClass}>
      <img
        className="movie-image"
        src={movie.image}
        alt={`${movie.title} movie poster`}
      />

      <div className="movie-content">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>

        <button className="watch-button" type="button">
          WATCH NOW
        </button>
      </div>
    </article>
  );
}

// Display the header and generate the movie cards using the map method
function App() {
  return (
    <>
      <Header />

      <main id="movies" className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            index={index}
          />
        ))}
      </main>
    </>
  );
}

export default App;

