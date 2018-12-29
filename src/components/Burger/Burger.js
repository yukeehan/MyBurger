import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom';

const burger = ( props ) =>{
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])] 
            // 2-D array that each array contain props.ingredients[igKey] number of undefined
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []) // flatten the array
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);