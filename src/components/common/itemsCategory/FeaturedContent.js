import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFeaturedContentData } from '../../../store/store'
import { Link } from 'react-router-dom'
import { url } from '../../../variables/general'

class FeaturedContent extends Component {

    componentDidMount(){
        if(this.props.items.lenght <= 0)
        {
            this.props.fetchFeaturedContentData(this.props.keyCategory);
        }
    }

  render() {
    let items = this.props.items;
    return (
        <div id="featured-content-2" class="category-box clearfix">
            <h3 class="section-title"><strong>Featured News</strong><span class="see-all"><a href="category.html">More</a></span></h3>
                {
                    items.map((prop, key) => {
                        if(key === 0){
                            return(
                                <div class="featured-big">
                                    <Link to = {`/tin-tuc/${prop.metaKey}`}><img class="entry-thumbnail" src={url+prop.images[0].image} alt=""/></Link>    
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
                                </div>
                            )
                        }else{
                            return(
                                <div class="featured-small">
                                    <Link to = {`/tin-tuc/${prop.metaKey}`}><img class="entry-thumbnail" src={url+prop.images[0].image} alt=""/></Link>    
                                    <h2 class="entry-title"><Link to = {`/tin-tuc/${prop.metaKey}`}>{prop.title}</Link></h2>
                                    <div class="entry-meta">
                                        <span class="entry-date">{prop.date}</span>
                                    </div>                             
                                </div>
                            )
                        }
                    })
                }
        </div>
    )
  }
}

FeaturedContent.serverFetch = fetchFeaturedContentData;

const mapStatetoProps = ( state ) => ({
    items: state.featuredContentData,
    keyCategory: state.keyCategory
});

const mapDispatchToProps = {
    fetchFeaturedContentData,
}

export default connect(mapStatetoProps, mapDispatchToProps)(FeaturedContent);
