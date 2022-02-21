import React from "react";
import "./Playlist.css";
import {TrackList} from "../TrackList/TrackList.js";
import "./Playlist.css";

export class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e){
        let name = e.target.value;
        this.props.onNameChange(name)
    }
    render() {
        return (
        <div className="Playlist">
            <input onChange={this.handleNameChange} value="New Playlist"/>
            <TrackList tracks={this.props.playlistTracks} 
                       onRemove={this.props.onRemove} 
                       isRemoval='true'></TrackList>

            <button className="Playlist-save" 
                    onClick={this.props.onSave}>
                        SAVE TO SPOTIFY
            </button>
        </div>
        );
    }
}