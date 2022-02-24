import React from "react";
import "./Track.css";

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.toggleTrack = this.toggleTrack.bind(this);
        this.state ={
            isRemoval: this.props.isRemoval
        }
    }
    addTrack() {
        this.props.onAdd(this.props.track);
        console.log(this.props.isRemoval);
    }
    removeTrack(){
        this.props.onRemove(this.props.track)
    }
    toggleTrack(){
        this.props.onPlay(this.props.track)
    }
    render(){
        return (
        <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            {this.state.isRemoval === "false"? 
            <div className="Button-Handle">
                <button className="Track-action" onClick={this.addTrack}>+</button> 
                <button className="Track-action" onClick={this.toggleTrack}>P</button>
            </div>:
            <button className="Track-action" onClick={this.removeTrack}>-</button>
            }
        </div>
        );
    }
}