import React, { Component } from "react";
import { connect } from "react-redux";

class ForecastList extends Component {
    render() {
        const { weather } = this.props;
        return weather.map(result => <div>{result.city.name}</div>);
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
    };
}

export default connect(mapStateToProps)(ForecastList);
