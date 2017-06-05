import React from 'react';
import Autosuggest from 'react-autosuggest';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }

  render() {
    const {
      value,
      suggestions,
      isLoading,
      onChange,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
    } = this.props;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange,
    };
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

    return (
      <div>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
