import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/ItemsList/ItemsList';
import {Route, Switch} from "react-router-dom";
import ShopList from "./components/shoplist";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={ShopList} />
                    <Route path="/cart" component={ItemsList} />
                    <Route render={() => <h1>404 not found!</h1>}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
