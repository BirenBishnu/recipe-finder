import React, { Component } from 'react';


class MealCard extends Component {
    constructor(props) {
        super(props);

        this.state = { likeBtn: false };
    }

    handleLikeBtn() {
        this.setState({ likeBtn: !this.state.likeBtn })
    }


    render() {

        let ingredientList = [];
        for (let counter = 1; counter <= 20; counter++) {

            if (this.props.item["strIngredient" + counter] && this.props.item["strMeasure" + counter] && this.props.item["strIngredient" + counter] !== "" && this.props.item["strMeasure" + counter] !== "") {
                ingredientList.push(`${this.props.item["strIngredient" + counter]} - ${this.props.item["strMeasure" + counter]}`);
            }
        }


        return (
            <div className="mealCard" >
                <div style={{ display: "flex" }}>
                    <div style={{ width: "95%" }}>
                        <p style={{ backgroundColor: '#F8EED3', fontSize: '130%', marginBottom: '0px', paddingBottom: '0px' }}>{this.props.item.strMeal} </p>
                    </div>
                    <div style={{ width: "5%" }}>
                        {this.state.likeBtn ?
                            <p style={{ backgroundColor: '#F8EED3', fontSize: '130%', marginBottom: '0px', paddingBottom: '0px' }}><i onClick={() => this.handleLikeBtn()} className="fa fa-heart-o" aria-hidden="true" style={{ color: "red", cursor: 'pointer' }}></i></p>
                            : <p style={{ backgroundColor: '#F8EED3', fontSize: '130%', marginBottom: '0px', paddingBottom: '0px' }}><i onClick={() => this.handleLikeBtn()} className="fa fa-heart-o" aria-hidden="true" style={{ cursor: 'pointer' }}></i></p>
                        }
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-item" style={{ width: '20%' }}>
                        <img src={this.props.item.strMealThumb} alt={this.props.item.strMeal} width="300" height="300" style={{ border: "1px solid" }} />
                    </div>
                    <div className="grid-item1">
                        <div>
                            <em>Category of Meal - </em>
                            {this.props.item.strCategory}
                        </div>
                        <div>
                            <em>Area of the Meal - </em>
                            {this.props.item.strArea}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <em>Ingredients: </em>
                            <div style={{ overflowY: "auto", height: "200px", width: "600px", padding: "0px 15px", backgroundColor: "#D7D0D0" }}>
                                {ingredientList.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>




                    </div>
                </div>



            </div>
        )
    }


}

export default MealCard;