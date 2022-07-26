import React, { useEffect } from 'react';
import  MovieListing  from '../movie-listing/movie-listing.component';
import movieBanner from '../../images/movie-banner.png';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './home.styles.scss';

const Home = () => {
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
            
    }, [dispatch]);


    return(
        <div>
        <div className='banner-img'>
            <img src={movieBanner} alt='movie-banner' />
        </div>
        <MovieListing />
        </div>
    )
}

export default Home;