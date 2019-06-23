import React, { Component } from 'react'
import { Placeholder } from 'semantic-ui-react'
import moment from 'moment';
import { Link } from 'react-router-dom'
import localization from 'moment/locale/tr';
import {CardDetails,DetailHeader,DetailHeaderContent} from './style'
import {connect} from 'react-redux';
import LoadIcon from '../hoc/withLoading'
moment.updateLocale('tr', localization);
let actions = require('../../actions/index')
class Index extends Component {
    componentDidMount() {
        const queryId = this.props.match.params.id
        this.props.imdbId(queryId)
    }
    render() {
        const defaultImg = "https://react.semantic-ui.com/images/wireframe/image.png"
        const {imdbIdParam} = this.props.movie;
        const styleHeader = {
            backgroundImage: `url(${imdbIdParam.Poster})`
        }
        if(imdbIdParam !== undefined){
            return (
                <CardDetails>
                    <DetailHeader style={styleHeader}>
                            {
                                imdbIdParam.Response === 'False' ? 
                                <div className="notFoundMovie">
                                    <div className="imgWrapper"><img src={defaultImg} alt={imdbIdParam.Title}/></div>
                                    <div className="notFoundText"><span>Movie is not found!</span></div>
                                </div>
                                :
                                <DetailHeaderContent>
                            <div className="imageBig">
                                {
                                    imdbIdParam.Poster !== undefined  ?
                                    imdbIdParam.Poster !== null ? 
                                    <img src={`${imdbIdParam.Poster}`} alt={imdbIdParam.title} />
                                    :
                                    <img src={defaultImg} alt={imdbIdParam.Title} />
                                    :
                                        <Placeholder>
                                        <Placeholder.Image style={{ height: 450, width: 300 }} />
                                        </Placeholder>
                                }
                            </div>
                            <div className="movieContent">
                                <span>{imdbIdParam.Title}</span>
                                <p>{imdbIdParam.Type} / {imdbIdParam.imdbRating !== "" || imdbIdParam.imdbRating !== "N/A" ? "IMDB rating: "+imdbIdParam.imdbRating : ''}</p>
        <p>
        {imdbIdParam.imdbVotes === undefined ? '' : imdbIdParam.imdbVotes + " votes / " } {imdbIdParam.Runtime !== null ? imdbIdParam.Runtime+" / " : '' }{' '}
          {imdbIdParam.Released !== "" ? moment(new Date(imdbIdParam.Released)).format("YYYY") : ''}
        </p>
        <p>{imdbIdParam.Plot}</p>
        {imdbIdParam.Website && (
          <a href={imdbIdParam.Website}>
            VIEW TO WEBPAGE
          </a>
        )}
        <p>
          { imdbIdParam.Genre !== null || imdbIdParam.Genre !== undefined ? imdbIdParam.Genre : '' }
        </p>
                            </div>
                        </DetailHeaderContent>

                            }
                    </DetailHeader>
                    <Link to="/" style={{marginTop:'10px'}}><i className="fas fa-home-lg-alt"></i>Back to Homepage</Link>
                </CardDetails>
            )
        }
        else{
            return (
                <CardDetails>
                    <LoadIcon/>
                </CardDetails>
            )
        }
    }
}
export default connect((state)=>{return state},actions)(Index)