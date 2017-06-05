import { escapeRegexCharacters, randomDelay } from '../utils';
import languages from '../constants/languages';

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
export const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';


function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  return languages.filter((language) => regex.test(language.name));
}

export function updateInputValue(value) {
  return {
    type: UPDATE_INPUT_VALUE,
    value,
  };
}

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS,
  };
}

export function loadSuggestionsBegin() {
  return {
    type: LOAD_SUGGESTIONS_BEGIN,
  };
}

export function maybeUpdateSuggestions(suggestions, value) {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value,
  };
}

export function loadSuggestions(value) {
  return (dispatch) => {
    dispatch(loadSuggestionsBegin());

    // Fake an AJAX call
    setTimeout(() => {
      dispatch(maybeUpdateSuggestions(getMatchingLanguages(value), value));
    }, randomDelay());
  };
}

