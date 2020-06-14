import React, { Component } from 'react';
import './Heading.css';


class Heading extends Component {
  render() {
    return (
      <div className="container">
        <p style={{ fontSize: '200%', color: 'grey' }}>Recipe Finder</p>
        <div>
          <span>
            <input type="text" name="dishName" onChange={(event) => this.handleChange(event)} placeholder="Enter the Name of the Dish" />
          </span>
          <span>
            <input type="button" value="Get Recipes" onClick={() => this.handleGetRecipes()} />
          </span>
        </div>
        <h3>Type a Dish Name to Search for it's ingredients</h3>
      </div>
    );
  }
}

export default Heading;
