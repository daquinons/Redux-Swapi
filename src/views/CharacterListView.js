import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { fetchCharacters, setFetching, setSuccess } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    // call our action
    this.props.setFetching(true);
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  return {
    characters: state.characters,
    fetching: state.fetching
  };
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchCharacters,
    setFetching,
    setSuccess // To remove when API is back
  }
)(CharacterListView);
