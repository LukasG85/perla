import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/Offer',
        name: 'Oferta',
      },
      {
        id: 2,
        path: '/Gallery',
        name: 'Galeria',
      },
      {
        id: 3,
        path: '/Contact',
        name: 'Kontakt',
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  position: relative;
  background-color: ${styles.colors.mainBlack};
  z-index: 2;
  li {
    display: flex;
    align-items: center;
    list-style-type: none;
  }
  .nav-link {
    display: block;
    width: 100%;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainWhite};
    font-weight: 400;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? `152px` : `0px`)};
  overflow: hidden;
  ${styles.transDefault};
  @media (min-width: 768px) {
    font-size: 1.5rem;
    height: auto;
    display: flex;
    margin: 0 30px 0 0;
    background-color: transparent;
    .nav-link {
      padding: 0.5rem 2rem 0.5rem 2rem;
    }
    .nav-link:hover {
      padding: 0.5rem 2rem 0.5rem 2rem;
    }
  }
`