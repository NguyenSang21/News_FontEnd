import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer id="footer" className="container clearfix">
  
        <div className="footer-column footer-column-1">
          <div className="widget">
            <h3 className="widget-title">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
  
        <div className="footer-column footer-column-2">
          <div className="widget widget_posts_thumbnail">
            <h3 className="widget-title">Popular Posts</h3>
            <ul>
              <li>
                <a href="post.html" rel="bookmark"><img src="http://placehold.it/52x52" className="entry-thumbnail" alt="Post Title" /></a>
                <a href="post.html" rel="bookmark">How to skateboard for beginners</a>
                <div className="entry-meta">
                  <span className="entry-date">Sep. 15, 2014</span>
                </div>									
              </li>					
              <li>
                <a href="post.html" rel="bookmark"><img src="http://placehold.it/52x52" className="entry-thumbnail" alt="Post Title" /></a>
                <a href="post.html" rel="bookmark">Tips for getting started in travel writing</a>
                <div className="entry-meta">
                  <span className="entry-date">Sep. 15, 2014</span>
                </div>	
              </li>
              <li>
                <a href="post.html" rel="bookmark"><img src="http://placehold.it/52x52" className="entry-thumbnail" alt="Post Title" /></a>
                <a href="post.html" rel="bookmark">New life for old building in East Rochester</a>
                <div className="entry-meta">
                  <span className="entry-date">Sep. 15, 2014</span>
                </div>									
              </li>												
            </ul>
          </div>
        </div>
  
        <div className="footer-column footer-column-3">
            <div className="widget widget_twitter">
                <h3 className="widget-title"><strong>Latest Tweets</strong></h3>
                <ul>
                    <li>RT <a href="#">@envato</a>: <a href="#">#WordPress</a> 3.9.2 is now available as a security release. It is strongly advised to update immediately. <a href="#">http://t.co/PPcIPyrkZz</a> <span className="timestamp"><a href="#">3 hours ago</a></span></li>
                    <li>Heatwave Offer. Sign up for an annual plan and get 3 months of free WP Engine <a href="#">#WordPress</a> hosting! Code: "HeatWave14" <a href="#">http://t.co/bsg79FCgvy</a> <span className="timestamp"><a href="#">1 day ago</a></span></li>       
                </ul>
          </div>
        </div>
  
        <div className="footer-column footer-column-4">
          <div className="widget widget_newsletter">
            <h3 className="widget-title">Newsletter</h3>
            <p>Make sure you don't miss interesting happenings by joining our newsletter program. We don't do spam.</p>		
            <form role="form">
              <input type="text" placeHolder="Enter your email..."/>
              <button className="btn" type="button">Signup</button>
            </form>     
          </div>
        </div>				
  
        <div id="site-bottom" className="container clearfix">
  
          <nav id="footer-nav">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Subscribe</a></li>													
              <li><a href="#">Contact</a></li>
              <li><a href="#">Advertise</a></li>							
              <li><a href="#">Privacy</a></li>
            </ul>
          </nav>
  
          <div className="copyright">
            &copy; 2018 <a href="index.html">News Social</a> &middot; Developed By <a href="http://tibi.vn">Tibi Connecting Solutions</a>
          </div>
  
        </div>
  
      </footer>
    )
  }
}

export default Footer;