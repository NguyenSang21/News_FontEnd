import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHentryPostData } from '../../../store/store'
import { Link } from 'react-router-dom'
import { url } from '../../../variables/general'

class HentryPost extends Component {
    componentDidMount(){
        if(this.props.items.lenght <= 0)
        {
            this.props.fetchHentryPostData(this.props.metaKey);
        }
    }
  render() {
    const items = this.props.items;
    return (
        <article class="hentry post">
            {
                items.map((prop, key) => (
                    <div>
                        <h1 class="entry-title">{prop.title}</h1>

                        <div class="entry-meta">
                            <span class="entry-author"><i class="fa fa-user"></i> <a href="author.html">Paul Jacobsen</a></span>
                            <span class="entry-date"><i class="fa fa-clock-o"></i> September 16th, 2014</span>
                            <span class="entry-comment"><i class="fa fa-comments"></i> <a href="#comments">6 Comments</a></span>
                            <span class="entry-tags"><i class="fa fa-tags"></i> <a href="#">Lorem</a>, <a href="#">ipsum</a></span>						
                        </div>
            
                        <div class="entry-content" dangerouslySetInnerHTML={{__html: prop.detail}}>
                                                                                
                        </div>
                    </div>
                ))
            }

            <footer class="entry-footer clearfix">

                <div class="col-left">

                    <div class="author-bio clearfix">			
                        <img alt='Jane Doe' src='http://placehold.it/90x90' class='avatar avatar-80 current-author photo' width="80" height="80" />				
                        <div class="description">
                            <h3 class="name"><a href="#">Paul Jacobsen</a></h3>
                            <p class="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labored et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </div>						

                </div>

                <div class="col-right">

                    <div class="newsletter-form">
                        <h3>Get the <strong>latest news</strong> in your inbox, free!</h3>    
                        <form role="form">
                            <input type="text" placeHolder="Enter your email"/>
                            <button class="btn" type="button">Subscribe</button>
                        </form>
                    </div>

                    <div class="entry-share clearfix">
                        <h3>Share This Post</h3>
                        <ul>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-envelope-o"></i></a></li>
                            <li><a href="#"><i class="fa fa-print"></i></a></li>														
                        </ul>
                    </div>

                </div>

            </footer>

            <div class="related-posts">
                <h3>You might also like:</h3>
                <ul class="clearfix">
                    <li><a href="post_reviews.html"><img src="http://placehold.it/344x193" alt=""/><h2 class="entry-title">Local ice cream shop grand opening (reviews)</h2></a></li>
                    <li><a href="post_full.html"><img src="http://placehold.it/344x193" alt=""/><h2 class="entry-title">Sailor's ship was hit by kamikaze (full width)</h2></a></li>
                    <li><a href="post_video.html"><img src="http://placehold.it/344x193" alt=""/><h2 class="entry-title">Tips for your house painting project (video)</h2></a></li>
                    <li><a href="post_gallery.html"><img src="http://placehold.it/344x193" alt=""/><h2 class="entry-title">Big plans for Seaview Marina (gallery)</h2></a></li>					        
                </ul>
            </div>						

            <div class="clearfix"></div>

        </article>
    )
  }
}

HentryPost.serverFetch = fetchHentryPostData;

const mapStatetoProps = ( state ) => ({
    items: state.hentryPostData,
    metaKey: state.metaKey
});

const mapDispatchToProps = {
    fetchHentryPostData,
}

export default connect(mapStatetoProps, mapDispatchToProps)(HentryPost);
