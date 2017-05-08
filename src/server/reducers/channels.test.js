import test from 'tape';
import { addChannel } from '../actions';
import reducer from './channels';

test('Server channels reducer', t => {

    t.test('addChannel action', s => {

        const initialState = [];
        const action = addChannel('testchan');
        const finalState = reducer(initialState, action);

        s.ok(finalState instanceof Array);
        s.equals(finalState.length, 1);
        s.equals(finalState[0].name, 'testchan');
        s.end();
    });

    t.end();
});