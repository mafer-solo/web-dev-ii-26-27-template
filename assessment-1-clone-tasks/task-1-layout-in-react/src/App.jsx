
import './App.css';

import logo from '../assets/logo.svg';

import allEncores from './assets/images/all-encores.jpg';
import articulation from './assets/images/articulation.jpg';
import blurred from './assets/images/blurred.jpg';
import encores2 from './assets/images/encores-2.jpg';
import eulogy from './assets/images/eulogy-for-evolution.jpg';
import profilePicture from './assets/images/profile_picture.jpg';

import facebookIcon from './assets/icons/facebook-icon.png';
import instagramIcon from './assets/icons/instagram-icon.svg';
import twitterIcon from './assets/icons/twitter-icon.svg';

// Show the social media icons
function SocialIcons() {
  return (
    <div className="social-icons">
      <img src={facebookIcon} alt="Facebook" />
      <img src={instagramIcon} alt="Instagram" />
      <img
        className="twitter-icon"
        src={twitterIcon}
        alt="Twitter"
      />
    </div>
  );
}

// Create the header and navigation
function Header() {
  return (
    <header className="site-header">
      <img
        className="site-logo"
        src={logo}
        alt="Erased Tapes Records logo"
      />

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  );
}

// Display the article text
function Article() {
  return (
    <article id="blog" className="article">
      <h1>Erased Tapes:</h1>
      <h2 className="subtitle">Exploring the Sonic Frontier</h2>

      <p className="intro">
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Mi eu scelerisque turpis posuere tempor? Leo condimentum
        himenaeos molestie elit; maximus iaculis proin nulla.
        Ullamcorper nibh cras conubia suscipit dapibus sagittis,
        facilisi habitant vivamus. Etiam fusce posuere himenaeos
        ipsum commodo sollicitudin himenaeos nec.
      </p>

      <div className="article-columns">
        <h2>Heading</h2>

        <p>
          Montes ridiculus mus tellus nunc vulputate. Cras facilisi
          congue et facilisis porttitor litora etiam praesent
          porttitor. Sollicitudin cubilia scelerisque diam taciti
          lacus. Dapibus penatibus augue dapibus sagittis; rhoncus
          accumsan. Accumsan urna et, ultrices placerat justo rutrum.
          Tristique mattis ante cras accumsan convallis phasellus
          fermentum magna. Rhoncus curabitur pharetra proin ante
          nam adipiscing accumsan hac. Rutrum efficitur nullam
          integer ut ex id. Pulvinar vel at vestibulum vivamus
          sed nascetur eget.
        </p>

        <p>
          Laoreet volutpat hendrerit est aliquam; fusce quam tempor.
          Nisi interdum praesent pellentesque non non blandit
          cubilia et. Aptent maximus vehicula nullam odio tempor.
          Placerat dis facilisis potenti iaculis, primis vivamus
          nec at magnis. Aadipiscing curabitur vestibulum imperdiet
          dolor primis. Inceptos penatibus inceptos eu habitasse
          aptent vehicula platea litora congue. Ultricies mauris
          fringilla rhoncus pharetra iaculis vitae. Venenatis
          himenaeos eget molestie dignissim consectetur tellus
          litora. Porta a iaculis mi primis rhoncus.
        </p>

        <p>
          Curae habitasse elementum amet nunc, natoque at. Tortor
          vel blandit sociosqu auctor aliquam maximus porta feugiat.
          Eros phasellus platea mauris condimentum natoque hendrerit
          tellus id. Ex imperdiet vitae maximus adipiscing neque
          quam tempor orci. Lobortis porta lacinia cubilia tellus
          vel placerat; facilisis mi euismod. Neque eu orci nulla
          penatibus elit nec.
        </p>

        <p>
          Parturient habitasse facilisis purus donec, enim platea
          maximus. Primis class varius augue sed class ultricies.
          Posuere curabitur tristique penatibus montes hac ac
          imperdiet. Risus per sociosqu, cursus leo condimentum
          ac fringilla. Nibh curabitur eros tempus nec; nam curae
          hendrerit. Mattis placerat maximus mollis praesent,
          eros adipiscing dui.
        </p>

        <h2>Heading</h2>

        <p>
          Habitasse ornare fames facilisis montes pulvinar habitasse
          fringilla. Risus porta cursus duis vivamus quam adipiscing
          nec. Ante at posuere eget aptent natoque vivamus ante.
          Aenean enim dapibus viverra sem efficitur. Felis nam
          semper integer justo in. Facilisi augue urna torquent
          lacinia facilisi inceptos. Natoque varius feugiat massa
          scelerisque natoque, cras tempor inceptos.
        </p>

        <p>
          Amet ac leo, imperdiet hac litora auctor. Suscipit congue
          duis sociosqu auctor euismod vivamus urna diam. Nunc enim
          himenaeos litora facilisi, tincidunt torquent. Eros sapien
          laoreet duis, volutpat rutrum pulvinar. Natoque semper
          sapien aptent quis habitant aliquam condimentum luctus.
          Tempus pellentesque congue varius dapibus pharetra.
          Fermentum diam auctor bibendum rhoncus leo. Vestibulum
          tincidunt fames convallis ligula semper porttitor.
        </p>

        <p>
          Magnis maximus morbi, litora accumsan vivamus facilisi
          etiam pharetra. Platea congue orci sagittis purus
          scelerisque. Velit taciti maecenas praesent nam lobortis
          metus vehicula habitasse porttitor. Porta gravida placerat
          lobortis litora elit feugiat venenatis. Cras magna
          himenaeos consequat aliquet ad nec pharetra. Ligula
          eleifend imperdiet aptent primis placerat. Nec magnis
          tempus vulputate ipsum ad sagittis mus.
        </p>

        <h2>Heading</h2>

        <p>
          Vulputate nullam tempus montes eu tellus integer adipiscing
          pulvinar. Pharetra eu luctus id a potenti. Pulvinar
          egestas conubia ante varius lobortis iaculis metus.
          Netus sem imperdiet hendrerit vehicula netus est gravida
          tortor. Nunc ridiculus per montes nulla, facilisis
          lacinia per leo. Hendrerit scelerisque nulla in
          suspendisse sit tortor sagittis. Suscipit dictumst ipsum
          laoreet cras egestas suscipit orci. Per molestie felis
          erat platea blandit commodo.
        </p>

        <p>
          Ad venenatis sapien habitant posuere donec porttitor
          vel nisi. Sodales laoreet donec diam rhoncus lectus
          euismod orci torquent curae. Fames rhoncus torquent
          sed convallis; potenti cras. Dictumst arcu libero nulla
          malesuada mi ridiculus platea. Interdum ullamcorper
          fringilla himenaeos mollis; in arcu pharetra massa.
          Nunc mauris taciti montes sapien molestie orci ac quis.
        </p>
      </div>
    </article>
  );
}

// Show the album images
function Gallery() {
  return (
    <section id="artists" className="image-gallery">
      <img
        className="gallery-featured"
        src={blurred}
        alt="Blurred album artwork"
      />

      <div className="gallery-small">
        <img src={allEncores} alt="All Encores album" />
        <img src={articulation} alt="Articulation album" />
        <img src={encores2} alt="Encores 2 album" />
        <img src={eulogy} alt="Eulogy for Evolution album" />
      </div>
    </section>
  );
}

// Display the author details
function Author() {
  return (
    <section id="story" className="author-section">
      <div className="author-info">
        <h2>The Author</h2>

        <p>
          Sapien leo scelerisque per convallis torquent nunc.
          Lobortis eleifend a nam sit turpis nostra. Tempus
          suspendisse libero curae faucibus lobortis litora
          bibendum praesent! Eget quam magna, diam commodo
          interdum sapien magnis.
        </p>

        <p className="author-copyright">
          Copyright © 2023 Erased Disks Ltd.
        </p>
      </div>

      <img
        className="author-photo"
        src={profilePicture}
        alt="Author profile"
      />

      <SocialIcons />
    </section>
  );
}

// Display the reader comments
function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>

      <div className="comment">
        <h3>soundseeker92</h3>
        <p>
          This article beautifully captures the essence of
          experimental sound. Erased Tapes is truly pushing
          boundaries. Makes me want to revisit Nils Frahm's
          early work. I wonder what you think about their
          older stuff?
        </p>
      </div>

      <div className="comment">
        <h3>Ted Baker</h3>
        <p>
          I've been following the label for years—so glad
          someone's finally writing about their impact.
        </p>
      </div>

      <div className="comment">
        <h3>Queen_of_noise</h3>
        <p>
          I discovered Erased Tapes through Ólafur Arnalds—this
          article brought back memories and be and my friends
          listening together. A bit too poetic for my taste,
          but still compelling.
        </p>
      </div>
    </section>
  );
}

// Display the footer
function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>

      <p>Copyright © 2023 All rights reserved.</p>

      <SocialIcons />
    </footer>
  );
}

// Display all the website sections
function App() {
  return (
    <div className="page-container">
      <Header />

      <main className="main-content">
        <Article />
        <Gallery />
        <Author />
        <Comments />
      </main>

      <Footer />
    </div>
  );
}

export default App;
