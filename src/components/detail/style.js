import styled from 'styled-components'
export const CardDetails = styled.div `
    border-radius: 10px;
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
`; 
export const BackTo = styled.div `
color:#4183c4;
cursor:pointer;
transition:.5 ease;
    &:hover{
        color:#2c5277
    }
`; 
export const DetailHeader = styled.div `
width:100%;
height:550px;
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
position:relative;
padding:60px 50px;
background-color: #848484;
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .imgWrapper{
        width:300px;
        height:250px;
        border-radius:10px;
        overflow:hidden;
            img{
                max-width:100%;
            }
    }
    .notFoundText{
        justify-content: center;
        display: flex;
    }
    .notFoundMovie{
        z-index:1;
            span{
                color: #4789c7;
                padding: 10px;
                border-radius: 5px;
            }
    }

`;
export const DetailHeaderContent = styled.div `
display: flex;
z-index:1;
align-items:center;
justify-content:center;
@media screen and (min-width:281px) and (max-width:768px){
    flex-direction: column;   
    height: 100%;
}
    .imageBig{
        border-radius: 10px;
        overflow: hidden;
        width: 300px;
        height: 450px;
            img{
                max-width:100%;
            }
    @media screen and (min-width:281px) and (max-width:768px){
    margin-top:10px;
        }
    }
    .movieContent{
        align-self: flex-start;
        padding:10px 30px;
        max-width:500px;
            span{
                color: #2f4671;
                text-transform: uppercase;
                font-style: italic;
                font-weight: bold;
                font-size: 24px;
            }
            p{
                text-transform:capitalize;
            }
    }
`;