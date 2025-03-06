import { styled } from 'styled-components';

import Nav from './Nav';


const StyledHomeDiv = styled.div`
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
    background-color:#F5F5DC;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width:100%;
        
       
    }
`;


const StyledTitle = styled.h3`
    text-align:center;
    font-size:calc(5px + 1vw);
    margin-top:20px;
`;

const AboutDiv = styled.div`
    display:flex;
    flex-direction:row;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
        width:100%;
        
`;

const BlurbDiv = styled.div`
    padding:20px;
    text-align:center;
`;

const ProfileImage = styled.img`
    max-width:100%;
    height: auto;
    width: 35%;
    margin: auto; 
    display: block;
    padding: 10px;
`;

const LinksDiv = styled.div`
    padding-top:20px;
    text-align:center;
    margin-bottom:5vw;
`;

const LinksUl = styled.ul`
    list-style:none;
    padding:0;
`;

export default function Home(){
    return(
        <StyledHomeDiv>
            <Nav />
            <StyledMainDiv>
                <StyledTitle>About Me</StyledTitle>
                <AboutDiv>
                    <ProfileImage src="/headshot.JPG" alt="eva headshot"/>
                    <BlurbDiv>
                    
                        <p> My name is Eva Romero and I am a second semester Senior at Boston University. In May, I will graduate 
                        with my Bachelor's degree in Marine Science and Computer Science. I hope to professionally conduct research 
                        in Marine Science through computational means as I have in my undergrad. I plan to enter a PhD program for Marine
                        Science after a gap year to gain more experience.</p>
                        
                        <p>I was born in Fort Lauderdale, FL with the everglades in my backyard, instilling in me the love of
                        wildlife. Ten years later I moved to Atlanta, GA and my love of the outdoors continued to grow.
                        My highscool Computer Science class introduced me to the world of coding and I've never looked back.
                        Now at Boston Univeristy, I am combining my interdisciplinary passions to do innovate research and 
                        learn more about the underwater world.</p>
            
                        <p> Thank you for visiting my website! Here you will find my Educational and Employment history amoung other information 
                        bout me that demonstrates my interdisciplinary passion.</p>
                       
                    </BlurbDiv>
                </AboutDiv>
                <LinksDiv>
                    <StyledTitle>Relevant Links</StyledTitle>
                    <LinksUl>
                        <li>Email: eromero3@bu.edu</li>
                        <li>GitHub: <a href="https://github.com/evaromero3">evaromero3</a></li>
                        <li>Lab Website: <a href="https://sites.bu.edu/galileco/">Kaufman-Deyle Lab</a></li>
                    </LinksUl>
                </LinksDiv>
            </StyledMainDiv>
        </StyledHomeDiv>
    );
}