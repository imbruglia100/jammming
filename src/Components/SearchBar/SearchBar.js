import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.state = {term: null};
    }

    handleTermChange(e){
        this.setState({term: e.target.value});
            if(e.target.value){
            this.search();
            console.log("Searching");
        }
    }

    search(){
        if(this.state.term){
        this.props.onSearch(this.state.term);
    }
    }
    render(){
        return (
        <div className="SearchBar">
            <input type='text' onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">Search</button>
        </div>
        );
    }
}