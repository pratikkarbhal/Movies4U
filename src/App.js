import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("marvel")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb api")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=c6d9985b1d8a75308e7869e248eda86c&language=en-US&query=" + searchTerm
    
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched movie data from url,data stored in searchResults")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieCard key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="logo.png"/>
              </td>
              <td width="8"/>
              <td>
                <h1 className="h1">Movies4U</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="search" onChange={this.searchChangeHandler.bind(this)} placeholder="  Start typing a keyword here..."/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
