import React, { Component } from 'react'
import SearchInput from '../searchInput/searchInput'
import SearchResults from '../searchResults/searchResults'
import GoogleMap from '../googleMap/googleMap'

class Search extends Component {

    state = {
        dataWeather: undefined,
        coord:{ 
            lon: -58.3712,
            lat: -34.6083
        },
        lastResults:new Array()
    }



    getQuery = ( city) => {
        if (city){
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=503ce137a722c9fccc9c9104964b0132')
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                //Logic for mantain the last 5 results
                let cloneLastResults = this.state.lastResults;
                if (typeof cloneLastResults[4] !== 'undefined'){
                    cloneLastResults.shift();
                }
                if (!cloneLastResults.find(k => k === city)){
                    cloneLastResults.push(city);
                }
                //End logic
                this.setState({ 
                    dataWeather: response.main,
                    coord: response.coord,
                    lastResults: cloneLastResults
                })
            });
        }
    }

    buildDataColumn = () => {
        let data = new Array(5);
        if (this.state.dataWeather){
            data.push(this.state.dataWeather.humidity);
            data.push(this.state.dataWeather.pressure);
            data.push(this.state.dataWeather.humidity);
            data.push(this.state.dataWeather.temp_max);
            data.push(this.state.dataWeather.temp_min);
        }
        return data;
    }

    buildHeadersColumn = () => {
        let columns = new Array(5);
        columns.push('Temperature');
        columns.push('Pressure');
        columns.push('Humidity');
        columns.push('Max Temperature');
        columns.push('Min Temperature');
        return columns;
    }

    removeLastResult = (index) => {
        let cloneLastResults = this.state.lastResults;
        cloneLastResults.splice(index,1);
        this.setState({
            lastResults: cloneLastResults
        });
    }

    renderLastResults = (lastResult,index) => {
        return (  
            <div className="btn pill">
                {lastResult} 
                <div className="spinner-img" onClick={ () => this.getQuery(lastResult)}></div>
                <div className="cross-img" onClick={() => this.removeLastResult(index)}></div>
            </div>
        );
    }

    buildSearchResultsBlock = () => {
        return (
            <div>
                <SearchResults columns={this.buildHeadersColumn()} dataColumns={this.buildDataColumn()} />
                <GoogleMap 
                    lat={this.state.coord.lat}
                    lon={this.state.coord.lon}
                />
            </div>
        )
    }

    render() {
    return (
        <div>
        <SearchInput searchByCity={this.getQuery} />
        <div>
            {this.state.lastResults.map(this.renderLastResults,this)}
        </div>
            { this.state.dataWeather ? this.buildSearchResultsBlock() : null }
        </div>
    )
    }
}

export default Search;