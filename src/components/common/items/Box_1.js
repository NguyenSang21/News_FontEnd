import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _1_fetch_BoxData_store } from '../../../store/store';
import { Link } from 'react-router-dom'
import { url } from '../../../variables/general'

class Box_1 extends Component {
    componentDidMount(){
        if(this.props.items.lenght <= 0){
            this.props._1_fetch_BoxData_store();
        }
    }

    render() {
        const {items} = this.props;
        return (
            <section class="content-block-1 category-box clearfix">
            <h3 class="section-title"><a href="category.html">Editor's Choice</a><span class="see-all"></span></h3>
            <ul class="clearfix">
                {items.map((prop, key) => (
                <li key = {key}>
                    <Link to={`/tin-tuc/${prop.metaKey}`}><img class="entry-thumbnail" src={url+prop.images[0].image} salt=""/></Link>   
                    
                    <h2 class="entry-title"><Link to = {`/tin-tuc/${prop.metaKey}`}>{prop.title}</Link></h2>
                    
                    <div class="entry-meta">
                        <span class="entry-date">{prop.date}</span>
                    </div>                  
                   
                    <div class="entry-summary">
                        {prop.description}
                    </div>
                    
                </li>
                ))}
            </ul>
        </section>
        )
    }
}

Box_1.serverFetch = _1_fetch_BoxData_store;

const mapStateToProps = (state) => ({
    items: state._1_BoxData
});

const mapDispatchToProps = {
    _1_fetch_BoxData_store
}

export default connect(mapStateToProps, mapDispatchToProps)(Box_1);