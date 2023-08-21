import React from 'react';
import { connect } from 'react-redux';
import LinkItems from '../components/LinkItems';
import { getFavourites } from '../store/actions/index';

class Favourites extends React.Component {
  componentDidMount () {
    this.props.getFavourites();
  }

  render () {
    const { pokemons } = this.props;

    return (
      <main>
        <LinkItems items={pokemons} showFavouriteIndicator />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.favourites
});

export default connect(mapStateToProps, { getFavourites })(Favourites);
