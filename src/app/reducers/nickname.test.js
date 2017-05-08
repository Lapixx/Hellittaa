import test from 'tape';
import { setNickname } from '../actions';
import reducer from './nickname';

test('Server nickname reducer', t => {

    t.test('setNickname action', s => {

        const initialState = [];
        const action = setNickname('Bob');
        const finalState = reducer(initialState, action);

        s.equals(typeof finalState, 'string');
        s.equals(finalState, 'Bob');
        s.end();
    });

    t.end();
});