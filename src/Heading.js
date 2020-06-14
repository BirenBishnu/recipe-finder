import React, { Component } from 'react';
import './Heading.css';
import axios from 'axios';
import MealCard from './components/MealCard';


class Heading extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      loading: false, 
      dishName: '', 
      mealsData: [], 
      noData: '' };
  }

  handleGetRecipes() {
    this.setState((prevState) => ({ ...prevState, mealsData:[]}));
    
    if (this.state.dishName === '') {
      alert('Please Enter the Name of the Dish');
    } else {
     
      this.setState((prevState) => ({ ...prevState, loading: true }));

      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.dishName}`)
        .then((response) => {
          if (response.data.meals) {
            this.setState((prevState) => ({ ...prevState, mealsData: [...response.data.meals] }));
          } else {
            this.setState((prevState) => ({ ...prevState, noData: 'No data has been received' }));
          }
          
          this.setState((prevState) => ({ ...prevState, loading: false }));
        })
        .catch((err) => {
          console.log('Error: ', err);
        });
    }
  }

  handleChange(event) {
    event.persist();
    this.setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  }

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
        {this.state.loading ? (
          <p>Loading...</p>
        ) : this.state.mealsData.length !== 0 ? (
          this.state.mealsData.map((item, index) => (
           <MealCard item={item} key={index}/> 
          ))
        ) : this.state.noData !== '' ? (
          <p>{this.state.noData}</p>
        ) : (
          <h3>Type a Dish Name to Search for it's ingredients</h3>
        )}
      </div>
    );
  }
}

export default Heading;
