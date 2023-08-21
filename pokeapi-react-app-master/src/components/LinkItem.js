import React from 'react';
import { NavLink } from 'react-router-dom';
import FavouriteIndicator from './FavouriteIndicator';
import { stripIdFromUrl } from '../helpers/functions';
import './LinkItem.scss';

function LinkItem({ item, route, showFavouriteIndicator }) {
  const id = stripIdFromUrl(item);
  const routeTo = `/${route || 'pokemon'}/${id}`;

  return (
    <NavLink to={routeTo} className="linkItem">
      <div>
        <p className="title capitalize">{item.name}</p>
        <p className="subtitle">{`#${id}`}</p>
      </div>
      { showFavouriteIndicator && <FavouriteIndicator pokemon={item} /> }
    </NavLink>
  );
}

export default LinkItem;
