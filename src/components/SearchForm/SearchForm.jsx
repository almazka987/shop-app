import React, {Component} from "react";
import cls from "./SearchForm.scss"

class SearchForm extends Component {
    render() {
        return (
            <form className={[cls.searchForm, 'form-inline md-form mr-auto mb-4'].join(' ')}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn aqua-gradient btn-rounded btn-sm my-0" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;
