import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const { image } = props;
    return (
        <div className='ui large image'>
            <img src={image} alt='meal' />
        </div>
    );
};

Image.propTypes = {
    image: PropTypes.string.isRequired,
};

export default Image;
