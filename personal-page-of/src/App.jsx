import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import widgetcolusinfondo from './assets/images/widgetcolusinfondo.png'
import columbinanobackground from './assets/images/columbinanobackground.png'
import columbinaicon from './assets/images/columbinaicon.jpg'
import gojo from './assets/images/gojo.jpg'
import gojopixelsinfondo from './assets/images/gojopixelsinfondo.png'
import gojowidgetsinfondo from './assets/images/gojowidgetsinfondo.png'
import iconabbey from './assets/images/iconabbey.jpg'
import lupa from './assets/images/lupa.png'
import nail from './assets/images/nail.jpg'
import nails from './assets/images/nails.jpg'
import nanasinfondo from './assets/images/nanasinfondo.png'
import felixsinfondo from './assets/images/felixsinfondo.png'
import widgetskz from './assets/images/widgetskz.png'
import hyunjinGifBlue from './assets/gifs/hyunjinGifBlue.gif'
import hanDramaticgif from './assets/gifs/hanDramaticgif.gif'
import hyunjinGifScene from './assets/gifs/hyunjinGifScene.gif'
import hyunjinIdk from './assets/gifs/hyunjinIdk.gif'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="PersonalPage.css" />
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
  {/* navbar */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Sofia does things</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link contact" aria-contact="true">Contact</a>
          </li>
        </ul>
      </div></div></nav>
  {/* search bar*/}
  <div className="container-search" id="NavbarSearchContainer">
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <img src={lupa} alt="Search Icon" className="search-icon" style={{width: 16, height: 16}} />
        </button>
      </form>
    </nav>
  </div>
  {/*Avatar and about me*/}
  <div className="container-about" id="aboutMe">
    <img src={iconabbey} alt="Avatar" className="avatar" />
    <div className="row">
      <div className="col">
        <h1>About Me ❤︎</h1>
        <p>안녕 !  My name is Sofia, and I'm a random 24 year old infp girl with a bunch of interests and hyper-fixations, based in Argentina. <br />Thank you for checking out my website!</p>
      </div>
    </div>
  </div>
  {/* Current Obsessions */}
  <div className="containerObsessionsAndWidgets" id="obsessionsAndWidgets"> 
    <div className="obsessions-row">
      <div className="Obsessions">
        <h3 id="Obsessions-title">✧ Current Obsessions ✧</h3>
        <div className="currentObsessions"> 
          <ul>
            <p id="obsessions-description">(They might change tomorrow lol)</p>
            <li>Stray Kids</li>
            <li>Genshin Impact</li>
            <li>Nail Art</li>
            <li>Drawing</li>
          </ul>
        </div>
      </div>
      {/* Stray kids images */}
      <div className="skzimg">
        <img src={widgetcolusinfondo} alt="Genshin Impact" className="genshin" />
        <img src={widgetskz} alt="Stray Kids 1" className="skz1" />
        <img src={felixsinfondo} alt="Stray Kids 2" className="skz2" />     
      </div>
    </div>
  </div> 
  {/* My favorites */}
  <div className="favorites">
    <h3 id="Favorites-title">♡ My Favorites ♡</h3>
    <div className="container-hobbies">
      <ul>
        <p id="hobbies">Hobbies:</p>
        <li>Videogames</li>
        <li>Music</li>
        <li>Anime</li>
        <li>Crafts</li>
        <li>Doll collecting (MH)</li>
        <li>Kpop</li>
        <li>Bass</li>
        <li>Language learning</li>
        <li>Drawing</li>
        <li>Coding</li>
        <li>Reading</li>
      </ul>
    </div>
    <div className="container-anime">
      <ul>
        <p id="animes">Animes:</p>
        <li>Nana</li>
        <li>The Apothecary Diaries</li>
        <li>Jojo's Bizarre Adventure</li>
        <li>Jujutsu Kaisen</li>
        <li>Spy x Family</li>
        <li>DAN DA DAN</li>
        <li>Dr. Stone</li>
        <li>Banana Fish</li>
        <li>The Ice Guy and His Cool<br /> Female Colleague</li>
      </ul>
    </div>
    <div className="container-videogames">
      <ul>
        <p id="videogames">Videogames:</p>
        <li>Genshin Impact</li>
        <li>Baldur's Gate 3</li>
        <li>The Witcher 3</li>
        <li>The Sims 4</li>
        <li>Resident Evil 2 Remake</li>
        <li>Smite</li>
        <li>League of Legends</li>
        <li>ARK: Survival Evolved</li>
        <li>Resident Evil 4</li>
      </ul>
    </div>
    <div className="container-artists">
      <ul>
        <p id="artists">Artists:</p>
        <li>Stray Kids</li>
        <li>Chappell Roan</li>
        <li>Nirvana</li>
        <li>Arctic Monkeys</li>
        <li>The Cure</li>
        <li>Laufey</li>
        <li>5 Seconds of Summer</li>
        <li>Måneskin</li>
        <li>DPR IAN</li>
        <li>Fuji Kaze</li>
        <li>Sabrina Carpenter</li>
        <li>Taylor Swift</li>
      </ul>
    </div>
    <div className="container-movies">
      <ul>
        <p id="movies">Movies:</p>
        <li>Howl's Moving Castle</li>
        <li>Mean Girls</li>
        <li>Tangled</li>
        <li>Parasite</li>
        <li>Turning Red</li>
      </ul>
    </div>
  </div>
  {/* new section */}
  <div className="container-gifs">
    <p id="Favorites-title">Just some random gifs</p>
    {/* <p<br>Gif Gallery</p> */}
    <img src={hyunjinGifScene} alt="Hyunjin Smile Total Nerd Scene Gif" className="hyunjinGifScene" />
    <img src={hyunjinGifBlue} alt="Hyunjin Gif Peace Sign Goodnight" className="hyunjinGifGoodnight" />
    <img src={hyunjinIdk} alt="Hyunjin Shrugging" className="hyunjinIdk" />
    <img src={hanDramaticgif} alt="Han Dramatic Scream Gif" className="HanGifDramatic" />
  </div>

  <div className="container-blog">
    <p id="Blog-entry">23/11/26 So, in between today and yesterday, I've been tring to get back into coding and
      bring back this old page I've made in february, to refresh eveything I knew about html and css.
      <br /> Pd: I love the feeling of old 2000's pages so that's why it's all raw html hehe. </p>
  </div>
</div>

  ) 
}

export default App


// {/* <section id="center"> */}
//         {/* <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section> */}
//     </>
//   )