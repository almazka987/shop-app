import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateSettingsByUrl} from "../actions/general";
import {withRouter} from "react-router-dom";

class ShopList extends Component {
    componentDidMount() {
        const {location, updateSettings} = this.props;
        updateSettings(location.pathname);
    };

    render() {
        return (<h1>В разработке...</h1>)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateSettings : (url) => dispatch(updateSettingsByUrl(url))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ShopList));
