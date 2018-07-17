import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchCategoryTabData } from '../../store/store'
import { Link, Redirect } from 'react-router-dom';

class CategoryTab extends Component {

    componentDidMount(){
        if(this.props.circuits.lenght <= 0){
            this.props.fetchCategoryTabData();
        }
    }

  render() {
    const {circuits} = this.props;
    return (
        <nav id="secondary-nav">
            <ul id="secondary-menu" class="sf-menu">
                <li class="home_item current_item"><a href="/"><i class="fa fa-home"></i> Home</a></li>
                {circuits.map(item =>(
                <li>
                    <a href="#" style={{'font-size':11}}>{item.title}</a>
                    <ol class="sf-mega links">
                        <li>
                            <ol>
                                {item.items.map(title => (
                                    <li><Link to={`/loai-tin-tuc/${title.key}`}>{title.title}</Link></li>
                                ))}
                            </ol>
                        </li>
                    </ol>
                </li>
                ))}																	
            </ul>
        </nav>
    )
  }
}

CategoryTab.serverFetch = fetchCategoryTabData;

const mapStateToProps = ( state ) => ( {
    circuits: state.categoryTabData,
} );

const mapDispatchToProps = {
    fetchCategoryTabData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTab);