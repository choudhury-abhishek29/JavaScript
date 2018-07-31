import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import App from './src/components/App';
import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const server = express();
server.set('view engine','ejs');
server.use(sassMiddleware({
  src: path.join(__dirname,'sass'),
  dest: path.join(__dirname,'public')
}));


import serverRender from './serverRender';
server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => 
    {
      res.render('index', {
        initialMarkup, initialData
      });
    })
    .catch(console.error);
}); 

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, ()=>{
    console.log("Express is listening on port "+config.port);
});