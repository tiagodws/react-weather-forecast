import React, { Component } from "react";

import SearchBar from "../containers/search-bar";
import ForecastList from "../containers/forecast-list";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="page-title">Weather Forecast</h1>
                </div>
                <div className="row">
                    <SearchBar />
                    <ForecastList />
                </div>
            </div>
        );
    }
}
