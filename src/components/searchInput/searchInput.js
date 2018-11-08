import React, { Component } from 'react'
//@styles
import './searchInput.css';

class SearchInput extends Component {

 handleInputChange = () => {
    this.props.searchByCity(this.search.value);
 }

 render() {
   return (
     <form className="searchInput-form">
       <input
         className="searchInput-input"
         placeholder="Enter a city..."
         ref={input => this.search = input}
       />
       <div onClick={this.handleInputChange} className="searchInput-btn">Search</div>
     </form>
   )
 }
}

export default SearchInput;