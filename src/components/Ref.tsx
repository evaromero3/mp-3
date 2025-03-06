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
    display:flex;
    flex-direction: column;
    align-items: center;
    font-family: "Inter", serif;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height:100vh;
    }
`;

const TableDiv = styled.div`
    margin-top:5vh;
    display:flex;
    flex-direction: column;
    align-items: center;
`; 

const Table = styled.table`
    margin-top:2vh;
    width:80%;
    border: 1px solid;
`;

const StyledTH = styled.th`
    background-color:#c4a484;
    border: 1px solid;
`;

const StyledTD = styled.td`
    text-align:center;
    padding:1vw;
    border: 1px solid;
`;

export default function Ref(){
    return(
        <StyledNavDiv>
            <Nav />
            <StyledMainDiv>
                <TableDiv>
                    <h3>Professional</h3>
                    <Table>
                        <tr>
                            <StyledTH>Name</StyledTH>
                            <StyledTH>Relationship</StyledTH>
                            <StyledTH>Position</StyledTH>
                            <StyledTH>Contact</StyledTH>
                        </tr>
                        <tr>
                            <StyledTD>Dr. Ethan Deyle</StyledTD>
                            <StyledTD>Research Advisor</StyledTD>
                            <StyledTD>Assistant Professor of Biology</StyledTD>
                            <StyledTD>edeyle@bu.edu</StyledTD>
                        </tr>
                            <tr>
                                <StyledTD>Dr. Les Kaufman</StyledTD>
                                <StyledTD>Research Advisor</StyledTD>
                                <StyledTD>Title Professor of Biology</StyledTD>
                                <StyledTD>lesk@bu.edu</StyledTD>
                            </tr>
                            <tr>
                                <StyledTD>Dr. Pete Buston</StyledTD>
                                <StyledTD>Professor</StyledTD>
                                <StyledTD>Associate Professor of Biology;
                                    Director of Marine Program</StyledTD>
                                <StyledTD>buston@bu.edu</StyledTD>
                            </tr>
                    </Table>
                </TableDiv>

                <TableDiv>
                    <h3>Personal</h3>
                    <Table>
                        <tr>
                            <StyledTH>Name</StyledTH>
                            <StyledTH>Relationship</StyledTH>
                            <StyledTH>Contact</StyledTH>
                        </tr>
                        <tr>
                            <StyledTD>Emily Pessina</StyledTD>
                            <StyledTD>Best Friend and Roommate</StyledTD>
                            <StyledTD>epessina@bu.edu</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>Lilly Sullivan</StyledTD>
                            <StyledTD>Coworker</StyledTD>
                            <StyledTD>123-456-7890</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>Shalom Blaise</StyledTD>
                            <StyledTD>Friend, Marine PhD Candidate</StyledTD>
                            <StyledTD>shalom@bu.edu</StyledTD>
                        </tr>
                    </Table>
                </TableDiv>

            </StyledMainDiv>
        </StyledNavDiv>
    );
}