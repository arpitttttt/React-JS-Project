import React from 'react';
import { connect } from 'react-redux';
import PokemonData from '../components/PokemonData';
import Loader from '../components/Loader';
import ErrorHandler from '../components/ErrorHandler';
import { fetchPokemon, getFavourites } from '../store/actions/index';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      err: null
    };
  }

  componentDidMount () {
    this.props.fetchPokemon(this.props.match.params.id)
      .then((err) => {
        this.setState({ loading: false, err });
      });
    this.props.getFavourites();
  }

  render () {
    const { err, loading } = this.state;
    const { pokemon } = this.props;
    const element = err
      ? <ErrorHandler err={err} />
      : <PokemonData pokemon={pokemon} />;

    return (
      <main>
        { loading ? <Loader /> : element }
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pokemon: state.pokemon[props.match.params.id] || {}
});

export default connect(mapStateToProps, { fetchPokemon, getFavourites })(Pokemon);
