import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './components/App';

ReactDOM.render(
    <App initialData={window.initialData} />, 
    document.getElementById('root')
);