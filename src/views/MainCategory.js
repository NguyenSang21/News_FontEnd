import React, { Component } from 'react';
import FeaturedContent from '../components/common/itemsCategory/FeaturedContent';
import LatestNews from '../components/common/LatestNews';
import TabsContainer from '../components/common/TabsContainer';
import CategoryBox from '../components/common/itemsCategory/CategoryBox';
import { fetchMainCategoryData } from "../store/store";
import {connect} from 'react-redux';


class MainCategory extends Component {
  render() {

    return (
        <main id="main" class="site-main container" role="main" style={{'display':'block'}}>

        <div id="primary" class="content-area column">
            
            <FeaturedContent/> 

            <div class="content-ad">
                <a href="http://www.theme-junkie.com/"><img src="http://placehold.it/728x90" alt=""/></a>
            </div>  

            <CategoryBox/>

        </div>

        <div class="sidbear sidebar1 column">

            <LatestNews/>

            <div class="widget widget_latest_comments">

                <h3 class="widget-title"><strong>Opinions</strong></h3>

                <ul>
                    <li>
                        <a href="post.html#comments">
                            <img class="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                            <h3 class="name">Jack Lenox</h3>
                            <div class="comment">
                                If you make yourself an ass, don't complain if people ride you.
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="post.html#comments">
                            <img class="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                            <h3 class="name">Kevin Koehler</h3>
                            <div class="comment">
                                Keep good men company and you shall be of the number.
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="post.html#comments">
                            <img class="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                            <h3 class="name">Ben Lowery</h3>
                            <div class="comment">
                                Experience is the father of wisdom and memory the mother.
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="post.html#comments">
                            <img class="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                            <h3 class="name">Neha Gajjar</h3>
                            <div class="comment">
                                Happy is the man who learns from the misfortunes of others.
                            </div>
                        </a>
                    </li>														
                </ul>

            </div>

            <div class="widget">
                <h3 class="widget-title"><strong>General Widget</strong></h3>
                <ul>
                    <li><a href="#">Just Another List Item 1</a></li>
                    <li><a href="#">Just Another List Item 2</a></li>
                    <li><a href="#">Just Another List Item 3</a></li>                               
                </ul>                       
            </div>

            <div class="widget widget_ads">
                <h3 class="widget-title">Sponsor</h3>
                <a href="#"><img src="http://placehold.it/160x600" alt=""/></a>
            </div>

        </div>

        <div id="secondary" class="widget-area widget-primary sidebar2 column" role="complementary">

            <div class="widget widget_ads">
                <h3 class="widget-title">Advertisement</h3>
                <a href="http://www.theme-junkie.com/" target="_blank"><img src="http://placehold.it/300x250" alt="Ad Widget" /></a>
            </div>

            <div class="widget widget_social clearfix">
                <ul>
                    <li><a href="#" title="Twitter"><i class="fa fa-twitter"></i><span><strong>5,600</strong></span><span>Followers</span></a></li>
                    <li><a href="#" title="Facebook"><i class="fa fa-facebook"></i><span><strong>1,986</strong></span><span>Fans</span></a></li>            
                    <li><a href="#" title="GooglePlus"><i class="fa fa-google-plus"></i><span><strong>1,300</strong></span><span>In Circle</span></a></li>
                    <li><a href="#" title="RSS"><i class="fa fa-rss"></i><span><strong>20,000</strong></span><span>Subscribers</span></a></li>
                </ul>
            </div>

            <div class="widget widget_newsletter">
                <h3 class="widget-title">Newsletter</h3>
                <div class="newsletter-container">
                <p>Subscribe to our newsletter to receive breaking news by email.</p>    
                <form role="form">
                    <input type="text" placeHolder="Enter your email..."/>
                    <button class="btn" type="button">Signup</button>
                </form>
                </div>
            </div>

            <div class="widget widget_tabs">

                <ul class="tabs-nav">
                    <li class="active"><a href="#tab1" title="Popular"><i class="fa fa-star"></i></a></li>
                    <li><a href="#tab2" title="Latest"><i class="fa fa-clock-o"></i></a></li>
                    <li><a href="#tab3" title="Comments"><i class="fa fa-comments"></i></a></li>        
                    <li><a href="#tab4" title="Tags"><i class="fa fa-tags"></i></a></li>
                </ul>

                <TabsContainer/>

            </div>
            
            <div class="widget widget_ads">
                <h3 class="widget-title">Advertisement</h3>  
                <a href="http://www.theme-junkie.com/" target="_blank"><img src="http://placehold.it/300x250" alt="Ad Widget" /></a>
            </div>

            <div class="widget widget_twitter">
                <h3 class="widget-title"><strong>Latest Tweets</strong></h3>
                <ul>
                    <li>RT <a href="#">@envato</a>: <a href="#">#WordPress</a> 3.9.2 is now available as a security release. It is strongly advised to update immediately. <a href="#">http://t.co/PPcIPyrkZz</a> <span class="timestamp"><a href="#">3 hours ago</a></span></li>
                    <li>Heatwave Offer. Sign up for an annual plan and get 3 months of free WP Engine <a href="#">#WordPress</a> hosting! Code: "HeatWave14" <a href="#">http://t.co/bsg79FCgvy</a> <span class="timestamp"><a href="#">1 day ago</a></span></li>
                    <li>BOOM! Theme Junkie is now 5 years old and we've got some presents for you! <a href="#">http://t.co/koSdMC7duxy</a> <span class="timestamp"><a href="#">3 days ago</a></span></li>          
                </ul>
            </div>

            <div class="widget widget_125">
                <h3 class="widget-title"><strong>Sponsors</strong></h3> 
                <a href="#"><img src="http://placehold.it/125x125" alt=""/></a>
                <a href="#"><img class="img-right" src="http://placehold.it/125x125" alt=""/></a>
                <a href="#"><img src="http://placehold.it/125x125" alt=""/></a>
                <a href="#"><img class="img-right" src="http://placehold.it/125x125" alt=""/></a>
            </div>

            <div class="widget">
                <h3 class="widget-title"><strong>General Widget</strong></h3>
                <ul>
                    <li><a href="#">Just Another List Item 1</a></li>
                    <li><a href="#">Just Another List Item 2</a></li>
                    <li><a href="#">Just Another List Item 3</a></li>                               
                </ul>                       
            </div>
            
            <div class="widget widget_ads">
                <h3 class="widget-title">Advertisement</h3>  
                <a href="http://www.theme-junkie.com/" target="_blank"><img src="http://placehold.it/300x600" alt="Ad Widget" /></a>
            </div>

        </div>

        <div class="clearfix"></div>


    </main>
    )
  }
};

MainCategory.serverFetch = fetchMainCategoryData;

const mapStateToProps = ( state ) => ( {
    items: state.mainCategoryData,
} );

const mapDispatchToProps = {
    fetchMainCategoryData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategory);
