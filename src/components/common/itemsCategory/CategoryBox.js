import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchCategoryBoxData } from '../../../store/store'
import { Link, Redirect } from 'react-router-dom';
import { url, quantity } from '../../../variables/general';
class CategoryBox extends Component {
    componentDidMount(){
        if(this.props.items.lenght <= 0)
        {
            this.props.fetchCategoryBoxData();
        }
    }
    getNumberPage(indexPage, numberPage){
        let page = [];
        let index = indexPage;
            for(let i=index-2; i<index; i++){ 
                if(i > 0){
                    page.push({class: "page-numbers", page: i}); 
                } 
            }
            page.push({class: "page-numbers current",page: index})
            if(index < numberPage-1){
                page.push({class: "page-numbers", page: index+1});  
                page.push({class: "page-numbers", page: index+2});  
            }else if(index < numberPage){ 
                page.push({class: "page-numbers", page: index+1}); 
            }
        return page;
    }
  render() {
    let { items, mainCategoryData, keyCategory, indexPage } = this.props;
    let numberPage = Math.ceil(mainCategoryData.length/quantity);
    let page = this.getNumberPage(indexPage, numberPage);
    let indexNext = (indexPage+1) > numberPage ? numberPage : (indexPage+1);
    let indexPrev = (indexPage-1) < 1 ? 1 : (indexPage-1);
    return (
        <div id="content" class="content-loop list category-box">

            <h3 class="section-title"><strong><a href="listing_classic.html">Classic</a> / <a href="listing_blog.html">Blog</a> / <a href="listing_grid1.html">Grid 1</a> / <a href="listing_grid2.html">Grid 2</a></strong></h3>

            {
                items.map((prop, key) => (
                    <article id={key} class="hentry post clearfix">
                        <Link to = {`/tin-tuc/${prop.metaKey}`}><img class="entry-thumbnail" src={url+prop.images[0].image} alt="Post Title"/></Link>

                        <h2 class="entry-title"><Link to = {`/tin-tuc/${prop.metaKey}`}>{prop.title}</Link></h2>
                        <div class="entry-meta">
                            <span class="entry-stars"></span>				
                            <span class="entry-date">{prop.date}</span>
                        </div>
                        <div class="entry-summary">
                            {prop.description}
                        </div>
                        <div class="more-link">
                            <Link to = {`/tin-tuc/${prop.metaKey}`}>Đọc phần còn lại</Link>
                        </div>	                    
                    </article>
                ))
            }                                                                          

            <nav class="pagination">                
                <Link class="page-numbers prev" to={`loai-tin-tuc/${keyCategory}/${1}`}>{"<<"}</Link>         
                <Link class="page-numbers prev" to={`/loai-tin-tuc/${keyCategory}/${indexPrev}`}>{"<"}</Link>                           
                {
                    page.map((prop, key) => (
                        <Link class={prop.class} to={`/loai-tin-tuc/${keyCategory}/${prop.page}`}>{prop.page}</Link>
                    ))
                }
                <Link class="page-numbers next" to={`/loai-tin-tuc/${keyCategory}/${indexNext}`}>{">"}</Link>                  
                <Link class="page-numbers next" to={`loai-tin-tuc/${keyCategory}/${numberPage}`}>{">>"}</Link>                  
            </nav>                 

        </div>
    )
  }
}


CategoryBox.serverFetch = fetchCategoryBoxData;

const mapStateToProps = ( state ) => ( {
    items: state.categoryBoxData,
    mainCategoryData: state.mainCategoryData,
    indexPage: state.indexPageMainCategory,
    keyCategory: state.keyCategory
} );

const mapDispatchToProps = {
    fetchCategoryBoxData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBox);
