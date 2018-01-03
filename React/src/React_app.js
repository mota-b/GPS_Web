import React from 'react';
import { render } from 'react-dom';

// JS jquery and bootstrap
import $ from 'jquery'
import 'bootstrap'

import {App} from './components/App.js'
render(<App/>, document.getElementById( 'app' ) );
