import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() { 
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data 
      {this.props.isLoading}
      <p>We are finding the characters. Please be patient.</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  isLoading: state.charsReducer.isLoading,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { getCharacter })(CharacterListView);


