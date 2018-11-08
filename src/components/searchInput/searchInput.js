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
       <div onClick={this.handleInputChange} 
       style={{display:'inline-block',backgroundColor:'#282c34',width:'130px',height:'35px',color:'white',border:'1px solid #6494c4',cursor:'pointer'}} >Search</div>
     </form>
   )
 }
}

export default SearchInput;