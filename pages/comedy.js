import React from 'react'
import comedyImage from '../images/comedy-show.jpg'
import zoomIcon from '../images/zoom-icon.png'
import paypalIcon from '../images/paypal.png'

export default function comedy() {
    return (
        <div className="container">
            <h2 className="title">Comedy and Standup</h2>
            <div className="card">
              {/* <img className="card-image" id="knuckleheads" src={comedyImage}/> */}
              <div className="card-details">
                <h3 className="title"><a>Standup Comedy Night</a></h3>
                <h3 className="title">10:30 to 12:30 EST</h3>
              
              <div className="details-btn">

                <a href="https://bit.ly/2xsslJV" target="_blank"><img className="zoom-icon" src={zoomIcon}/></a>

                {/* paypal button  */}
                {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="7NPHVVQ7JC8SL" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form> */}
                 <a href="https://paypal.me/Dumskitzllc" target="_blank"><img className="paypal-icon" src={paypalIcon}/></a>
              </div>
                
              </div>
            </div>

            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdN-L8XsL42CvrxR8Aph0X_RKpJXhE0FSTzmuEqaGjvBshFrg/viewform?embedded=true" width="100%" height="1816" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
           


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

      .title a{
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
      #knuckleheads{
        border-radius: 50%;
        margin-left: 20px;
        width: 20%;
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

      .card {
        width: 500px;
        max-width: 90vw;
        display: flex;
        align-items: center;
        margin: 1rem;
        padding: 1rem;
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
        color: #0070f3;
        border-color: #0070f3;
      }

      .card-details{
        display: flex;
        flex-direction: column;
        align-items: center;
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
        margin: 0 auto;
      }
      .paypal-icon{
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 3px;
        width: 40%;
        margin: 0 auto; 
      }

      .details-btn{
        justify-content: center;
        display: flex;
        align-items: center;
        text-align: center;
      }

      .zoom-icon{
        border-radius: 50%;
        width: 40%;
        margin: 0 auto; 
      }
      #ballMenuContainer {
        z-index: 1;    
        margin-top: 40vh;
        padding: 0 calc(50% - 100px);
          position: absolute;
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
        .card .card-image, #knuckleheads{
          display: none;
        }

        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
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
}
