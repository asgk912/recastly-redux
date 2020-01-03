import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// var mapStateToProps = null;
// var mapDispatchToProps = (dispatch) => ({handleSearchInputChange: (q) => handleSearchChange(q)});

var SearchContainer = connect(
  null, // mapStateToProps
  (dispatch) => ({handleSearchInputChange: (q) => dispatch(handleSearchChange(q))}) // mapDispatchToProps
)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
