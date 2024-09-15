import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InspoCarousel from './components/InspoCarousel';
import InfoImage from './components/InfoImage'; // Import the InfoImage component
import video from './assets/Masquerade_ballroom.mp4';

function App() {
  return (
    <>
      <div className='content-div'>
        <div className='hero-image'>
          <h1 className='hero-text'>Höstbalen</h1>
          <h1 className='hero-text'>2024</h1>
        </div>

        <div>
          <h2>
            19e Oktober | &nbsp;
            <a
              href='https://maps.app.goo.gl/txvyEMvxcYHoQf6b7'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rådhuset
            </a>
          </h2>
          <h2>Kl 19.00</h2>
          <br />
          <h3>RSVP senast 12e Oktober</h3>
        </div>

        <InfoImage
          text='Välkomna till våran Höstmaskerad! Plocka fram era finaste balkläder och på med en elegant mask. Upplev en fantastisk kväll med dans, mat, och dryck.'
          image='../src/assets/mask_leaves_glitter.jpg'
          align='left'
        />
        <InfoImage
          text='Nedanför kommer info, inspo, och annat! Undrar ni över något, eller vill ha med plus en, skriv till Jack.'
          image='../src/assets/ballroom01.jpg'
          align='right'
        />

        <div>
          <h2>Inspiration</h2>
        </div>
        <div className='carousel-div'>
          <InspoCarousel />
        </div>

        <div>
          <h2>
            <a
              href='https://youtube.com/playlist?list=PLgM0bfYIGz3RXa5e-eKliIb99mILmbY5A&si=gjvmsG1jjJyP_U-v'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ballroom Dance Tutorial
            </a>
          </h2>
        </div>

        <div className='info-image-center'>
          <video className='info-video' src={video} autoPlay muted loop></video>
        </div>
        <InfoImage
          text='RSVP sker med Swish 100kr per person till Jack, senast 12e Oktober.'
          image='../src/assets/blackGoldMask.jpg'
          align='left'
        />
        <InfoImage
          text='Det kommer bjudas på bubbel och plockmat. Men vill ni bli mätta och fulla, ät innan och ta med egen dricka!'
          image='../src/assets/colorful_ballroom.jpg'
          align='right'
        />
      </div>
    </>
  );
}

export default App;
