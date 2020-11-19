import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Link from 'next/link';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #000;
  height: 120px;
  color: white;

  a {
    display: block;
    float: left;
  }

  nav {
    display: block;
    float: left;
  }

  ul li {
    list-style: none;
    display: block;
    float: left;
    margin-left: 8px;
  }

  .cabecalho {
    padding-top: 24px;
  }

  .logo {
    text-transform: uppercase;
    font-size: 2rem;
    color: #fff;
    float: left;
  }

  .menu {
    text-align: right;
    float: right;
  }

  .menu a {
    color: #fff;
  }

  .menu a:hover {
    text-decoration: underline;
  }

`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="cabecalho">
          <a className="logo" href="#">Blog do Cezar</a>
          <nav className="menu">
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/sobre"><a>Sobre</a></Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
