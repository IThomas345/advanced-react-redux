import { mount } from "enzyme";
import React from "react";

import Root from 'Root';
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list a comments and display them', (done) => {
    //Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    //Find the 'fetchComments' button and click on it
    wrapped.find('.fetch-comments').simulate('click');

    

    //wait for response
    moxios.wait(() => {
        wrapped.update();

        //Expect to find a list of comments!
        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    });//let moxios kick in

});