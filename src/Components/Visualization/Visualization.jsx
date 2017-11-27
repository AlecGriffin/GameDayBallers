import React, { Component } from 'react';
import axios from 'axios'
import {Text, ReferenceLine, Brush, RadialBar, RadialBarChart, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Pie, PieChart, Bar, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
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
    console.log(this.props.history.location);
    const axiosCalls = [
      axios.get('http://api.hackappellas.me/artists/'),
      axios.get('http://api.hackappellas.me/albums/'),
      axios.get('http://api.hackappellas.me/tracks/'),
      axios.get('http://api.hackappellas.me/playlists/')
    ]

    axios.all(axiosCalls).then(axios.spread((artists, albums, tracks, playlists) =>{
      console.log('Artists: ');
      console.log(artists.data.artists);

      console.log('Albums: ');
      console.log(albums.data.albums);

      console.log('Tracks: ');
      console.log(tracks.data.tracks);

      console.log('Playlists: ');
      console.log(playlists.data.playlists);
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
        return {
          name: a.name,
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
        { this.state.dataLoaded && (
          <Row>
            <h2>Artists:</h2>
           <BarChart width={1200} height={800} data={this.state.artistData.sort((a,b) =>{return b.playcount - a.playcount})}
              margin={{top: 100, right: 30, left: 20, bottom: 100}}>
              <Brush dataKey='name' height={30} stroke="#ff7300"/>
              <XAxis height={180} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
              <Bar dataKey="playcount" fill="#8884d8" />
           </BarChart>
           </Row>
        )}




        { this.state.dataLoaded && (
          <Row>
            <h2>Albums:</h2>
            <BarChart width={1200} height={800} data={this.state.albumData.sort((a,b) =>{return b.playcount - a.playcount})}
               margin={{top: 100, right: 30, left: 20, bottom: 100}}>
               <XAxis height={180} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>

               <Brush dataKey='name' height={30} stroke="#ff7300"/>
               <Bar dataKey="playcount" fill="#8884d8" />
            </BarChart>
          </Row>

        )}




        { this.state.dataLoaded && (
          <Row>
            <h2>Tracks:</h2>
            <BarChart width={1200} height={800} data={this.state.trackData.sort((a,b) =>{return b.playcount - a.playcount})}
               margin={{top: 100, right: 30, left: 20, bottom: 100}}>
               <XAxis height={180} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>

               <Brush dataKey='name' height={30} stroke="#ff7300"/>
               <Bar dataKey="playcount" fill="#8884d8" />
            </BarChart>
          </Row>
        )}



        { this.state.dataLoaded && (
          <Row>
            <h2>Playlists:</h2>
            <BarChart width={1200} height={800} data={this.state.playlistData.sort((a,b) =>{return b.numFollowers - a.numFollowers})}
               margin={{top: 100, right: 30, left: 20, bottom: 100}}>
               <XAxis height={180} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false}/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>

               <Brush dataKey='name' height={30} stroke="#ff7300"/>
               <Bar dataKey="numFollowers" fill="#8884d8" />
            </BarChart>
          </Row>
        )}
      </div>
    )
  }
}
