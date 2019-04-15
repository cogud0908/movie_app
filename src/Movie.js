import React, {Component} from 'react'; // import React from 'react';
import './Movie.css';
import './Movie';

class Movie extends Component {
    render() {
        return(
            <div className='Movie'>
                <h1>어벤져스</h1>
                <img src='https://post-phinf.pstatic.net/MjAxODEyMThfMTM2/MDAxNTQ1MTE1Mzg5NTk3.uM82sQH5oOsdbPElrNIR3R8yPyPKWUOANMC2pEkBZSgg.rHuoP7uYPD0YX23AlqVzA-rJ7dw6cSCciUa2fMhwW0og.PNG/image_2004770701545021747352.png?type=w1200'/>
            </div>
        )
    };
}

export default Movie; // 외부에서 사용하기 위함