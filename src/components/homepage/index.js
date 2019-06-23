import React, { Component } from 'react'
import {Layout} from './style'
import CardData from '../card/index'
import Search from '../search/index'
import {connect} from 'react-redux';
let actions = require('../../actions/index')
class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            movieList: "superman",
            movieData:[]

        }
    }
    componentDidMount() {
        this.setState({page:1})
        this.props.search(this.state.movieList,this.state.page)
    }
    componentDidUpdate(prevProps, prevState) {
        const val = this.props.movie.searchParam.Search
        const valPrev = prevProps.movie.searchParam.Search
        if(val !== valPrev){
            const filterData = this.props.movie.searchParam.Search
            if((filterData && filterData.length > 0)){
                this.setState({
                    movieData:filterData
                })    
            }
        }
    }
    onPaginated = () => {
        this.props.search(this.state.movieList,this.state.page++)
        }
    searchChange = (e) => {
        if(e.target.value.length > 3){
            var timer;
        clearTimeout(timer);
        var ms = 400; 
        var query = e.target.value;
        timer = setTimeout(() => {
            this.props.search(query)
            if(this.state.movieList !== query){
                this.setState({movieList:query})
            }
          }, ms);      
        }
    }
    render() {
        const cardStyle = {
            maxWidth:'170px',
            height:'225px',
            width:'100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            overflow:'hidden',
            margin:'5px 0',
            padding:'0',
            position:'relative'
        }
        return (
            <Layout>
                <Search searchValue={(e) => {this.searchChange(e)}}/>
                <CardData movieData={this.state.movieData} mainStyles={cardStyle}/>
                <button type="button" onClick={this.onPaginated}>More</button>  
            </Layout>
        )
    }
}
export default connect((state)=>{return state},actions)(Index)