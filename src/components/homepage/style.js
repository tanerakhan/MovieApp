import styled from 'styled-components'
export const Layout = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-direction: column;
        button{
    border:1px #fff solid;
    background-color: #5586b1;
    color: #fff;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    transition: .5s ease;
    cursor: pointer;
            &:hover{
                color:#5586b1;
                border:1px #5586b1 solid;
                background-color:transparent;
                cursor: pointer;
            }
        }
`;