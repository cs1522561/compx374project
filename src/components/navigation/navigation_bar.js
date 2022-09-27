import React, { useState } from 'react';
import { useNavigate, NavLink, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import perrinn_logo from '../../images/PERRINN logo.png';
import { NavbarToggle } from 'react-bootstrap'

import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, } from 'mdb-react-ui-kit';
import { Container, Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';

import './styles/navbar.css';

function NavBar() {
	const [showNavRight, setShowNavRight] = useState(false);
	const navigate = useNavigate()

	function navToAccount() {
		console.log('run')
		navigate('/user-profile')
	}


	return (
		<MDBNavbar expand='lg' className='navbar fixed-top' light bgColor='light' style={{padding: '0px 80px 0px 80px'}}>
				<MDBNavbarBrand href='https://thrillcapital.com'>
					<img src={perrinn_logo} className='perrinn-logo' height={'80'} alt='Perrinn Logo'/>
				</MDBNavbarBrand>
				<MDBContainer fluid>
					<MDBNavbarToggler type='button' data-target='#navbarRightAlignExample' aria-controls='navbarRightAlignExample' aria-expanded='false' aria-label='Toggle navigation' onClick={() => setShowNavRight(!showNavRight)}>
						<MDBIcon icon='bars' fas />
					</MDBNavbarToggler>
					<MDBCollapse navbar show={showNavRight}>
						<MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
							<MDBNavbarItem>
								<MDBNavbarLink href="/home">Home</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/competition">Competition</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/leaderboard">Leaderboard</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/download">Download</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/about" className='nav-link'>About</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/user-profile">Account</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
		</MDBNavbar>
	)
}
		
export default NavBar;
		


			


		
