import React, {Component} from 'react'; // const React = require('react');
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    render() {
        return(
            <div className='Movie'>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    };
}

// class MoviePoster extends Component {
//     render() {
//         return(
//             <img src={this.props.poster} alt=''/>
//         )
//     };
// }

function MoviePoster({poster}) {
    return(
        <img src={poster} alt=''/>
    )
}

export default Movie; // 외부에서 사용하기 위함