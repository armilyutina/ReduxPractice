import React, { Component } from 'react';

import {  connect } from 'react-redux';

import './Playlist.css';
import './components/Title/Title.css';
import './components/Button/Button.css';

import INITIAL_STATE from './INITIAL_STATE';

import Title from './components/Title/Title';
import GroupButton from './components/GroupButton/GroupButton';
import Button from './components/Button/Button';
import Input from './components/Input/Input';


import { addTracks } from './actions/actions'


class Playlist extends Component {
  state = {
    mainTheme: false,
    searchInput: '',
    playlist: [...INITIAL_STATE],
    filterData: [],
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
    const filter = this.state.playlist.filter(item => item.singer.includes(this.state.searchInput)||item.song.includes(this.state.searchInput));
    this.setState({
      filterData: filter,
      searchInput: '',
    })
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

    const { singer } = this.state

    if(key === 'Enter' && singer.length > 3 ){
      console.log('OnKeyPress')
      addTracks((new Date()).toString(), singer, singer)
      this.setState({singer: ''})
    }
    console.log(singer);
  }


  render(){
    const { playlist, mainTheme, searchInput, filterData, showData, singer } = this.state;

    return(
      <div className = { mainTheme ? 'white' : 'black'}>
            <GroupButton>
                <Button onClick = {this.handleSwitcherOn} text = 'ON'/>
                <Button onClick = {this.handleSwitcherOff} text = 'OFF'/>
            </GroupButton>

            <Title title = 'PLAYLIST' className = 'title'/>

            <Input placeholder = 'Tap to ..' value = {searchInput} name = 'searchInput' onChange = {this.handleInputChange} onKeyPress = {this.handleDataSearch}/>
            <Button onClick = {this.handleDataSearch} text = 'SEARCH' className = 'button' />
            <Button onClick = {this.handleDataShow} text = 'SHOW ALL' className = 'button' />


            <ul>
              {
                filterData.length
                ? filterData.map(item => <li key = {item.id}>{item.singer} {item.song}</li>)
                : "NOTHING SEARCH"
              }
            </ul>


            {
              showData
              ? playlist.map(item => <div key = {item.id}>{item.singer} : {item.song}</div>)
              : null
            }



            <div>

            <span>ADD TRACK</span>
            <Input placeholder='singer' value = {singer} name = 'singer' onKeyPress = {this.message} onChange = {this.handleInputSingerChange} />

            </div>


      </div>
    );
  }
}



export default connect(
  state => ({state}),
  { addTracks }
)(Playlist);
