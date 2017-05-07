import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getNickname } from '../reducers';
import { setNickname } from '../actions/index';

import Home from '../components/Home';
import Login from '../components/Login';

const mapStateToProps = state => ({
    nickname: getNickname(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: nickname => dispatch(setNickname(nickname))
});

let App = ({ nickname, onSubmit }) => nickname ?
    <Home nickname={nickname} /> :
    <Login onSubmit={onSubmit} />;

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default App;
