import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideosList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAIpPHwOwvAWx61YyaFCV-rXnXFPxBA-jM' ;



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [] ,
      selectedVideo : null
     } ;

    this.videoSearch('Suits')

  }

  videoSearch(term){
    YTSearch( {key : API_KEY , term : term } , (videos) => {
      this.setState({
        videos : videos ,
        selectedVideo : videos[0]
      })
    } )
  }

  render(){

      const videoSearch = _.debounce(term => this.videoSearch(term) , 200)

      return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideosList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App/> ,
  document.getElementById('app')
)
