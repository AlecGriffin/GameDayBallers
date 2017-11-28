import React, { Component } from 'react';
import axios from 'axios'
import {Brush, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import {Row, Col, PageHeader} from 'react-bootstrap'
import Loading from '../Loading/Loading.jsx'


export default class Visualization extends Component {
  constructor(props){
    super(props)

    this.state = {
      artists: [],
      artistDataLoaded: false,
      albumDataLoaded: false,
      trackDataLoaded: false,
      playlistDataLoaded: false
    }
  }

  generateAPICalls(numPages, dataModel){
    const baseURL = 'http://api.hackappellas.me/'
    const pageSelection = '?page='

    var promises = []
      for(let i = 1; i <= numPages; i++){
        promises.push(axios.get(baseURL + dataModel + '/' + pageSelection + i))
      }
    return promises
  }

  componentDidMount(){
    const axiosCalls = [
      axios.get('http://api.hackappellas.me/artists/?page=1'),
      axios.get('http://api.hackappellas.me/albums/?page=1'),
      axios.get('http://api.hackappellas.me/tracks/?page=1'),
      axios.get('http://api.hackappellas.me/playlists/?page=1')
    ]



    axios.all(axiosCalls).then(axios.spread((artists, albums, tracks, playlists) =>{
      const dataModels = ['artists', 'albums', 'tracks', 'playlists']
      const numPages = [artists.data.pages, albums.data.pages, tracks.data.pages, playlists.data.pages]
      const promises = []
      for(let i = 0; i < dataModels.length; i++){
        promises.push(this.generateAPICalls(numPages[i], dataModels[i]))
      }

        // Artist Data:
        axios.all(promises[0]).then((response) => {
          var result = []
          response.map((artistPage) => {
            result = this.createArtistData(artistPage.data.artists).reduce( function(coll,item){
                coll.push( item );
                return coll;
              }, result );
          })

          this.setState({
            artistData: result,
            artistDataLoaded: true
          })
        })

        // Album Data:
        axios.all(promises[1]).then((response) => {
          var result = []
          response.map((albumPage) => {
            result = this.createAlbumData(albumPage.data.albums).reduce( function(coll,item){
                coll.push( item );
                return coll;
              }, result );
          })

          // console.log('ALBUM DATA');
          this.setState({
            albumData: result,
            albumDataLoaded: true
          })
        })

        // Track Data:
        axios.all(promises[2]).then((response) => {
          var result = []
          response.map((trackPage) => {
            result = this.createTrackData(trackPage.data.tracks).reduce( function(coll,item){
                coll.push( item );
                return coll;
              }, result );
          })

          this.setState({
            trackData: result,
            trackDataLoaded: true
          })
        })

        // Playlist Data:
        axios.all(promises[3]).then((response) => {
          var result = []
          response.map((playlistPage) => {
            result = this.createPlaylistData(playlistPage.data.playlists).reduce( function(coll,item){
                coll.push( item );
                return coll;
              }, result );
          })

          this.setState({
            playlistData: result,
            playlistDataLoaded: true
          })
        })
    }))

  }

  // ===============================================
  // ===============================================
  createArtistData(data){

    var result = data.map((a) =>{
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

    // console.log(result);
    return result
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
    const allItemsLoaded = this.state.artistDataLoaded && this.state.albumDataLoaded && this.state.trackDataLoaded && this.state.playlistDataLoaded

    return(
      <div className='main'>
      { !allItemsLoaded && <Loading/> }
        <Row>
          { allItemsLoaded &&
            <div className="card display-card">
              <div className="card-body">
                <h1 className="display-3">Visualizations</h1>
              </div>
            </div>
          }
          { allItemsLoaded && (
            <Col sm={12}>
              <div className="card card-white">
                <div className="card-body">
                  <PageHeader>Overview</PageHeader>
                  <p>
                    We were assigned to display the data used to build <a href="http://hackappellas.me">hackappellas.me</a>.
                    We used a library built with react and D3 called Recharts, a composable charting library that can be used to create data
                    visualizations. This library was attractive because it was already built from the ground up to work with React and its associated Virtual DOM.
                    Each of the following Bar Charts displays of all the Artists, Albums, Tracks, and Playlists found within their database.
                    Since there is an enormous amount of data there are sliders present below each chart that allows one to reduce the amount
                    of data displayed for better readability.
                  </p>
                </div>
              </div>
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
                       <XAxis height={160} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false} hide={true}/>
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

          { allItemsLoaded && (
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
                       <XAxis height={160} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false} hide={true}/>
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

          { allItemsLoaded && (
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
                       <XAxis height={160} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false} hide={true}/>
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

          { allItemsLoaded && (
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
                       <XAxis height={160} angle={40} textAnchor="start" dataKey="name" interval={0} tickLine={false} hide={true}/>
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
