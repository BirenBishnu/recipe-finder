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

                </div>




            </div>
        )
    }


}

export default MealCard;