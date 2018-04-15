import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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
    this.setState({chosenCategory: category});
    this.activateCategory(category)
  }

  search = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filterCategories = () => {
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
    let findCategory = this.state.categories.find(cat => cat.title == category)
    findCategory.active = true;
    let unfilteredCategories = this.state.categories.filter(cat => cat.title != category)
    unfilteredCategories.map((unfilteredCategory) => {
      unfilteredCategory.active = false
      this.setState({unfilteredCategory})
    })
    this.setState({findCategory})
  }

  render(){
    return(
      <div className="menuContainer">
        <div className="availableCategories">
          {this.showAvailableCategories().map(category => (
            <div className={`${this.activeCategory(category)} availableCategory`} onClick={() => this.updateSelectedCategory(category.title)}>
              {category.title}
            </div>
          ))}
        </div>
      <input
        onChange={this.search}
      />
      {
        (this.filterCategories()).filter(product => product.title.toLowerCase().includes(this.state.searchTerm)).map((product) => (
          <div onClick={() => this.toggleDescription(product)}>
            <div className={this.showProductDescription(product) ? 'viewedProduct' : ''}>{product.title}</div>
            <div>{this.showProductDescription(product)}</div>
          </div>
        ))
      }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  myState: state.myState
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
