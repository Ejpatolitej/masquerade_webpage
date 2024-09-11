import 'bootstrap/dist/css/bootstrap.min.css';
import InspoCarousel from './components/InspoCarousel';
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
          <br />
          <h3>RSVP senast 12e Oktober</h3>
        </div>
        <div className='info-image-left'>
          <h1 className='info-text'>
            Välkomna till våran Höstmaskerad!
            <br />
            Plocka fram era finaste balkläder och på med en elegant mask.
            <br />
            Upplev en fantastisk kväll med dans, mat, och dryck.
          </h1>
        </div>
        <div className='info-image-right'>
          <h1 className='info-text'>
            Nedanför kommer info, inspo, och annat!
            <br />
            Undrar ni över något, eller vill ha med plus en,
            <br />
            Skriv till Jack.
          </h1>
        </div>
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
      </div>
    </>
  );
}

export default App;
