import React, { useContext } from 'react';
import { Context } from '../../Context';
import { CustomLink } from '../../js/utility/CustomLink';
import styled from 'styled-components';

import IsLoggedIn from './functions/IsLoggedIn';
import MobileNavBar from './functions/MobileNavBar';

const Navbar = () => {
	const { isLoggedIn, setIsLoggedIn, userLevel, setIsBotIn, setUserLevel } = useContext(Context);

	return (
		<Nav>
			<nav className="navbar">
				<div id="brand">
					<span className="Bot-Name-1">DontAdd</span>
					<span className="Bot-Name-2">ThisBot</span>
				</div>
				<nav className="middle-navbar">
					<ul>
						<CustomLink to="/">Home</CustomLink>
						<CustomLink to="/leaderboard">Leaderboard</CustomLink>
						<CustomLink to="/commands">Commands</CustomLink>
						<li>
							<a href="https://stats.kattah.me">Stats</a>
						</li>
					</ul>
				</nav>
				<nav className="right-navbar">
					<IsLoggedIn userAuth={isLoggedIn} userLevel={userLevel} setAuthState={setIsLoggedIn} setIsBotIn={setIsBotIn} setUserLevel={setUserLevel} />
				</nav>
				<div
					id="hamburger-icon"
					onClick={(event) => {
						if (event.target.id === 'hamburger-icon') {
							event.target.classList.toggle('open');
						} else {
							event.target.parentElement.classList.toggle('open');
						}
					}}
				>
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
					<ul className="mobile-menu">
						<MobileNavBar userAuth={isLoggedIn} userLevel={userLevel} setAuthState={setIsLoggedIn} setIsBotIn={setIsBotIn} setUserLevel={setUserLevel} />
					</ul>
				</div>
			</nav>
		</Nav>
	);
};

const Nav = styled.nav`
	nav a {
		text-decoration: none;
	}

	nav.middle-navbar {
		@media (max-width: 850px) {
			font-size: 0.8em;
		}
	}

	nav.right-navbar {
		#login {
			margin-left: 1em;
		}
		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-top: 5px;
			@media (max-width: 850px) {
				margin-left: -50px;
			}
			:hover {
				transition: 0.5s;
				cursor: pointer;
				transform: scale(1.1);
			}
		}

		.dropdown-content {
			flex-direction: column;
			padding: 0;
			display: none;
			position: absolute;
			border-radius: 5px;
			background-color: #1d1f1d;
			min-width: 2%;
			margin-left: 5px;
			margin-top: -5px;

			li.dropdown-text {
				color: white;
				padding: 5px 16px;
				text-decoration: none;
				display: block;
				margin: 5px;
				text-align: center;
			}

			li.dashboard {
				border-bottom: 1px solid #3a3a3a;
				a,
				p.user-level {
					color: white;
					font-weight: 500;
					:hover {
						transition: 0.3s;
						color: grey;
					}
				}
			}
		}

		@media (max-width: 850px) {
			font-size: 0.8em;
		}
	}

	nav {
		padding: 0 20px;
		background-color: #1d1f1d;
		height: 75px;
		display: flex;
		justify-content: space-between;
		border-bottom: 7px solid #7a749d;
		nav {
			display: flex;
			align-items: center;
			ul {
				display: flex;
				list-style: none;
				display: flex;
				align-items: center;
				justify-content: space-around;
				li {
					margin: 0 10px;
					padding: 5px;
					margin-left: 10px;
					border-radius: 5px;
					transition: 0.3s;
					a {
						color: white;
						font-size: 1.2em;
						font-weight: 500;
						transition: all 0.3s ease;
						&:hover {
							color: #7a749d;
						}
					}
				}
			}
		}
	}

	#navbar {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0.5rem 1rem;
	}

	#brand {
		font-weight: bold;
		font-size: 18px;
		display: flex;
		align-items: center;
		span {
			&.Bot-Name-1 {
				color: #f8f8f8;
			}
			&.Bot-Name-2 {
				color: #998fd2;
			}
		}
	}

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-around;
		a {
			color: white;
		}
		li {
			padding: 5px;
			margin-left: 10px;
			border-radius: 5px;
			transition: 0.3s;
			&:hover {
				transform: scale(1.1);
				transition: 0.3s;
			}
		}
	}

	#login,
	#logout {
		border-radius: 5px;
		padding: 5px 8px;
		cursor: pointer;
	}

	#login {
		border: 1px solid #9146ff;
		a {
			color: #9146ff;
		}
	}

	#logout {
		border: 1px solid #ff3860;
		:hover {
			transition: 0.5s;
			background-color: #ff3860;
			a {
				color: white;
			}
		}
		a {
			color: #ff3860;
		}
	}

	#hamburger-icon {
		margin: auto 0;
		display: none;
		cursor: pointer;
	}

	#hamburger-icon div {
		width: 35px;
		height: 3px;
		background-color: white;
		margin: 6px 0;
		transition: 0.4s;
	}

	.open .bar1 {
		-webkit-transform: rotate(-45deg) translate(-6px, 6px);
		transform: rotate(-45deg) translate(-6px, 6px);
	}

	.open .bar2 {
		opacity: 0;
	}

	.open .bar3 {
		-webkit-transform: rotate(45deg) translate(-6px, -8px);
		transform: rotate(45deg) translate(-6px, -8px);
	}

	.open .mobile-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		border-bottom: 7px solid #7a749d;
	}

	.mobile-menu {
		display: none;
		position: absolute;
		left: 0;
		margin-top: 0;
		width: 100%;
		background-color: #1d1f1d;
		z-index: 1;
		padding: 0px 0px 0px 0px;
	}

	.mobile-menu li {
		margin-bottom: 10px;
	}

	@media only screen and (max-width: 768px) {
		#brand {
			font-size: 13px;
		}
		nav nav {
			display: none;
		}

		#hamburger-icon {
			display: block;
		}

		li {
			margin: 0 10px;
			text-align: center;
		}

		ul.mobile-text-dropdown {
			margin-right: 2.5rem;
			display: flex;
			margin-top: 2.5rem;

			li {
				margin: 0;
				margin-top: -35px;
			}

			a,
			p.user-level {
				color: grey;
				font-weight: 500;
			}
		}
	}
`;

export default Navbar;
