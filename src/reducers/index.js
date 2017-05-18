import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import comments from './comments';
import hidden from './hidden';

const rootReducer = combineReducers({courses, comments, hidden ,routing: routerReducer });


export default rootReducer;