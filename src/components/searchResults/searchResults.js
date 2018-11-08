import React, { Component } from 'react'
import './searchResults.css'

class SearchResults extends Component {

    buildTableHeaders = (columns) => {
        return (
            <thead>
                <tr>
                    {columns.map(function(columnName){
                        return <th>{columnName}</th>;
                    })}
                </tr>
            </thead>
        );
    }

    buildTableBody = ( dataColumns ) => {
        return (
            dataColumns.map(function(row){
                return <td>{row}</td>;
                })
        );
    }

    render() {
    return (
            <table className="searchResults-table">
                {this.buildTableHeaders(this.props.columns)}
                {this.buildTableBody(this.props.dataColumns)}
            </table>
    )
    }
}

export default SearchResults;