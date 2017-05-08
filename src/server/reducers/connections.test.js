import test from 'tape';
import { addConnection, removeConnection } from '../actions';
import reducer from './connections';

test('Server connections reducer', t => {

    t.test('addConnection action', s => {

        const initialState = [];
        const action = addConnection('sock1');
        const finalState = reducer(initialState, action);

        s.ok(finalState instanceof Array);
        s.equals(finalState.length, 1);
        s.equals(finalState[0].socket, 'sock1');
        s.end();
    });

    t.test('removeConnection action', s => {

        const initialState = [{ socket: 'sock1' }, { socket: 'sock2' }, { socket: 'sock3' }];
        const action = removeConnection('sock2');
        const finalState = reducer(initialState, action);

        s.ok(finalState instanceof Array);
        s.equals(finalState.length, 2);
        s.equals(finalState[0].socket, 'sock1');
        s.equals(finalState[1].socket, 'sock3');
        s.end();
    });

    t.end();
});