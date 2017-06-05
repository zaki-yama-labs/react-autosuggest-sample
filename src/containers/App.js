import { connect } from 'react-redux';

import {
  updateInputValue,
  loadSuggestions,
  clearSuggestions,
} from '../actions';
import App from '../components/App';


function mapStateToProps(state) {
  const { value, suggestions, isLoading } = state;

  return {
    value,
    suggestions,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested({ value }) {
      dispatch(loadSuggestions(value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
