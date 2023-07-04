import { Link } from "react-router-dom"
import styled from "styled-components"





const Header = ()=>{
    return(
        <div>
            <Container>
                <Main>
                    <Logo>DrTito</Logo>
                    <NavBox>
                        <Link to="/" style={{textDecoration:"none",color:"white"}}>
                        <Nav>Home</Nav>
                        </Link>
                    </NavBox>
                    <Link to="/input" style={{textDecoration:"none",color:"black"}}>
                    <Button>
                        Add Task
                    </Button>
                    </Link>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: black;
color: white;
`
const Main = styled.div`
width: 90%;
height: 90px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Logo = styled.div`
font-size: 25px;
font-weight: 500;

`
const NavBox = styled.div``
// const Link = styled.div``
const Nav = styled.div``
const Button = styled.div`
padding: 10px 18px;
background-color: white;
border-radius: 3px;
color: black;
cursor: pointer;
`
