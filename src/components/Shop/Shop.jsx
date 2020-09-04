import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateSettingsByUrl} from "../../actions/general";
import {withRouter} from "react-router-dom";
import CategoryLabels from "./CategoryLabels/CategoryLabels";
import ShopItem from "./ShopItem";

class Shop extends Component {
    componentDidMount() {
        const {location, updateSettings} = this.props;
        updateSettings(location.pathname);
    };

    render() {
        return (
            <React.Fragment>
                <CategoryLabels />
                <ShopItem />
            </React.Fragment>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateSettings : (url) => dispatch(updateSettingsByUrl(url))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Shop));
