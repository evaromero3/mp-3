import { styled } from 'styled-components';

import Nav from './Nav';
import Calculator from './Calc';


const StyledNavDiv = styled.div`
    display:flex;
    flex-direction:row;

    @media screen and (max-width: 750px) {
    /*horizontal nav bar*/
        width:100%;
        display:flex;
        flex-direction:column;
    }
`;

const StyledMainDiv = styled.div`
    width: 70%;
    background-color:#F5F5DC;
    font-family: "Barriecito", serif;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height:100vh;
       
    }
`;

const StyledTitle = styled.h2`
    text-align:center;
    margin-top:3vh;
    font-size:5vw;
`;

export default function Projects(){
    return(
       <StyledNavDiv>
            <Nav />
            <StyledMainDiv>
                <StyledTitle>My Calculator</StyledTitle>
                <Calculator />
            </StyledMainDiv>
       </StyledNavDiv>
    );
}