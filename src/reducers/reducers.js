import { ADD_TRACK } from '../constants';
import INITIAL_STATE from '../INITIAL_STATE';



const addTracks = (state=INITIAL_STATE, {type, id, singer, song}) => {
  switch (type) {
    case ADD_TRACK:
      return [
        ...state,
        {
          id,
          singer,
          song
        }
      ]
    default: return state;

  }
}


export default addTracks;
