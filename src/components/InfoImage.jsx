import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

// InfoImage Component
const InfoImage = ({ text, image, align }) => {
  const isLeftAligned = align === 'left';

  return (
    <div
      className={`info-image-${align}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
      }}
    >
      <h1
        className='info-text'
        style={{ textAlign: isLeftAligned ? 'start' : 'end' }}
      >
        {text}
      </h1>
    </div>
  );
};

InfoImage.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default InfoImage;
