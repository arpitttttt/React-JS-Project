import React from 'react';
import { connect } from 'react-redux';
import LinkItems from '../components/LinkItems';
import Loader from '../components/Loader';
import ErrorHandler from '../components/ErrorHandler';
import { fetchPokemonType } from '../store/actions/index';
import { getPokemonsByType } from '../store/selectors/index';

class PokemonType extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      err: null
    };
  }

  componentDidMount () {
    this.props.fetchPokemonType(this.props.match.params.id)
      .then((err) => {
        this.setState({ loading: false, err });
      });
  }

  render () {
    const { err, loading } = this.state;
    const { pokemons } = this.props;
    const element = err
      ? <ErrorHandler err={err} />
      : <LinkItems items={pokemons} />;

    return (
      <main>
        { loading ? <Loader /> : element }
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pokemons: getPokemonsByType(state, props)
});

export default connect(mapStateToProps, { fetchPokemonType })(PokemonType);
