import { styled } from 'styled-components';
import Nav from './Nav';

const StyledNavDiv = styled.div`
    display:flex;
    flex-direction:row;

    @media screen and (max-width: 750px) {
        width:100%;
        display:flex;
        flex-direction:column;
    }
`;

const StyledMainDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction:column;
    background-color:#F5F5DC;
    padding-left: 5vw;
    font-family: "Geo", serif;  

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height:100vh;
`;

const StyledTitle = styled.h2`
    text-align:center;
    margin-top:20px;
`;

const StyledEdDiv = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    padding-left: 3vw;
    font-size:calc(2px+4vw);
    border: solid 2px black;
    margin-bottom:3vw;
    margin-top:3vw;
    margin-right:3vw;

    &:hover {
    background-color:white;
    };
`;



export default function Education(){
    return(
        <StyledNavDiv>
            <Nav />
            <StyledMainDiv>
                <StyledTitle>Educational Background</StyledTitle>
                <StyledEdDiv>
                    <h3><strong>B.A. in Marine Science and Computer Science | <em>Boston University</em></strong></h3>
                    <p>Boston, MA</p>
                    <p><em>May 2025</em></p>
                </StyledEdDiv>
                <StyledEdDiv>
                    <h3><strong>High School Diploma | <em>The Westminster Schools</em></strong></h3>
                    <p>Atlanta, GA</p>
                    <p><em>May 2021</em></p>
                </StyledEdDiv>
                <StyledEdDiv>
                    <h3><strong>College Credit Certificate | <em>University of Miami</em></strong></h3>
                    <p>Miami, FL</p>
                    <p><em>July 2019</em></p>
                </StyledEdDiv>  
            </StyledMainDiv> 
        </StyledNavDiv>        
                    
    );
}