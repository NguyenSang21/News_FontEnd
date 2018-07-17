import React, { Component } from 'react'

class TabsContainer extends Component {
  render() {
    return (
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
    )
  }
}

export default TabsContainer;
