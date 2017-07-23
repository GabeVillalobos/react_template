import React from 'react';
import Header from '../lib/components/Header/Header.jsx';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('test', () => {
  it('should stuff and things', () => {
    const renderedHeader = shallow(<Header/>);
    expect(renderedHeader.length).to.equal(1);
  });

  it('should fail immediately', () => {
    expect(false).to.be.true;
  });
});
