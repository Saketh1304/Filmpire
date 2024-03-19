import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Actors from './components/Actors/Actors';
import NavBar from './components/NavBar/NavBar';
import MovieInfo from './components/MovieInfo/MovieInfo';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';

import useStyles from './components/styles';

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Routes>
        <Route path='/movie/:id' element={<MovieInfo/>} />
        <Route path='/actors/:id' element={<Actors/> }/>
          <Route path='/' element={<Movies/>} />
          <Route path='/profile/:id' element={<Profile/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
