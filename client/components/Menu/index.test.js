import React from 'react';
import { Menu } from './index';
import { shallow } from 'enzyme';

describe('Menu Component', () => {
  let wrapper;
  let categoriesStub = [
    {id: 1, title: 'food & drink'},
    {id: 2, title: 'kitchenware'},
    {id: 3, title: 'snacks'}
  ]
  let productsStub = [
    {id: 1, title: 'wine01', showDescription: false},
    {id: 2, title: 'wine02', showDescription: false},
    {id: 3, title: 'wine03', showDescription: false}
  ]
  wrapper = shallow(<Menu
    categories={categoriesStub}
    products={productsStub}
    />);
  it('should render a menu container component', () => {
    expect(wrapper.find('.menuContainer').length).toEqual(1);
  });
  it('should render a an available categories component', () => {
    expect(wrapper.find('.availableCategories').length).toEqual(1);
  });
  it('should have an initial state of empty string', () => {
    expect(wrapper.state('chosenCategory')).toEqual('');
  });
  it('should update selected category when clicked', () => {
    wrapper.setState({chosenCategory: 'Drinks'});
    expect(wrapper.state('chosenCategory')).toEqual('Drinks');
  });
  it('should update state when item is searched for', () => {
     const input = wrapper.find('input');
     input.simulate('change', {
       target: { value: 'burgers' }
     });
     expect(wrapper.state('searchTerm')).toEqual('burgers');
  });
  it('should filter products when searched for', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: '01' }
    });
    expect(productsStub.length).toEqual(1);
  });
  it('should show a product description when clicked', () => {

  });
  it('should hide a product description when clicked again', () => {

  });
})
