// import React from 'react';
import counter from './CounterReducers';
import auth from './authReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ counter, auth });

export default allReducers;