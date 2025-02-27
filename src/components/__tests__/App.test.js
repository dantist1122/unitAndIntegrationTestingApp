import React from 'react';
import App from 'components/App';
import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from "components/CommentList";

let wrapped;
beforeEach(()=> {
   wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('show a comment list', () => {
   expect(wrapped.find(CommentList).length).toEqual(1);
});
