import React, { Component } from "react";

import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather-list";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="page-title">Weather Forecast</h1>
                </div>
                <div className="row">
                    <SearchBar />
                    <WeatherList />
                </div>
            </div>
        );
    }
}
