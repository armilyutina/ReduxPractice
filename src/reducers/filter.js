import { FILTER_TRACK } from '../constants';
import playlist from '../INITIAL_STATE';


const filters = (state = playlist, {type, searchInput}) => {
  switch (type) {
    case FILTER_TRACK:
      const fil = [...state].filter(item => item.singer.includes(searchInput)||item.song.includes(searchInput));
      console.log('searchInput:', searchInput, fil, 'filters');
      return [...state].filter(item => item.singer.includes(searchInput) || item.song.includes(searchInput));
    default:
      return state;
  }
}


export default filters;
