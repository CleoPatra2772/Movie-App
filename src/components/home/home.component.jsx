import React, { useEffect } from 'react';
import  MovieListing  from '../movie-listing/movie-listing.component';
import movieBanner from '../../images/movie-banner.png';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText = 'Ironman';
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () =>{
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Error: ", err)
            });
            console.log("Response from Api: ", response);
            dispatch(addMovies(response.data));
        }
        fetchMovies();
    }, []);


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