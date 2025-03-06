import { styled } from 'styled-components';
import Nav from './Nav';

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
    color:white; 

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width:100%;
        
    }
`;

const StyledTitle = styled.h2`
    color:black;
    text-align:center;
    margin-top:2vw;
`;

const ExpContainer = styled.div`
    background-color:#A24857;
    margin:2vw;
    padding:1vw;
`;

const StyledPos  = styled.h4`
    font-weight:normal;
    margin:0.5vh;
`;

const StyledDate = styled.h4`
    font-weight:normal;
    margin:0.5vh;
    font-style: italic;
`;

const StyledUl = styled.ul`
    margin:2vh;
`;

const StyledLi = styled.li`
     margin:1vh;
`;

export default function Skills(){
    return(
        <StyledNavDiv>
            <Nav />
            <StyledMainDiv>
                <StyledTitle>My Experience</StyledTitle>
                <ExpContainer>
                    <h3>Kaufman-Deyle Research Lab - Boston, MA</h3>
                    <StyledPos>Research Assistant</StyledPos>
                    <StyledDate>Jan 2024-Present</StyledDate>
                    <StyledUl>
                        <StyledLi>Processed citizen science and trawl census data in order to model habitat preference of parrotfish as a function of temperature</StyledLi>
                        <StyledLi>Programming Artificial Neural Networks and Boosted Regression Trees to forecast habitat preferences according to temperature projections</StyledLi>
                    </StyledUl>
                </ExpContainer>

                <ExpContainer>
                    <h3>Boston University Marine Lab - Boston, MA</h3>
                    <StyledPos>Labratory Assistant</StyledPos>
                    <StyledDate>Sept 2021-Present</StyledDate>
                    <StyledUl>
                        <StyledLi>Responsible for maintaining 20 saltwater tanks of various marine flora and fauna including basic husbandry, water quality testing, dosing water, and putting together new habitats </StyledLi>
                        <StyledLi>Trained every new laboratory assistant and coordinated their responsibilities</StyledLi>
                    </StyledUl>
                </ExpContainer>

                <ExpContainer>
                    <h3>Coastal Ocean Sensor Share - Boston, MA</h3>
                    <StyledPos>Programming Intern</StyledPos>
                    <StyledDate>Jan 2022-Jan 2023</StyledDate>
                    <StyledUl>
                        <StyledLi>Coded Arduino as methane and carbon sensors to collect data shared to CSV files</StyledLi>
                        <StyledLi>Contributed to coding Arduino to upload to an accessible, online data share</StyledLi>
                        <StyledLi>Worked with a team to create a website with Shiny to display uploaded data from sensors in the field</StyledLi>      
                    </StyledUl>
                </ExpContainer>

            </StyledMainDiv>
        </StyledNavDiv>
    );
}