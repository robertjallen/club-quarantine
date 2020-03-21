import Head from 'next/head'
import entertainment from '../images/entertainment.png'
import houseparty from '../images/houseparty.svg'
import karaoke from '../images/karaoke.svg'
import comedy from '../images/crimson_comedy.svg'


const Home = () => (
  <div className="container">
    <Head>

      <meta property="og:url" content="https://club-quarentine.now.sh" />
      <meta property="og:type" content="article" />
      <meta property="og:title"  content="Club Quarantine" />
      <meta property="og:description"  content="Club Quarantine provides a cure from social isolation." />
      <meta property="og:image"  content="https://club-quarentine.now.sh/_next/static/images/entertainment-9bdd50598b32042775faca812234ed37.png" />
      <title>CLUB QUARANTINE</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        <a href="#">CLUB QUARANTINE</a>
      </h1>

      <div className="grid-1">
        <h3>Lets Party🎉🥂</h3>
        <iframe width="100%" height="333" src="https://www.youtube.com/embed/Y5kbQHToJ0o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <h3>#CureSocialIsolation </h3>
      </div>

      <div className="grid">
        <a href="/comedy" className="card">
          <h3>Comedy &rarr;</h3>
          <p>Our interactive virtual comedy shows are the best.</p>
          <img className="card-image" src={comedy}/>
        </a>

        

        {/* <a href="/karaoke" className="card">
          <h3>Karaoke &rarr;</h3>
          <p>Sing your heart out!</p>
          <img className="card-image" src={karaoke}/>
        </a>

        <a href="/houseparty" className="card">
          <h3>House party &rarr;</h3>
          <p>Socialize and hangout with other people virtually</p>
          <img className="card-image" src={houseparty}/>
        </a>

        <a href="entertainment" className="card">
          <h3>Party Entertainment &rarr;</h3>
          <p>Our amazing entertainers will blow your mind.</p>
          <img className="card-image" src={entertainment} />
        </a> */}
      </div>
    </main>

    <footer>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Umbrella Corporation Productions ⛱️
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: black;
        color: #fff;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: crimson;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }
      .grid-1{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        width: 800px;
        max-width: 80vw;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: crimson;
        border-color: crimson;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      .card-image{
        width: 33%;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html, body {
        padding: 0;
        max-width: 100%;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
