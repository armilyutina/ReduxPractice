import { ADD_TRACK } from '../constants';


export const addTracks = ({id, singer, song}) => ({
  type: ADD_TRACK,
  id,
  singer,
  song
})
