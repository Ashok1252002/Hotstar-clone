import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {
	selectUserName,
	selectUserPhoto,
	setUserLogin,
	setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						email: user.email,
						photo: user.photoURL,
					}),
					history.push("/"),
				);
			}
		});
	});

	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user;
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				}),
				history.push("/"),
			);
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			history.push("/login");
		});
	};

	return (
		<Nav>
			<Logo src="/images/logo.svg" alt="Header" />
			{!userName ? (
				<LoginCotainer>
					<Login onClick={signIn}>Login</Login>
				</LoginCotainer>
			) : (
				<>
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
							<img
								src="/images/original-icon.svg"
								alt="Originals icon"
							/>
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
					<UserImg
						onClick={signOut}
						src="https://lh3.googleusercontent.com/ogw/ADGmqu9dmqP5MYdHczgj7YO4N3udu1t5jS0jEcsWEB9mZA=s32-c-mo"
						alt="icon"
					/>
				</>
			)}
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
	overflow-x: hidden;
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
			position: relative;

			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}

		&:hover {
			span: after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`;

const UserImg = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
	cursor: pointer;
`;

const Login = styled.div`
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #f9f9f9;
		border: transparent;
		color: #000;
	}
`;

const LoginCotainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;
