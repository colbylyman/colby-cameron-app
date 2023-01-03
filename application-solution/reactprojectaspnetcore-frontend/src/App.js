import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <div>
                {/* <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map(forecast =>
                            <tr key={forecast.date}>
                                <td>{forecast.date}</td>
                                <td>{forecast.temperatureC}</td>
                                <td>{forecast.temperatureF}</td>
                                <td>{forecast.summary}</td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
            </div>
        );
    }

    render() {
        App.renderForecastsTable();
        // let contents = this.state.loading
        //     ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        //     : App.renderForecastsTable(this.state.forecasts);

        return (
            <div class="flex flex-col h-screen">
                <div class="m-20 mb-10">
                    <p class="text-2xl underline">Register</p>
                    <div class="flex flex-row">
                        <p>Username: </p>
                        <input class="ml-2 w-10 border border-slate-400"></input>
                    </div>
                    <div class="flex flex-row">
                        <p>Password: </p>
                        <input class="ml-2 w-10 border border-slate-400"></input>
                    </div>
                </div>

                <div class="m-20 mb-10">
                    <p class="text-2xl underline">Login</p>
                    <div class="flex flex-row">
                        <p>Username:</p>
                        <input class="ml-2 w-10 border border-slate-400"></input>
                    </div>
                    <div class="flex flex-row">
                        <p>Password:</p>
                        <input class="ml-2 w-10 border border-slate-400"></input>
                    </div>
                </div>
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
