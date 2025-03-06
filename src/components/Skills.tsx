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
    font-family: "Roboto Condensed", serif;
    color:#680C07; 

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height:100vh;
    }
`;

const StyledTitle = styled.h2`
    text-align: center;
    margin-top:2vh;
    color:black;
`;

const SkillsCont = styled.div`
    background-color: #c4a484;
    margin:3vh;
    padding:1vh;
    border: solid 2px #c4a484;
    border-radius: 10px;
`;

const SkillsUl = styled.ul`
    list-style:none;
    padding-left:0;
`;

const SkillsLi = styled.li`
    margin:1vh;
    color:#f2f0EF;
`;

export default function Skills(){
    return(
        <StyledNavDiv>
            <Nav />
            <StyledMainDiv>
                <StyledTitle>Relevant Skills</StyledTitle>
                <SkillsCont>
                    <h3>Programming Languages</h3>
                    <SkillsUl>
                        <SkillsLi>Python</SkillsLi>
                        <SkillsLi>Java</SkillsLi>
                        <SkillsLi>JavaScript</SkillsLi>
                        <SkillsLi>R</SkillsLi>
                        <SkillsLi>MATLab</SkillsLi>
                        <SkillsLi>C</SkillsLi>
                        <SkillsLi>HTML/CSS</SkillsLi>
                    </SkillsUl>
                </SkillsCont>

                <SkillsCont>
                    <h3>Foreign Language</h3>
                    <SkillsUl>
                        <SkillsLi>Spanish</SkillsLi>
                    </SkillsUl>
                </SkillsCont>

                <SkillsCont>
                    <h3>Labratory</h3>
                    <SkillsUl>
                        <SkillsLi>Animal Husbandry</SkillsLi>
                        <SkillsLi>Titration</SkillsLi>
                        <SkillsLi>PCR</SkillsLi>
                    </SkillsUl>
                </SkillsCont>
            </StyledMainDiv>
        </StyledNavDiv>
    );
}