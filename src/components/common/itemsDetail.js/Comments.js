import React, { Component } from 'react'

class Comments extends Component {
  render() {
    return (
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
    )
  }
}

export default Comments;
