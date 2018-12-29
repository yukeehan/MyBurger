import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let params of query.entries()) {
            // ['salad', '1']
            if(params[0] === 'price'){
                price = +params[1]
            } else {
                ingredients[params[0]] = +params[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contactdata');
    }
    render() {
        return (
           <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    onCheckoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                    path={this.props.match.path + '/contactdata'}
                    render={() => (<ContactData 
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}/>)}/>
           </div> 
        )
    }
}

export default Checkout;