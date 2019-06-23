import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import {Layout} from './style'
import {connect} from 'react-redux';
let actions = require('../../actions/index')
class Index extends Component {
    render() {
        return (
            <Layout>
                 <Input icon='search' style={{maxWidth:'768px', width:'100%'}} onChange={this.props.searchValue}  placeholder='Fetch Movie Content' />
            </Layout>
        )
    }
}
export default connect((state)=>{return state},actions)(Index)
