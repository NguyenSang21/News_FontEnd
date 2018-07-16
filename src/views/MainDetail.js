import React, { Component } from 'react'

export default class MainDetail extends Component {
  render() {
    return (
        <main id="main" class="site-main container" role="main" style={{'display':'block'}}>

        <div id="primary" class="content-area column">

            <div id="breadcrumbs">
                <strong>You are here:</strong> <span class="home-link"><a href="index.html">Home</a></span> <span class="sep">&rarr;</span> <span class="category-link"><a href="category.html">Category Name</a></span> <span class="sep">&rarr;</span> <span class="title">Just another example post</span>
                <span class="post-nav"><a href="post_video.html" title="Previous Post"><i class="fa fa-angle-left"></i></a> <a href="post_full.html" class="Next Post"><i class="fa fa-angle-right"></i></a></span>
            </div>

 
            <article class="hentry post">

                <h1 class="entry-title">Just another example post</h1>

                <div class="entry-meta">
                    <span class="entry-author"><i class="fa fa-user"></i> <a href="author.html">Paul Jacobsen</a></span>
                    <span class="entry-date"><i class="fa fa-clock-o"></i> September 16th, 2014</span>
                    <span class="entry-comment"><i class="fa fa-comments"></i> <a href="#comments">6 Comments</a></span>
                    <span class="entry-tags"><i class="fa fa-tags"></i> <a href="#">Lorem</a>, <a href="#">ipsum</a></span>						
                </div>

                <img class="entry-thumbnail" src="http://placehold.it/728x410" alt="" />

                <div class="entry-content">

                    <p>Tincidunt varius sequi, integer magna ac, donec curabitur. Rhoncus sed. Lectus vitae augue, mauris tincidunt. Ut nec fermentum, dolor vestibulum. <a title="Testing the link styling" href="#">Nunc neque tincidunt, non dictumst tempus</a>. Et id, duis sit arcu, felis porta donec. Proin tincidunt.</p>
                    <p>Cum arcu pretium, sed sed. In nonummy, tempor molestie id, omnis tellus. A risus dolor, vitae et donec, mauris amet posuere. Donec in, nonummy dolor luctus. Laoreet ligula, pretium nisl eleifend, malesuada tincidunt cursus. Congue velit iaculis.</p>

                    <p>Euismod amet leo, cras et massa, eleifend egestas. Urna in nunc, nunc vivamus. Cum arcu pretium, sed sed. In nonummy, tempor molestie id, omnis tellus. A risus dolor, vitae et donec, mauris amet posuere. Donec in, nonummy dolor luctus. Laoreet ligula, pretium nisl eleifend, malesuada tincidunt cursus. Congue velit iaculis.</p>

                    <p><strong> Egestas at amet. Pharetra mauris. </strong>Mattis quam feugiat, iure ipsum. Vel fringilla, accumsan nam rhoncus, orci diam. Aenean sit sodales, urna porttitor. Nulla enim consequat, amet congue. Mauris vulputate, nonummy vel.</p>

                    <p>Euismod amet leo, cras et massa, eleifend egestas. Urna in nunc, nunc vivamus. Cum arcu pretium, sed sed. In nonummy, tempor molestie id, omnis tellus. A risus dolor, vitae et donec, mauris amet posuere. Donec in, nonummy dolor luctus. Laoreet ligula, pretium nisl eleifend, malesuada tincidunt cursus. Congue velit iaculis.</p>
                    <blockquote><p>Tincidunt varius sequi, integer magna ac, donec curabitur. Rhoncus sed. Lectus vitae augue, mauris tincidunt. Ut nec fermentum, dolor vestibulum. Nunc neque tincidunt, non dictumst tempus. Et id, duis sit arcu, felis porta donec. Proin tincidunt.</p>

                    <p><strong> Egestas at amet. Pharetra mauris. </strong>Mattis quam feugiat, iure ipsum. Vel fringilla, accumsan nam rhoncus, orci diam. Aenean sit sodales, urna porttitor. Nulla enim consequat, amet congue. Mauris vulputate, nonummy vel.</p></blockquote>

                    <p>Phasellus lorem aliquam, pede morbi, nulla sed. Urna ut a. Mattis viverra dignissim, suspendisse risus, felis a. Sit nec. Sit egestas condimentum. Tempor quisque sit, commodo justo consequat. Augue fermentum, est vulputate et, purus et. Tincidunt quam enim, ac a pede.</p>
                                                                        
                </div>

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

            <div id="comments">

                <header>
                    <h2>6 Comments - <a href="#respond">Write a Comment</a></h2>
                </header>

                <ol class="commentlist">
                
                    <li class="comment even thread-even depth-1">

                          <div id="li-comment-1" class="comment-container">

                            <img src='http://placehold.it/64x64' class='avatar' alt='' />

                              <div class="comment-head">
                                <span class="name">Jack Lenox</span>
                                <span class="date"><a href="#comment-link">January 11, 2010 at 3:13 pm</a></span>
                                <span class="edit"></span>
                            </div>

                               <div class="comment-entry"  id="comment-1">
                                <p>This is a comment!</p>
                                   <div class="reply">
                                    <a class='comment-reply-link' href='#respond'>Reply</a>
                                </div>
                            </div>

                        </div>

                        <ul class="children">

                            <li class="comment odd alt depth-2">

                                  <div id="li-comment-2" class="comment-container">

                                    <img src='http://placehold.it/64x64' class='avatar' alt='' />
                                    
                                      <div class="comment-head">
                                        <span class="name">Kevin Koehler</span>
                                        <span class="date"><a href="#comment-link">January 11, 2010 at 3:14 pm</a></span>
                                        <span class="edit"></span>
                                    </div>

                                       <div class="comment-entry"  id="comment-2">
                                        <p>This is a threaded reply!</p>
                                        <div class="reply">
                                            <a class='comment-reply-link' href='#respond'>Reply</a>
                                        </div>
                                    </div>

                                </div>

                                <ul class="children">

                                    <li class="comment even depth-3">

                                          <div id="li-comment-3" class="comment-container">

                                            <img src='http://placehold.it/64x64' class='avatar' alt='' />
                                            
                                              <div class="comment-head">
                                                <span class="name">Ben Lowery</span>
                                                <span class="date"><a href="#comment-link">January 11, 2010 at 3:15 pm</a></span>
                                                <span class="edit"></span>
                                            </div>

                                               <div class="comment-entry"  id="comment-3">
                                            <p>And another threaded reply!</p>
                                            
                                                <div class="reply">
                                                    <a class='comment-reply-link' href='#respond'>Reply</a>	                
                                                </div>

                                            </div>

                                        </div>

                                        <ul class="children">

                                            <li class="comment odd alt depth-4">

                                                  <div id="li-comment-4" class="comment-container">

                                                    <img src='http://placehold.it/90x90' class='avatar' alt='' />
                                                    
                                                      <div class="comment-head">
                                                        <span class="name"><a href='author.html' rel='external nofollow' class='url'>Paul Jacobsen</a></span>
                                                        <span class="date"><a href="#comment-link">December 1, 2011 at 11:55 am</a></span>
                                                        <span class="edit"></span>
                                                    </div>

                                                       <div class="comment-entry"  id="comment-4">
                                                        <p>What whaaaaaat</p>
                                                        <div class="reply">
                                                            <a class='comment-reply-link' href='#respond'>Reply</a>
                                                        </div>
                                                    </div>

                                                </div>

                                            </li>

                                        </ul>

                                    </li>

                                </ul>

                            </li>

                        </ul>

                    </li>

                    <li class="comment even thread-odd thread-alt depth-1">

                          <div id="li-comment-5" class="comment-container">

                            <img src='http://placehold.it/64x64' class='avatar' alt='' />
                            
                              <div class="comment-head">
                                <span class="name">Neha Gajjar</span>
                                <span class="date"><a href="#comment-link">January 11, 2010 at 3:14 pm</a></span>
                                <span class="edit"></span>
                            </div>

                               <div class="comment-entry"  id="comment-5">
                                <p>This is another comment!</p>
                                <div class="reply">
                                    <a class='comment-reply-link' href='#respond'>Reply</a>
                                </div>
                            </div>

                        </div>

                    </li>

                    <li class="comment odd alt thread-even depth-1">

                          <div id="li-comment-6" class="comment-container">

                            <img src='http://placehold.it/64x64' class='avatar' alt='' />
                            
                              <div class="comment-head">
                                <span class="name">Jessica Ivins</span>
                                <span class="date"><a href="#comment-link">January 11, 2010 at 3:14 pm</a></span>
                                <span class="edit"></span>
                            </div>

                               <div class="comment-entry"  id="comment-6">
                                <p>And this is a third comment with some lorem ipsum! And this is a third comment with some lorem ipsum! And <a href="#">this is a third comment</a> with some lorem ipsum! And this is a third comment with some lorem ipsum! And this is a third comment with some lorem ipsum!</p>
                                <div class="reply">
                                    <a class='comment-reply-link' href='#respond'>Reply</a>
                                </div>
                            </div>

                        </div>

                    </li>
                    
                </ol>    

                <nav class="navigation clearfix">
                    <div class="alignleft"></div>
                    <div class="alignright"></div>
                </nav>
                                    
            </div> 

            <div id="respond" class="comment-respond">

                <h3 id="reply-title" class="comment-reply-title">Your Comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="#" style={{'display':'none'}} >Click here to cancel reply.</a></small></h3>

                <form action="#" method="post" id="commentform" class="comment-form">

                    <p class="comment-form-comment">
                        <textarea id="comment" name="comment" cols="45" rows="8"></textarea>
                    </p>	

                    <p class="comment-form-author">
                        <label for="author"><i class="fa fa-user"></i> Name <span class="required">*</span></label> 
                        <input id="author" class="txt" name="author" type="text" value="" size="30" />
                    </p>

                    <p class="comment-form-email">
                        <label for="email"><i class="fa fa-envelope"></i> Email <span class="required">*</span></label>		
                        <input id="email" class="txt" name="email" type="text" value="" size="30"/>
                    </p>

                    <p class="comment-form-url">
                        <label for="url"><i class="fa fa-link"></i> Website</label>
                        <input id="url" class="txt" name="url" type="text" value="" size="30" />			
                    </p>									

                    <p class="form-submit">
                        <input name="submit" type="submit" id="submit" value="Post Comment" />
                    </p>

                </form>

            </div>	

        </div>

        <div class="sidbear sidebar1 column">

            <div class="widget widget_latest_posts">

                <h3 class="widget-title"><strong>Latest News</strong></h3>

                <ul>
                    <li>
                        <a href="post.html"><img class="entry-thumbnail" src="http://placehold.it/160x90" alt="Post Title"/></a>
                        <h2 class="entry-title"><a href="post.html">Nullam dictum metus in metus auctor</a></h2>
                        <div class="entry-meta">
                            <span class="entry-date">Sep. 15, 2014</span>
                        </div>  
                    </li>

                    <li>
                        <a href="post.html"><img class="entry-thumbnail" src="http://placehold.it/160x90" alt="Post Title"/></a>
                        <h2 class="entry-title"><a href="post.html">Fusce volutpat elementum augue felis</a></h2>
                        <div class="entry-meta">
                            <span class="entry-date">Sep. 15, 2014</span>
                        </div>     
                    </li>

                    <li>
                        <a href="post.html"><img class="entry-thumbnail" src="http://placehold.it/160x90" alt="Post Title"/></a>
                        <h2 class="entry-title"><a href="post.html">Aenean efficitur enim vel ultrices laoreet</a></h2>
                        <div class="entry-meta">
                            <span class="entry-date">Sep. 15, 2014</span>
                        </div>     
                    </li>

                    <li>
                        <a href="post.html"><img class="entry-thumbnail" src="http://placehold.it/160x90" alt="Post Title"/></a>
                        <h2 class="entry-title"><a href="post.html">What are the benefits of eating oranges?</a></h2>
                        <div class="entry-meta">
                            <span class="entry-date">Sep. 15, 2014</span>
                        </div>    
                    </li>

                </ul>
            </div>

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

                <div class="tabs-container">

                    <div class="tab-content" id="tab1">
                        <ul>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Nulla enim consequat amet congue</a></h2>
                                <div class="entry-meta">16 Aug, 2014</div>
                            </li>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Will It Shred: iPad Becomes a Skateboard</a></h2>
                                <div class="entry-meta">15 Aug, 2014</div>
                            </li>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Phasellus lorem aliquam</a></h2>
                                <div class="entry-meta">14 Aug, 2014</div>
                            </li>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Sed do eiusmod tempor incididunt</a></h2>
                                <div class="entry-meta">13 Aug, 2014</div>
                            </li>                                                   
                        </ul>                   
                    </div>

                    <div class="tab-content" id="tab2">
                        <ul>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Fusce volutpat elementum augue felis</a></h2>
                                <div class="entry-meta">16 Aug, 2014</div>
                            </li>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Etiam maximus lacinia posuere nisl</a></h2>
                                <div class="entry-meta">16 Aug, 2014</div>
                            </li>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">Aenean efficitur enim vel ultrices laoreet</a></h2>
                                <div class="entry-meta">16 Aug, 2014</div>
                            </li>
                            <li class="clearfix">
                                <a href="post.html" rel="bookmark"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Post Title" /></a>
                                <h2 class="entry-title"><a href="post.html" rel="bookmark">What are the benefits of eating oranges?</a></h2>
                                <div class="entry-meta">16 Aug, 2014</div>
                            </li>                                                   
                        </ul>         
                    </div>

                    <div class="tab-content" id="tab3">
                        <ul>
                            <li class="clearfix">
                                <a href="post.html#comments"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Author Name" /></a>
                                <a href="post.html#comments"><strong>Jack Lenox</strong><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</span></a>
                            </li>
                            <li class="clearfix">
                                <a href="post.html#comments"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Author Name" /></a>
                                <a href="post.html#comments"><strong>Kevin Koehler</strong><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</span></a>
                            </li>
                            <li class="clearfix">
                                <a href="post.html#comments"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Author Name" /></a>
                                <a href="post.html#comments"><strong>Ben Lowery</strong><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</span></a>
                            </li>
                            <li class="clearfix">
                                <a href="post.html#comments"><img class="entry-thumbnail" src="http://placehold.it/64x64" alt="Author Name" /></a>
                                <a href="post.html#comments"><strong>Neha Gajjar</strong><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</span></a>
                            </li>                                           
                        </ul>           
                    </div>   

                    <div class="tab-content" id="tab4">
                        <a href="#">WordPress</a>
                        <a href="#">Themes</a>
                        <a href="#">Plugins</a>
                        <a href="#">Hosting</a>
                        <a href="#">Web Design</a>
                        <a href="#">Web Dev</a>
                        <a href="#">Domain Name</a>
                        <a href="#">WP Engine</a>
                        <a href="#">Affiliates</a>
                        <a href="#">bbPress</a>         
                    </div>

                </div>

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
}
