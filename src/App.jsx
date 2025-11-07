import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InspoCarousel from './components/InspoCarousel';
import InfoImage from './components/InfoImage';
import winterInfo01 from './assets/winter_info_01.jpg';
import winterInfo02 from './assets/winter_info_02.jpg';
import winterInfo03 from './assets/winter_info_03.jpg';
import winterInfo04 from './assets/winter_info_04.jpg';

function App() {
  return (
    <>
      <div className='content-div'>
        <div className='hero-image'>
          <h1 className='hero-text-big'>Winter Cocktail Masquerade</h1>
          <h1 className='hero-text-big'>2025</h1>
        </div>

        <div>
          <h2>
            12e December | &nbsp;
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
          <h3>RSVP senast 1a December</h3>
        </div>

        <InfoImage
          text='Välkomna till en fantastisk cocktail kväll! Ta på er en elegant klänning eller snygg kostym. Mingla, spela, och njut av god mat och dryck i trevligt sällskap.'
          image={winterInfo01}
          align='left'
        />
        <InfoImage
          text='Nedanför kommer info, inspo, och annat! Undrar ni över något, eller vill ha med plus en, skriv till Jack.'
          image={winterInfo03}
          align='right'
        />

        <div>
          <h2>Inspiration</h2>
        </div>
        <div className='carousel-div'>
          <InspoCarousel />
        </div>

        <InfoImage
          text='RSVP sker med Swish 150kr per person till Jack, senast 1a December.'
          image={winterInfo02}
          align='left'
        />
        <InfoImage
          text='Det kommer bjudas på lite alkohol och plockmat. Men vill ni bli mätta och fulla, ät innan och ta med egen dricka!'
          image={winterInfo04}
          align='right'
        />
      </div>
    </>
  );
}

export default App;
