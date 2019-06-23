import React from 'react'
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components'

const AnimateOverride = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
`;

export default class LoadIcon extends React.Component {
    render() {
        return(
<AnimateOverride>
    <ClipLoader sizeUnit={"px"} size={15} color={'#123abc'}/>
</AnimateOverride>
        )
    }
}