import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/Cart/ItemsList/ItemsList';
import {Route, Switch} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Shop from "./components/Shop/Shop/Shop";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Shop} />
                    <Route path="/cart" component={ItemsList} />
                    <Route render={() => <h1>404 not found!</h1>}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
