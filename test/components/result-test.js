import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Result from '../../app/components/result';

describe("Result component", function() {

    let resultUrl = 'http://some.url';

    it("has className", function() {
        expect(shallow(<Result resultUrl={resultUrl} />).is('.result')).to.equal(true);
    });

    it("has h2", function() {
        expect(shallow(<Result resultUrl={resultUrl} />).find('h2').length).to.equal(1);
    });

    it("has result-text", function() {
        expect(shallow(<Result resultUrl={resultUrl} />).find('.result-text').text()).to.equal(resultUrl);
    });

    it("has result-link", function() {
        expect(shallow(<Result resultUrl={resultUrl} />).find('.result-link').html().indexOf(resultUrl)).to.be.above(0);
    });
});
