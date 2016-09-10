import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loading from '../../app/components/loading';

describe("Loading component", function() {

    it("has className", function() {
        expect(shallow(<Loading />).is('.loading')).to.equal(true);
    });

    it("has inner divs", function() {
        expect(shallow(<Loading />).find('> div').length).to.equal(12);
    });
});
