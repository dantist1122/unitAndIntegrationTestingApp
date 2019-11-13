import React from 'react';
import CommentBox from "components/CommentBox";
import CommentList from './CommentList';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeAuth} from '../actions/index';

class App extends React.Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={()=>this.props.changeAuth(false)}>
                    Sing Out
                </button>
            )
        } else {
            return (
                <button onClick={()=>this.props.changeAuth(true)}>
                    Sing In
                </button>
            )
        }
    }


    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }


    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path='/post' exact component={CommentBox}/>
                <Route path='/' exact component={CommentList}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, {changeAuth})(App);
