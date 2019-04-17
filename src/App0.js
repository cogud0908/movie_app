import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   '생일',
//   '헬보이',
//   '샤잠',
//   '기생충',
//   '극한직업'
// ];

const movies = [{
  title:'생일',
  poster:'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg',
  },{
  title:'헬보이',
  poster:'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg',
  },{
  title:'샤잠',
  poster:'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg',
  },{
  title:'어벤져스',
  poster:'https://post-phinf.pstatic.net/MjAxODEyMThfMTM2/MDAxNTQ1MTE1Mzg5NTk3.uM82sQH5oOsdbPElrNIR3R8yPyPKWUOANMC2pEkBZSgg.rHuoP7uYPD0YX23AlqVzA-rJ7dw6cSCciUa2fMhwW0og.PNG/image_2004770701545021747352.png?type=w1200',
  }, {
  title:'극한직업',
  poster:'https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg',
  }
];

// Life Cycle

// render: componentWillMount() -> runder() -> componentDidMount()
// update: componentWillReceiveProps() -> componentShouldUpdate() -> componentWillUpdate()
//                                        return (old props != new props)

class App extends Component {
  componentWillMount() {
    // request API 호출
    console.log('componentWillMount() called');
  }

  componentDidMount() {
    // after request API
    console.log('componentDidMount() called')
  }
np
  render() {
    console.log('render() called')
    return (
      <div className='App'>
      {
        movies.map((movies, index) =>
          <Movie title={movies.title} poster={movies.poster} key={index}/>
        )
      }
      </div>
    );
  }
}

export default App;
