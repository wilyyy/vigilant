import styled from 'styled-components';


const Container = styled.div`
    width: 350px;
    height: 350px;
    background: grey;
    text-align: center;
    border-radius: 10%
`;

const Button = styled.button`
    width: 75px;
    height: 75px;
    border: solid 2px rgba(255, 103, 0, 0.7);
    background: white;
    display: inline-block;
    margin: 20px;
    border-radius: 50%;
    color: rgba(255, 103, 0, 0.7);
`;


const H1 = styled.h1`
 font-size:25px;
`

const ReportCrime = () => {
    return (
        <Container>
            <h1>Report Crime</h1>
            <Button onclick="myFunction()"><img src="whh_gun.png" ></img></Button>
            <Button onclick="myFunction()"><img src="fa-solid_user-injured.png"></img></Button>
            <Button onclick="myFunction()"><img src="whh_gun.png"></img></Button>
            <Button onclick="myFunction()"><img src="whh_gun.png"></img></Button>
            <Button onclick="myFunction()"><img src="whh_gun.png"></img></Button>
            <Button onclick="myFunction()"><img src="whh_gun.png"></img></Button>

        
            

        </Container>
    )
}

export default ReportCrime;