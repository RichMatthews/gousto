import React from 'react';
import { Menu } from './index';
import { shallow } from 'enzyme';
import Products from '../Products';
import Categories from '../Categories';

describe('Menu Component', () => {
  let wrapper;
  let categoriesStub = [
    {id: 1, title: 'Drinks', active: true},
    {id: 2, title: 'kitchenware', active: false},
    {id: 3, title: 'Snacks', active: false}
  ];
  let productsStub = [
    {id: 1, title: 'wine01', description: 'the description', showDescription: false, categories: [{title: 'wine'}]},
    {id: 2, title: 'coke', description: 'the description', showDescription: false, categories: [{title: 'Drinks'}]},
    {id: 3, title: 'fanta', description: 'the description', showDescription: false, categories: [{title: 'Drinks'}]},
    {id: 4, title: 'burgers', description: 'the description', showDescription: false, categories: [{title: 'Snacks'}]}
  ];
  wrapper = shallow(<Menu />);
    wrapper.setState({products: productsStub})
    wrapper.setState({categories: categoriesStub})
  it('should render a menu container component', () => {
    expect(wrapper.find('.menuContainer').length).toEqual(1);
  });
  it('should render the Product component', () => {
    expect(wrapper.find(Products).length).toEqual(1);
  });
  it('should render the Categories component', () => {
    expect(wrapper.find(Categories).length).toEqual(1);
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
    wrapper.setState({chosenCategory: 'Drinks'})
    wrapper.instance().filterProducts();
    expect(wrapper.instance().filterProducts().length).toEqual(2);
  });
  it('should update chosen category when clicked', () => {
    wrapper.setState({chosenCategory: 'Drinks'})
    wrapper.instance().updateSelectedCategory({title: 'Snacks'});
    expect(wrapper.state('chosenCategory')).toEqual('Snacks')
  });
  it('should update chosen category when clicked', () => {
    wrapper.setState({chosenCategory: 'Snacks'})
    const drinks = categoriesStub[0];
    wrapper.instance().updateSelectedCategory({title: 'Drinks'});
    wrapper.instance().activeCategory(drinks)
    expect(wrapper.instance().activeCategory(drinks)).toEqual('active')
  });
  it('should update show description to be true', () => {
    const testProduct = productsStub[0];
    wrapper.instance().toggleDescription(testProduct);
    expect(testProduct.showDescription).toEqual(true)
  });
  it('should update show description to be false', () => {
    const testProduct = productsStub[0];
    testProduct.active = true
    wrapper.instance().toggleDescription(testProduct);
    expect(testProduct.showDescription).toEqual(false)
  });
  it('should add `viewedProduct` className when product is viewed', () => {
    const testProduct = productsStub[0];
    testProduct.active = true
    wrapper.instance().toggleDescription(testProduct);
    expect(wrapper.instance().showProductDescription(testProduct)).toEqual('the description')
  });
  it('should filter the available categories', () => {
    wrapper.instance().showAvailableCategories();
    expect(wrapper.instance().showAvailableCategories().length).toEqual(2)
  });
})
