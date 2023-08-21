import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/actions/index';
import { isFavourite } from '../store/selectors/index';
import favouriteImg from '../assets/favourite.png';
import notFavouriteImg from '../assets/notFavourite.png';
import './FavouriteIndicator.scss';

function FavouriteIndicator(props) {
  const add = () => {
    const { name, id } = props.pokemon;
    props.addFavourite({ name, id });
  };

  const remove = (e) => {
    e.preventDefault();
    props.removeFavourite(props.pokemon.id);
  };

  return (
    <Fragment>
      {
        props.isFavourite
          ? <img src={favouriteImg} onClick={remove} className="favourite" title="Remove from favourites" alt="Remove" />
          : <img src={notFavouriteImg} onClick={add} className="favourite" title="Add to favourites" alt="Add" />
      }
    </Fragment>
  );
}

const mapStateToProps = (state, props) => ({
  isFavourite: isFavourite(state, props)
});

export default connect(mapStateToProps, { addFavourite, removeFavourite })(FavouriteIndicator);
