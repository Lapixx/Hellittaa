import test from 'tape';
import { receiveChannel, receiveMessage, setChannel } from '../actions';
import reducer from './channels';

test('App channels reducer', t => {

    t.test('receiveChannel action', s => {

        const initialState = [];
        const action = receiveChannel({ id: 'a', name: 'testchan' });
        const finalState = reducer(initialState, action);

        s.ok(finalState instanceof Array);
        s.equals(finalState.length, 1);
        s.equals(finalState[0].name, 'testchan');

        s.end();
    });

    t.test('receiveMessage action', s => {

        const initialState = [{ id: 'a', name: 'testchan', active: false, count: 0 }];
        const action = receiveMessage({ id: 'b', timestamp: Date.now(), channelId: 'a', sender: 'Bob', body: 'Hello world!' });
        const finalState = reducer(initialState, action);

        s.equals(finalState[0].count, 1, 'Increases the unread count for inactive channels');

        const initialState2 = [{ id: 'a', name: 'testchan', active: true, count: 0 }];
        const action2 = receiveMessage({ id: 'b', timestamp: Date.now(), channelId: 'a', sender: 'Bob', body: 'Hello world!' });
        const finalState2 = reducer(initialState2, action2);

        s.equals(finalState2[0].count, 0, 'Leaves the unread count for active channels');

        s.end();
    });

    t.test('setChannel action', s => {

        const initialState = [{ id: 'a', name: 'testchan', active: false, count: 5 }];
        const action = setChannel('a');
        const finalState = reducer(initialState, action);

        s.equals(finalState[0].count, 0, 'Reset the unread count');

        s.end();
    });

    t.end();
});