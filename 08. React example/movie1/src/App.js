import { Component } from 'react';
import './App.css';
import { dummy } from './js/movieDummy';
import Movie from './js/component/Movie';

class App extends Component {
  render() {
    return (
      <div>
        <div className='app-container'>
          {
            dummy.results.map((item) => {
              return (
                <Movie
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
