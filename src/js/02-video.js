import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const PLAYER_CURRENT_TIME = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(PLAYER_CURRENT_TIME, 1000));

if (localStorage['videoplayer-current-time']) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
