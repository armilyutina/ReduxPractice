import React, { Component } from 'react';

import { connect } from 'react-redux';

import './Playlist.css';
import './components/Title/Title.css';
import './components/Button/Button.css';

import Title from './components/Title/Title';
import GroupButton from './components/GroupButton/GroupButton';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

import { addTracks, filters } from './actions/actions';


class Playlist extends Component {

  state = {
    mainTheme: false,
    searchInput: '',
    showData: false,
    singer: ''
  }

  handleSwitcherOn = () => {
    this.setState({ mainTheme: false })
  }

  handleSwitcherOff = () => {
    this.setState({ mainTheme: true })
  }

  handleInputChange = ({ target: {value}}) => {
    this.setState({
        searchInput: value
    })
  }

  handleDataSearch = () => {

    const { filters } = this.props;
    const { searchInput } = this.state;

    filters(searchInput)
  }


  handleDataShow = () => {
    this.setState({
      showData: !this.state.showData,
    })
  }

  handleInputSingerChange = ({ target: {value} }) => {
     this.setState({
      singer: value,
    })
  }


  message = ({ key }) => {

      const { addTracks } = this.props;
      const { singer } = this.state

      const [inputSinger, inputSong] = singer.split(" ")

      if(key === 'Enter' && singer.length > 3 ){
        addTracks((new Date()).getTime(), inputSinger, inputSong)
        this.setState({
          singer: '',
        })
      }
  }


  render(){

    const { mainTheme, searchInput, showData, singer } = this.state;
    const { tracks, filtered } = this.props;

    return(
      <div className = { mainTheme ? 'white' : 'black'}>
            <GroupButton>
                <Button onClick = {this.handleSwitcherOn} text = 'ON'/>
                <Button onClick = {this.handleSwitcherOff} text = 'OFF'/>
            </GroupButton>

            <Title title = 'PLAYLIST' className = 'title'/>

            <Input placeholder = 'Tap to search..' value = {searchInput} name = 'searchInput' onChange = {this.handleInputChange} onKeyPress = {this.handleDataSearch}/>
            <span><Button onClick = {this.handleDataSearch} text = 'SEARCH' className = 'button' />
            <Button onClick = {this.handleDataShow} text = 'SHOW ALL' className = 'button' />
            </span>

            <ul>
              {
                [...filtered].length
                ? [...filtered].map(item => <li key = {item.id}>{item.singer} : {item.song}</li>)
                : "NOTHING SEARCH"
              }
            </ul>


            {
              showData
              ? [...tracks].map(item => <div key = {item.id}>{item.singer} : {item.song}</div>)
              : null
            }

            <div>

              <Input placeholder='singer' value = {singer} name = 'singer' onKeyPress = {this.message} onChange = {this.handleInputSingerChange} />

            </div>

      </div>
    );
  }
}



export default connect(
({ tracks, filtered }) => ({
    tracks,
    filtered
  }),
  { addTracks, filters}
)(Playlist);
