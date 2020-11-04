import React, { Component } from 'react'
import {Layout} from './style'
import CardData from '../card/index'
import Search from '../search/index'
import {connect} from 'react-redux';
import { Pagination } from 'semantic-ui-react'
let actions = require('../../actions/index')
class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            movieList: "superman",
            movieData:[],
            count:null,
            currentPageCount:1

        }
    }
    componentDidMount() {
        this.setState({page:1, count:null})
        this.props.search(this.state.movieList,this.state.page)
    }
    componentDidUpdate(prevProps, prevState) {
        const currentCount = this.props.movie.searchParam.totalResults
        const prevCount = prevProps.movie.searchParam.totalResults
        const val = this.props.movie.searchParam.Search
        const valPrev = prevProps.movie.searchParam.Search
        if(currentCount !== prevCount){
            const currentCount = parseInt(this.props.movie.searchParam.totalResults)
            debugger
            if(currentCount > 10){
                debugger
                this.setState({
                    count:currentCount
                })
            }
            else{
                debugger
                this.setState({
                    count:null
                })
            }
        }
        if(val !== valPrev){
            const filterData = this.props.movie.searchParam.Search
            if((filterData && filterData.length > 0)){
                this.setState({
                    movieData:filterData
                })    
            }
        }
    }
    onPaginated = (e) => {

        debugger
        var ids = e.target.innerText;
        var globInt = parseInt(this.state.currentPageCount);
        if(ids === "⟨"){
            debugger
            this.setState({
                currentPageCount: this.state.currentPageCount - 1
            })
            let go = globInt--;
            this.props.search(this.state.movieList,go)
        }
        if(ids === "⟩"){
            debugger
            this.setState({
                currentPageCount: this.state.currentPageCount + 1
            })
            let go = globInt++;
            console.log(go)
            this.props.search(this.state.movieList,go)
        }
        if( ids !==  "⟨" && ids !== "⟩" ){
            debugger
            this.props.search(this.state.movieList,parseInt(ids))
        }

        }

        totalPaginationCount = () => {
            const data = this.state.movieData;
            const pageSize = this.state.count;
            let pageCount = parseInt(data.length / pageSize);
            if (data.length % pageSize > 0) {
              pageCount++;
            }
            if(pageCount.length <= 10){
                this.setState({
                    count: null
                  });
            }
            else{
                this.setState({
                    count: pageCount
                  });
            }
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
        console.log(this.state.count)
        const {count,currentPageCount} = this.state;
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
                {
                    count !== null && count !== undefined ? 
                    <Pagination style={{marginTop:'15px'}}
    defaultActivePage={currentPageCount}
    firstItem={null}
    lastItem={null}
    pointing
    onClick={(e) => { this.onPaginated(e) }} totalPages={count} />
    : ''
                }
                {/* <button type="button" onClick={this.onPaginated}>More</button>   */}
            </Layout>
        )
    }
}
export default connect((state)=>{return state},actions)(Index)