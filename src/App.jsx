import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselFadeExample from './components/InspoCarousel';

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
            <a href='https://maps.app.goo.gl/txvyEMvxcYHoQf6b7'>Rådhuset</a>
          </h2>
        </div>
        <div className='info-image-left'>
          <h1 className='info-text'>
            Välkomna till våran Höstmaskerad!
            <br></br>
            Plocka fram era finaste balkläder och på med en elegant mask.
            <br></br>
            Upplev en fantastisk kväll med dans, mat, och dryck.
          </h1>
        </div>
        <div className='info-image-right'>
          <h1 className='info-text'>
            Välkomna till våran Höstmaskerad!
            <br></br>
            Plocka fram era finaste balkläder och på med en elegant mask.
            <br></br>
            Upplev en fantastisk kväll med dans, mat, och dryck.
          </h1>
        </div>
        <div className='carousel-div'>
          <InspoCarousel />
        </div>
      </div>
    </>
  );
}

export default App;
