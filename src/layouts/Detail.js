import React, { Component } from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainDetail from '../views/MainDetail';

export default class Detail extends Component {
  render() {
    return (
      <div id="page" class="hfeed site clearfix">
          <Header/>
          <MainDetail/>
          <Footer/>
      </div>
    )
  }
}
