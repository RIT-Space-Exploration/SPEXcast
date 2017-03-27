import axios from 'axios';
//import FeedMe from 'feedme';
import { Readable } from 'stream';

export function fetchEpisodes() {
  return axios.get('https://spexcast.csh.rit.edu/')
  .then(res => {
    return res.data;
    /*const parser  = new FeedMe(true);
    const s = new Readable();
    s.push(res.data);
    s.pipe(parser);
    parser.on('end', function() {
        return parser.done();
    });*/
  });
}