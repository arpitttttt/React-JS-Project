import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LinkItems from '../components/LinkItems';
import Loader from '../components/Loader';
import ErrorHandler from '../components/ErrorHandler';
import Pagination from '../components/Pagination';
import { fetchPokemons } from '../store/actions/index';
import { stripPageNumberFromQuery } from '../helpers/functions';

class Pokemons extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      err: null,
      page: null
    };
  }

  componentDidMount () {
    this.fetchdata();
  }

  componentDidUpdate (props) {
    // On page change
    if (props.location.search !== props.history.location.search) {
      this.fetchdata();
    }
  }

  fetchdata () {
    const page = stripPageNumberFromQuery(this.props.location.search);
    this.setState({ loading: true, page });

    this.props.fetchPokemons(page)
      .then((err) => {
        this.setState({ loading: false, err });
      });
  }

  render () {
    const { err, loading, page } = this.state;
    const { pokemons, numberOfPages } = this.props;
    const element = err
      ? <ErrorHandler err={err} />
      : <LinkItems items={pokemons} />;

    return (
      <main>
        { loading
          ? <Loader />
          : (
            <Fragment>
              {element}
              <Pagination page={page} numberOfPages={numberOfPages} />
            </Fragment>
          ) }
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  const page = stripPageNumberFromQuery(props.location.search);

  return {
    pokemons: state.pokemons[page] || [],
    numberOfPages: state.pokemons.numberOfPages
  };
};

export default connect(mapStateToProps, { fetchPokemons })(Pokemons);
