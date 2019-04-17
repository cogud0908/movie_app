import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {  
    }

    componentWillMount() {
    }


    componentDidMount() {
        fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then((response) => response.json() )
        .then((json) => {
            this.setState({
                movies: json.data.movies        
            });
        })
        .catch( (err) => console.error( err ) );
    }

    _renderMovies = () => {
        // const movies = [<Movie/>, <Movie/>, <Movie/>];
        const movies = this.state.movies.map((movie, index) => {
            console.log(movie);
            return <Movie title={movie.title} poster={movie.medium_cover_image} key={index}/>
        });
        return movies;
    }

    render(){
        return (
            <div className='App'>
                {
                    (this.state.movies == null) ? "loading" : this._renderMovies()
                }
            </div>
    );
  }
}

export default App;