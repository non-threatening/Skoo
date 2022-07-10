/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App/index.js';
import {TrackScreen} from '../App/Tracks';
import {HomeScreen} from '../App/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Homescreen />);
});
