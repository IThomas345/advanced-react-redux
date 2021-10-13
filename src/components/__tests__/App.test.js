import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from "components/App";
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});


it('shows a comment box', () => {
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div);

    // //Looks insidde the div
    // //and checks to see if the commentBox is in there
    // //console.log(div.innerHTML);

    // expect(div.innerHTML).toContain('Comment Box');

    // ReactDOM.unmountComponentAtNode(div);

    expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment list', () => { 

    expect(wrapped.find(CommentList)).toHaveLength(1);
});

