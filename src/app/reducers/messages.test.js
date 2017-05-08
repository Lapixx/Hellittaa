import test from 'tape';
import { sendMessage, receiveMessage } from '../actions';
import reducer from './messages';

test('Server connections reducer', t => {

    t.test('sendMessage action', s => {

        const initialState = [];
        const action = sendMessage('c', 'Alice', 'Hello World!');
        const finalState = reducer(initialState, action);

        s.ok(finalState instanceof Array);
        s.equals(finalState.length, 1);
        s.equals(finalState[0].body, 'Hello World!');
        s.equals(finalState[0].mine, true);

        s.end();
    });

    t.test('receiveMessage action', s => {

        const initialState = [];
        const action = receiveMessage({ id: 'a', timestamp: 1, channelId: 'b', sender: 'Bob', body: 'Hi' });
        const finalState = reducer(initialState, action);

        s.ok(finalState instanceof Array);
        s.equals(finalState.length, 1);
        s.equals(finalState[0].body, 'Hi');
        s.equals(finalState[0].mine, false);

        s.end();
    });

    t.end();
});