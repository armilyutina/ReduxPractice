import { ADD_TRACK, FILTER_TRACK } from '../constants';

export const addTracks = (id, inputSinger, inputSong) => ({
  type: ADD_TRACK,
  id,
  inputSinger,
  inputSong
});



export const filters = searchInput => ({
  type: FILTER_TRACK,
  searchInput
});
