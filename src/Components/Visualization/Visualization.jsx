import React, { Component } from 'react';
import axios from 'axios'
import {Brush, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import {Row, Col} from 'react-bootstrap'
import Loading from '../Loading/Loading.jsx'


export default class Visualization extends Component {
  constructor(props){
    super(props)

    this.state = {
      artists: [],
      artistDataLoaded: false
    }
  }

  componentDidMount(){
    const axiosCalls = [
      axios.get('http://api.hackappellas.me/artists/'),
      axios.get('http://api.hackappellas.me/albums/'),
      axios.get('http://api.hackappellas.me/tracks/'),
      axios.get('http://api.hackappellas.me/playlists/')
    ]

    axios.all(axiosCalls).then(axios.spread((artists, albums, tracks, playlists) =>{
      this.setState({
        artistData: this.createArtistData(artists.data.artists),
        albumData: this.createAlbumData(albums.data.albums),
        trackData: this.createTrackData(tracks.data.tracks),
        playlistData: this.createPlaylistData(playlists.data.playlists),
        dataLoaded: true
      })
    }))
  }

  // ===============================================
  // ===============================================
  createArtistData(data){
    return data.map((a) =>{
      var artistName = a.name
      const maxLength = 30
      if(a.name.length > maxLength){
        artistName = artistName.substring(0,maxLength) + "..."
      }
      return {
        name: artistName,
        playcount: a.playcount
      }
    })
  }

  createAlbumData(albums){
    return albums.map((a) =>{
      var albumName = a.name
      const maxLength = 30
      if(a.name.length > maxLength){
        albumName = albumName.substring(0,maxLength) + "..."
      }

      return {
        name: albumName,
        playcount: a.playcount,
        artist: a.artist.name
      }
    })
  }

  createTrackData(tracks){
    return tracks.map((a) =>{
      var trackName = a.name
      const maxLength = 30
      if(a.name.length > maxLength){
        trackName = trackName.substring(0,maxLength) + "..."
      }

      return {
        name: trackName,
        playcount: a.playcount
      }
    })
  }


    createPlaylistData(playlists){
      return playlists.map((a) =>{
        var playlistName = a.name
        const maxLength = 30
        if(a.name.length > maxLength){
          playlistName = playlistName.substring(0,maxLength) + "..."
        }
        return {
          name: playlistName,
          numFollowers: a.numFollowers
        }
      })
    }
  // ===============================================
  // ===============================================

  render(){

    return(
      <div className='main'>
        <h1>Visualizations:</h1>
        { !this.state.dataLoaded && <Loading/> }
        <Row>
          { this.state.dataLoaded && (
            <Col sm={12}>
            <div className="card chart-card">
              <div className="card-title">
                Artists
              </div>
              <div className="card-body">
                <div className="chart-body-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={this.state.artistData.sort((a,b) =>{return b.playcount - a.playcount})}
                       margin={{right: 30, left: 20, bottom: 20}}>
                       <Brush dataKey='name' height={30} stroke="#ff7300"/>
                       <XAxis height={140} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
                       <YAxis/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
                       <Bar dataKey="playcount" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Col>)}

          { this.state.dataLoaded && (
            <Col sm={12}>
            <div className="card chart-card">
              <div className="card-title">
                Albums
              </div>
              <div className="card-body">
                <div className="chart-body-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={this.state.albumData.sort((a,b) =>{return b.playcount - a.playcount})}
                       margin={{right: 30, left: 20, bottom: 20}}>
                       <XAxis height={140} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
                       <YAxis/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>

                       <Brush dataKey='name' height={30} stroke="#ff7300"/>
                       <Bar dataKey="playcount" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Col>)}

          { this.state.dataLoaded && (
            <Col sm={12}>
            <div className="card chart-card">
              <div className="card-title">
                Tracks
              </div>
              <div className="card-body">
                <div className="chart-body-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={this.state.trackData.sort((a,b) =>{return b.playcount - a.playcount})}
                       margin={{right: 30, left: 20, bottom: 20}}>
                       <XAxis height={140} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
                       <YAxis/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>

                       <Brush dataKey='name' height={30} stroke="#ff7300"/>
                       <Bar dataKey="playcount" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Col>)}

          { this.state.dataLoaded && (
            <Col sm={12}>
            <div className="card chart-card">
              <div className="card-title">
                Playlists
              </div>
              <div className="card-body">
                <div className="chart-body-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={this.state.playlistData.sort((a,b) =>{return b.numFollowers - a.numFollowers})}
                       margin={{right: 30, left: 20, bottom: 20}}>
                       <XAxis height={140} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
                       <YAxis/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>

                       <Brush dataKey='name' height={30} stroke="#ff7300"/>
                       <Bar dataKey="numFollowers" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Col>)}

        </Row>
      </div>
    )
  }
}
