import React, { Component } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import favorite from '../../../assets/favorite.svg'
import {
  Link
} from 'react-router-dom';
import './index.scss';

class Cats extends Component {
  state = {
    cats: []
  };

  likeCat = (cat) => {
    const currentCat = this.state.cats.find(c => c.id[0] === cat.id[0])
    this.setState(prevState => ({cats: prevState.cats.map(c => c.id[0] === cat.id[0] ? Object.assign(c, { liked: !c.liked}): c)}))
  }

  componentDidMount() {
    axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=9')
    .then((response) => {
      parseString(response.data, (err, result) => {
        result.response.data[0].images[0].image.map((cat) => (
          cat.liked = false,
          this.setState({ cats: this.state.cats.concat(cat) }))
        )
      })
    });
  }

  render() {
    return (
      <div className="container">
        <h1> Catopedia </h1>
        <div className="catsContainer">
          {this.state.cats.map(cat => (
            <div className="catContainer">
              <Link to={`/cat/${cat.id[0]}`}>
                <div className="catImageContainer">
                  <img className= "catImage" src={cat.url} />
                </div>
              </Link>
              <div className="likes">
                <div onClick={() => this.likeCat(cat)}> <img src={favorite} /> </div>
                <div className="catLikes"> <span>{cat.liked ? '1 like' : '0 likes'}</span> </div>
              </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Cats;
