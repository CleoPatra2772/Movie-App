import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home.component';
import MovieDetail from './components/movie-details/movie-details.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className='app'>
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/movie/:imdbID' element={ <MovieDetail /> } />
      </Routes>
      </div>
      <Footer /> 
    
      </div>
  );
}

export default App;


{/* <Header />
      <Routes>
        <Route path='/' exact component={ <Home /> } />
        <Route path='/movie/:imdbID' component={ <MovieDetail /> } />
        <Route component={<PageNotFound />} /> 
      </Routes>
      <Footer /> */}


//       
// import MovieDetail from './components/movie-details/movie-details.component';
// import PageNotFound from './components/page-not-found/page-not-found.component';
// import Header from './components/header/header.component';
// import Footer from './components/footer/footer.component';