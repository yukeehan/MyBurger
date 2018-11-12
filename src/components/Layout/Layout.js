import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    SideDrawerToggleHandler = () =>{
        this.setState(( prevState ) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        })
    }

    render() {
        return(
            <>
                <Toolbar SideDrawerToggle={this.SideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;