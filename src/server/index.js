import createExpressServer from './createExpressServer';
import createStore from './createStore';
import connectIO from './socketio';

import { addChannel } from './actions';

// setup server, redux store and socket
const server = createExpressServer();
const store = createStore();
connectIO(server, store);

// create some initial channels
const initialChannels = ['General', 'Work', 'Random'];
initialChannels.forEach(chan => store.dispatch(addChannel(chan)));

// start listening
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`--> Server started at http://localhost:${port}`);
});