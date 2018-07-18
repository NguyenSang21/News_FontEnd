import React, { Component } from 'react'
import CategoryTab from '../Tab/CategoryTab';
import Helmet from "react-helmet";

class Header extends Component {
  render() {
    return (
        <header id="masthead" className="site-header container clearfix" role="banner">
          <Helmet>
            <title>Contact Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
            <meta name="description" content="This is a proof of concept for React SSR" />
            <meta name="description" content="This is a proof of concept for React SSR" />
          </Helmet>
        <div id="logo">
          <a href="/"><img src="/images/logo.png" alt="Logo Title" /></a>
        </div>
  
        <div className="header-ad">
          <a href="#"><img src="http://placehold.it/728x90" alt=""/></a>
        </div>
  
        <div className="clearfix"></div>
  
  
        <div id="secondary-bar" className="clearfix">
  
          <a id="secondary-mobile-menu" href="#"><i className="fa fa-bars"></i> <span>Secondary Menu</span></a>
              <CategoryTab/>
              <div className="header-search">
  
                <i className="fa fa-search"></i>
                <i className="fa fa-times"></i>

              <div className="search-form">

              <form action="search.html" id="searchform" method="get">
                <input name="s" type="text" />
                <button type="submit">Search</button>
              </form>
              
            </div> 
  
          </div>
  
        </div>	
  
      </header>
    )
  }
}

export default Header;