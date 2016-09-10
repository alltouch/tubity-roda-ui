import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Form from '../../app/components/form';

describe("Form component", function() {

    it("has className", function() {
        expect(shallow(<Form />).is('form.form')).to.equal(true);
    });

    it("has inner elements", function() {
        const wrapper = shallow(<Form />);
        expect(wrapper.find('h1').length).to.equal(1);
        expect(wrapper.find('input').length).to.equal(1);
        expect(wrapper.find('button').length).to.equal(1);
        expect(wrapper.find('.error-message').length).to.equal(1);
    });

    it("input change", function() {
        const wrapper = shallow(<Form />);
        expect(wrapper.state('inputValue')).to.equal('');
        wrapper.find('input').simulate('change', {
            target: { value: 'abc' }
        });
        expect(wrapper.state('inputValue')).to.equal('abc');
    });

    it("error message shown", function() {
        const wrapper = shallow(<Form />);
        expect(wrapper.find('.error-message').text()).to.not.be.ok;
        wrapper.find('input').simulate('change', {
            target: { value: 'abc' }
        });
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(wrapper.find('.error-message').text()).to.be.ok;
    });

    it("call submit", function() {
        let resultUrl = '';
        let onSubmit = (_resultUrl) => {
            resultUrl = _resultUrl;
        };
        let checkUrl = 'http://google.com';

        const wrapper = shallow(<Form onSubmit={onSubmit} />);
        wrapper.find('input').simulate('change', {
            target: { value: checkUrl }
        });
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(resultUrl).to.equal(checkUrl);
    });

});
