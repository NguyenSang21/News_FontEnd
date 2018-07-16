import React, { Component } from 'react'
import Header from '../components/Header/Header';
import MainCategory from '../views/MainCategory';
import Footer from '../components/Footer/Footer';

export default class Category extends Component {
  render() {
    return (
      <div id="page" class="hfeed site clearfix">
          <Header/>
          <MainCategory/>
          <Footer/>
      </div>
    )
  }
}
