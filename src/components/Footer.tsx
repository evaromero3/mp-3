import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
    background-color:#7F534B;
    color:white;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    padding: 2vw 2vh;

`;

const FooterCredit = styled(Link)`
    text-decoration:none;
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved:<FooterCredit to="/credits">Credits</FooterCredit> &copy;</p>
        </StyledFooter>
    );
}

//add in copyright symbol 