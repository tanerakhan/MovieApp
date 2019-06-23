import styled from 'styled-components'
export const MovieWrapper = styled.div `
background-color:#ededed;
`;
export const CardWrapper = styled.div `
    border-radius: 10px;
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    max-width: 1000px;
`; 

export const MovieImg = styled.div `
background:none;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
`;
export const Average = styled.div `
    z-index: 3;
    top: 7px;
    position: absolute;
    right: 10px;
    background-color: rgba(255,255,255,1);
    padding: 0 10px;
    border-radius: 4px;
    font-size: 11px;
    color: #000;
    font-style: italic;
    font-weight:700;
`;