import Head from 'next/head'
import entertainment from '../images/entertainment.png'
import houseparty from '../images/houseparty.svg'
import karaokeImg from '../images/karaoke.svg'
import comedy from '../images/crimson_comedy.svg'
import knuckleheads from '../images/knuckleheads.jpg'
import musicImg from '../images/music.png'
import header from '../images/Header.jpg'
import zoomIcon from '../images/zoom-icon.png'
import coronaFlyer from '../images/Corona-comedy-flyer.png'

const Home = () => (
 
  <div className="container">
    <Head>
      <meta property="og:url" content="https://club-quarantine.now.sh" />
      <meta property="og:type" content="article" />
      <meta property="og:title"  content="Club Quarantine" />
      <meta property="og:description"  content="Club Quarantine provides a cure from social isolation." />
      {/* music */}
      <meta property="og:image"  content="https://club-quarantine.now.sh/_next/static/images/houseparty-a55c40a7a90c59fd9ebfbf497e1c08c8.png" />
      
      {/* entertainment */}
      {/* <meta property="og:image"  content="https://club-quarantine.now.sh/_next/static/images/entertainment-9bdd50598b32042775faca812234ed37.png" /> */}
      <title>CLUB QUARANTINE</title>
      <link rel="icon" href="/favicon.ico" />
     
    </Head>

      {/* header */}
      <div className="header">
        <a href="https://club-quarantine.now.sh"><img className="header-img" src={header}/></a>
        <a href="https://club-quarantine.now.sh"><img className="header-img" src={coronaFlyer}/></a>
      </div>


    <main>
      <div className="grid-1">
        {/* //enter button */}
        {/* <div id="ballMenuContainer">
                <div id="menuBall1" className="menuBall">
                    <a href="/karaoke" className="ball blueball">
                        <div className="menuText">
                            ENTER
                        </div>
                    </a>
                </div>
            </div> */}

            
        <h3>Lets Party🎉🥂</h3>  

        {/* iframe */}  
        {/* <iframe width="100%" height="333" src="https://www.youtube.com/embed/Y5kbQHToJ0o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

        <h3>#CureSocialIsolation </h3>
      </div>

      <div className="grid">

        {/* comedy */}
        <a href="/comedy" className="card">
            <img className="card-image" src={comedy}/>
            {/* <img className="card-image" id="knuckleheads" src={knuckleheads}/> */}
          <div className="card-details">
            <h3 className="title"><a>Comedy: featuring standup comics 🎤</a></h3>
            <h3 className="title">Saturday 3/28</h3>
            <h3 className="title">9:30 to 11:30 EST</h3>
            <div className="details-btn">

                <a href="https://us04web.zoom.us/j/3143189310" target="_blank"><img className="zoom-icon" src={zoomIcon}/></a>

                {/* paypal button  */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="7NPHVVQ7JC8SL" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>
          </div>
        </a>

        
        {/* karaoke */}
            <a href="/karaoke" className="card">
              <img className="card-image" id="karaokeImg" src={houseparty}/>
              <div className="card-details">
                <h3 className="title"><a>House Party/ DJ 🎤</a></h3>
                <h3 className="title">Friday 3/27</h3>
                <h3 className="title">9 to midnight EST</h3>
                <div className="details-btn">

                  <a href="https://us04web.zoom.us/j/3143189310" target="_blank"><img className="zoom-icon" src={zoomIcon}/></a>

                  {/* paypal button  */}
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="7NPHVVQ7JC8SL" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                  </form>
                </div>
              </div>
            </a>

        {/* houseparty */}
        {/* <a href="/houseparty" className="card">
          <h3>House party &rarr;</h3>
          <p>Socialize and hangout with other people virtually</p>
          <img className="card-image" src={houseparty}/>
        </a> */}

        {/* entertainers */}
        {/* <a href="entertainment" className="card">
          <h3>Party Entertainment &rarr;</h3>
          <p>Our amazing entertainers will blow your mind.</p>
          <img className="card-image" src={entertainment} />
        </a>  */}
      </div>

      


            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresocialisolation%2Fposts%2F116171870016396&show_text=true&appId=242303396886484&height=449" width="500" height="449" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


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
        // padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: black;
        color: #fff;
      }

      iframe{
        width: 500px;
        max-width: 99%;
      }
      main {
        padding: 1rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .header{
        width: 1000px;
        max-width: 99vw;
      }
      .header-img{
        width: 100%;
      }
      .zoom-icon{
        border-radius: 50%;
        width: 20%;
        margin: 0 auto; 
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
        display: flex;
        margin: 1rem;
        text-align: center;
        padding: 1.5rem;
        justify-content: space-between;
        align-items: center;
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
      #knuckleheads{
        border-radius: 50%;
        margin-left: 20px;
      }
      .card-details{
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .details-btn{
        justify-content: center;
        display: flex;
        align-items: center;
        text-align: center;
      }


      #ballMenuContainer {
        z-index: 1;    
        padding: 0 calc(50% - 100px);
      }
      
      .menuBall {
          position: relative;
          width: 200px;
          height: 75px;
          border-radius: 20px;
      }
      
      .ball {
          position:absolute;
          width:100%;
          height:100%;
          border-radius: 20px;
          border: 2px dashed #fff;
          text-decoration: none;
      }
      
      .ball:hover {
          -webkit-animation: pulse 1s ease 0s infinite normal;
          -o-animation: pulse 1s ease 0s infinite normal;
          -moz-animation: pulse 1s ease 0s infinite normal;
          animation: pulse 1s ease 0s infinite normal;
      }
      
      
      .blueball {
          -moz-box-shadow: 0 0 0 3px #d6385b, 2px 1px 4px 4px rgba(10,10,0,.5);
          -webkit-box-shadow: 0 0 0 3px #d6385b, 2px 1px 4px 4px rgba(10,10,0,.5);
          -o-box-shadow: 0 0 0 3px #d6385b, 2px 1px 4px 4px rgba(10,10,0,.5);
          box-shadow: 0 0 0 3px #d6385b, 2px 1px 6px 4px rgba(10,10,0,.5);
      
          background-image: -webkit-linear-gradient(35deg, #9f2e86 25%, transparent 25%, transparent 75%, #9f2e86 75%, #9f2e86), 
          -webkit-linear-gradient(-35deg, #9f2e86 25%, transparent 25%, transparent 75%, #9f2e86 75%, #9f2e86);
          background-image: -moz-linear-gradient(35deg, #9f2e86 25%, transparent 25%, transparent 75%, #9f2e86 75%, #9f2e86), 
          -moz-linear-gradient(-35deg, #9f2e86 25%, transparent 25%, transparent 75%, #9f2e86 75%, #9f2e86);
          background-size:20px 20px;  
          background-color: #d6385b;
      }
      
      
      .menuText {
          font-family: 'IdolwildRegular' , Verdana, Helvetica, Sans-Serif;
          font-size: larger;
          color: #ffffff;
          position: relative;
          vertical-align: middle;
          text-align: center;
          top: 35%;
      }
      
      #menuBall1 {
        -webkit-animation: bump 3s linear 0s infinite normal;
      }
      
      
      #menuBall1 {
        -moz-animation: bump 3s linear 0s infinite normal;
      }
      
      
      #menuBall1 {
        -o-animation: bump 3s linear 0s infinite normal;
      }
      
      
      #menuBall1 {
        animation: bump 3s linear 0s infinite normal;
      }
      
      @-webkit-keyframes pulse {
          0% {
            -webkit-transform: scale(1) rotate(0deg); 
          }
          50% {
            -webkit-transform: scale(1.1) rotate(-5deg); 
          }
          100% {
            -webkit-transform: scale(1) rotate(0deg); 
          }
      }
      @-o-keyframes pulse {
          0% {
            -o-transform: scale(1) rotate(0deg); 
          }
          50% {
            -o-transform: scale(1.1) rotate(-5deg); 
          }
          100% {
            -o-transform: scale(1) rotate(0deg); 
          }
      }
      @-moz-keyframes pulse {
          0% {
            -moz-transform: scale(1) rotate(0deg); 
          }
          50% {
            -moz-transform: scale(1.1) rotate(-5deg); 
          }
          100% {
            -moz-transform: scale(1) rotate(0deg); 
          }
      }
      @keyframes pulse {
          0% {
            transform: scale(1) rotate(0deg); 
          }
          50% {
            transform: scale(1.1) rotate(-5deg); 
          }
          100% {
            transform: scale(1) rotate(0deg); 
          }
      }
      
      @-webkit-keyframes bump {
        0% {
            top: 0;
        }
        5% {
            top: 3px;
        }
        10% {
            top:0;
        }
        100% {
            top:0;
        }
      }
      @-o-keyframes bump {
        0% {
            top: 0;
        }
        5% {
            top: 3px;
        }
        10% {
            top:0;
        }
        100% {
            top:0;
        }
      }
      @-moz-keyframes bump {
        0% {
            top: 0;
        }
        5% {
            top: 3px;
        }
        10% {
            top:0;
        }
        100% {
            top:0;
        }
      }
      @keyframes bump {
        0% {
            top: 0;
        }
        5% {
            top: 3px;
        }
        10% {
            top:0;
        }
        100% {
            top:0;
        }
      }

      @media (max-width: 600px) {
        .card{
          padding: 0 .5rem;
        }
        .card-image{
          display: none;
        }
        .grid {
          width: 100%;
          flex-direction: column;
        }
        .title{
          font-size: 2rem;
        }
        .ball{
          height: 75%;
          width: 75%;
          left: 5vw;
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
