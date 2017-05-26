import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import comments from './comments';
import hidden from './hidden';
import modal from './modal';

const rootReducer = combineReducers({courses, comments, hidden , modal, routing: routerReducer });

export default rootReducer;