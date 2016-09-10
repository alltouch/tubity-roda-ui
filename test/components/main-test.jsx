import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Main from '../../app/components/main';

describe("Main component", function () {

    it("has className", function () {
        expect(shallow(<Main />).is('.app')).to.equal(true);
    });

    it("initial render components", function () {
        const wrapper = mount(<Main />);
        expect(wrapper.find('.form').length).to.equal(1);
        expect(wrapper.find('> .message').text()).to.equal('');
        expect(wrapper.find('.loading').length).to.equal(0);
        expect(wrapper.find('.result').length).to.equal(0);
    });

    it("loading state components", function () {
        const wrapper = mount(<Main />);
        wrapper.setState({
            resultUrl: '',
            loading: true,
            message: ''
        });
        expect(wrapper.find('.form').length).to.equal(1);
        expect(wrapper.find('> .message').text()).to.equal('');
        expect(wrapper.find('.loading').length).to.equal(1);
        expect(wrapper.find('.result').length).to.equal(0);
    });

    it("result state components", function () {
        const wrapper = mount(<Main />);
        wrapper.setState({
            resultUrl: 'http://some.url',
            loading: false,
            message: ''
        });
        expect(wrapper.find('.form').length).to.equal(1);
        expect(wrapper.find('> .message').text()).to.equal('');
        expect(wrapper.find('.loading').length).to.equal(0);
        expect(wrapper.find('.result').length).to.equal(1);
    });

    it("onSubmit state components", function () {
        const wrapper = mount(<Main />);
        const instance = wrapper.instance();
        instance.loadShortUrl = function () {
        };
        instance.onSubmit('some.url');
        expect(wrapper.find('.form').length).to.equal(1);
        expect(wrapper.find('> .message').text()).to.equal('');
        expect(wrapper.find('.loading').length).to.equal(1);
        expect(wrapper.find('.result').length).to.equal(0);
    });

    it("onResponse state components", function () {
        const wrapper = mount(<Main />);
        const instance = wrapper.instance();
        let someUrl = 'http://some.url';
        let otherUrl = 'http://other.url';
        wrapper.setState({
            resultUrl: '',
            loading: true,
            message: ''
        });
        instance.onResponse({
            url: someUrl,
            shorten_url: otherUrl
        });
        expect(wrapper.find('.form').length).to.equal(1);
        expect(wrapper.find('> .message').text()).to.equal('');
        expect(wrapper.find('.loading').length).to.equal(0);
        expect(wrapper.find('.result').length).to.equal(1);
        expect(wrapper.find('.result-text').text()).to.equal(otherUrl);
    });

    it("onError state components", function () {
        const wrapper = mount(<Main />);
        const instance = wrapper.instance();
        wrapper.setState({
            resultUrl: '',
            loading: true,
            message: ''
        });
        instance.onError();
        expect(wrapper.find('.form').length).to.equal(1);
        expect(wrapper.find('> .message').text()).to.equal('Connection problems');
        expect(wrapper.find('.loading').length).to.equal(0);
        expect(wrapper.find('.result').length).to.equal(0);
    });
});
