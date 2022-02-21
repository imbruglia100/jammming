import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js';
import Spotify from '../util/Spotify.js';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
    });
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(current => current.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }
  addTrack(track){
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  render(){
    
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
            <SearchResults 
                  searchResults={this.state.searchResults} 
                  onAdd={this.addTrack}/> 

            <Playlist onSave={this.savePlaylist} 
                      onNameChange={this.updatePlaylistName} 
                      playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack}/>
        </div>
      </div>
    </div>);
  }
};

export default App;
