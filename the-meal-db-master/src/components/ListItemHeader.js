import React from 'react';
import PropTypes from 'prop-types';

const ListItemHeader = (props) => {
    const { title } = props;
    return (
        <h3 aria-label={title} className='header'>{title}</h3>
    );
};

ListItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ListItemHeader;
