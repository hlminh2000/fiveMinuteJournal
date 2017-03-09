import { combineReducers } from 'redux';

const allReducers = combineReducers({
  sampleReducer:  () => {
    return {sampleData: "sdfadsf"}
  }
});

export default allReducers;
