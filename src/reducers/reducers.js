import playlist from '../INITIAL_STATE';
import { ADD_TRACK } from '../constants';
import { load } from 'redux-localstorage-simple';


let Playlist = load({namespace: 'playlist'})


if (!Playlist || !Playlist.playlist || !Playlist.playlist.lenght){
  Playlist = {
    playlist: [...playlist],
  }
}


const tracks = (state=Playlist.playlist, {type, id, inputSinger, inputSong}) => {
  switch (type) {
    case ADD_TRACK:
      return [
        ...state,
        {
          id,
          singer: inputSinger,
          song: inputSong
        }
      ]
    default:
      return state;

  }
}


export default tracks;
