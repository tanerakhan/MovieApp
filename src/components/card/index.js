import React from 'react';
import { Card } from 'semantic-ui-react'
import {CardWrapper,MovieImg,Average} from './style'
import LoadIcon from '../hoc/withLoading'
import {Seperator} from '../../utils/seperator'
import {connect} from 'react-redux';
let actions = require('../../actions/index')


class RecipeReviewCard extends React.Component{
    movieDetail = (id) => {
        this.props.imdbId(id)
        window.location.href = "/movie/"+id
    }
    render(){
     
        const movieList = this.props.movieData;
        const defaultImg = "https://react.semantic-ui.com/images/wireframe/image.png";
        const cardContentStyle = {
            position: 'absolute',
            backgroundColor: 'rgba(255,255,255,.9)',
            bottom: '0',
            width: '100%',
            left: '0'
        }
        const cardHeaderStyle = {
            fontSize:'14px',
            textAlign:'center'
        }
            if((movieList !== undefined) && (movieList && movieList.length > 0) ){
                return (
                    <CardWrapper>
                    {
                        movieList.map((movies,i) => {
                            return (
                     <Card onClick={() => {this.movieDetail(movies.imdbID)}} key={i} style={this.props.mainStyles}>
                     {
                         movies.Poster === null ? 
                         <MovieImg style={{backgroundImage:`url(${defaultImg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }}/>
                         :
                         <MovieImg style={{backgroundImage: movies.Poster && `url(${movies.Poster})`}}/>
                     }
                     <Average>
                     <span>{movies.Year}</span>
                   </Average>
                 <Card.Content style={cardContentStyle}>
                   <Card.Header style={cardHeaderStyle}>{Seperator(movies.Title, 19)}</Card.Header>
                 </Card.Content>
               </Card>
                            )
                        })
                    }
                 </CardWrapper>
                )
            }
            else{
                return(
                    <LoadIcon/>
                )
            }
        }
    }
export default connect((state)=>{return state},actions)(RecipeReviewCard)