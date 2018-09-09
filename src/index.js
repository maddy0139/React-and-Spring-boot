import React from 'react';
import { render } from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router}  from 'react-router-dom';

import ReactRouter from './router/router';
render(<Router>
    <ReactRouter/>
</Router>,
    document.getElementById('root'));