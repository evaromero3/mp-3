import { styled } from 'styled-components';
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
    background-color: #39512A;
    width:30%;

    @media screen and (max-width: 750px) {
        width:100%;
    }
`;

const StyledUl = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding-left:0;
    list-style: none; 

    @media screen and (max-width: 750px) {
        display:flex;
        flex-direction:row;
    }
`;

const StyledLi = styled.li`
    text-align:center;
    border: 2px solid white;
    width:75%;
    padding: 2vh 0;
    margin: 5vh auto;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color:white;
    font-size:3vw;  
`;


export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={"/"}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/education"}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/experience"}>Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/projects"}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/skills"}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/references"}>References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );


}