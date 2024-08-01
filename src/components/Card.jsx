import Mask from '../assets/blackGoldMask.jpg'

export default function Card() {
  return (
    <div className="card">
        <img className="cardImg" src={Mask} alt="Gold and black Mask"></img>
        <h2 className='cardTitle'>Jack Card</h2>
        <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda fugiat commodi eligendi, aperiam, repellat ducimus suscipit nemo id nobis nam hic autem tenetur veniam!</p>
    </div>
  );
}