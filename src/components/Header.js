import React from "react";
import styled from "styled-components";

const Header = () => {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			<NavMenu>
				<a>
					<img src="/images/home-icon.svg" alt="Home icon" />
					<span>HOME</span>
				</a>
				<a>
					<img src="/images/search-icon.svg" alt="Search icon" />
					<span>SEARCH</span>
				</a>
				<a>
					<img
						src="/images/watchlist-icon.svg"
						alt="WatchList icon"
					/>
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="/images/original-icon.svg" alt="Originals icon" />
					<span>ORIGINALS</span>
				</a>
				<a>
					<img src="/images/movie-icon.svg" alt="Movies icon" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/images/series-icon.svg" alt="Series icon" />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImg src="https://lh3.googleusercontent.com/ogw/ADGmqu9dmqP5MYdHczgj7YO4N3udu1t5jS0jEcsWEB9mZA=s32-c-mo" />
		</Nav>
	);
};

export default Header;

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.42px;
		}
	}
`;

const UserImg = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
	cursor: pointer;
`;
