import React from 'react'
import './App.css'

class MovieCard extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.movie.id} className="table">
    <tbody>
      <tr className="tr">
        <td className="img">
          <img className="imgsize" alt="No-poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td className="td">
          <h3 className="h3">{this.props.movie.title}</h3>
          
        <p className="p">{this.props.movie.overview}</p><input className="button" type="button" onClick={this.viewMovie.bind(this)} value="View"/>

        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieCard