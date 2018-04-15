import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Products from '../Products';
import Categories from '../Categories';
import './index.scss';

export class Menu extends React.Component {

  state = {
    categories: [],
    products: [],
    chosenCategory: '',
    searchTerm: ''
  }

  componentDidMount = () => {
    axios.get('https://api.gousto.co.uk/products/v2.0/categories').then((response) => {
      response.data.data.map((category) => {
        category.active = false;
        this.setState({categories: [...this.state.categories, category]})
      })
    })
    axios.get('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120').then((response) => {
      response.data.data.map((product) => {
        product.showDescription = false;
        this.setState({products: [...this.state.products, product]})
      })
    })
  }

  updateSelectedCategory = (category) => {
    const title = category.title;
    this.setState({chosenCategory: title});
    this.activateCategory(category)
  }

  search = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filterProducts = () => {
    return this.state.products.filter((product => (
      product.categories.some((cat) => (
         cat.title == this.state.chosenCategory
      ))
    )))
  }

  showAvailableCategories = () => {
    return this.state.categories.filter((category) => (
      this.state.products.some((product) => (
        product.categories.some((prod) => (
          category.title == prod.title
        ))
      ))
    ))
  }

  toggleDescription = (product) => {
    const products = [...this.state.products];
    const findProduct = this.state.products.find(prod => prod.title == product.title)
    findProduct.showDescription = !findProduct.showDescription;
    this.setState({findProduct})
  }

  showProductDescription = (product) => {
    return product.showDescription ? product.description : null
  }

  activeCategory = (category) => {
    return category.active ? 'active' : ''
  }

  activateCategory = (category) => {
    let categories = [...this.state.categories];
    let findCategory = this.state.categories.find(cat => cat.title == category.title)
    findCategory.active = true;
    let unfilteredCategories = this.state.categories.filter(cat => cat.title != category.title)
    unfilteredCategories.map((unfilteredCategory) => {
      unfilteredCategory.active = false
      this.setState({unfilteredCategory})
    })
    this.setState({findCategory})
  }

  render(){
    return(
      <div className="menuContainer">
        <Products
          showAvailableCategories={this.showAvailableCategories}
          activeCategory={this.activeCategory}
          updateSelectedCategory={this.updateSelectedCategory}
        />
      <input
        onChange={this.search}
      />
      <Categories
        filterProducts={this.filterProducts}
        toggleDescription={this.toggleDescription}
        showProductDescription={this.showProductDescription}
        searchTerm={this.state.searchTerm}
      />
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
