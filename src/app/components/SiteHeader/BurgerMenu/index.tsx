'use client';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavDraw from '../NavDraw';
import { NavDrawContext } from '../../../../../store/navDrawContext';

import styles from './styles.module.scss';

const Navbar = () => {
	const { toggleNav, navDrawOpen, setNavDrawOpen } = useContext(NavDrawContext);

	const renderMobileBtns = () => {
		return (
			<div className={styles.menuWrap} onClick={() => toggleNav()}>
				<p>menu</p>
				<div className={styles.burgerContainer}>
					<button
						type='button'
						className={`${styles.hamburger} ${navDrawOpen ? styles.active : ''}`}
					>
						<span />
						<span />
					</button>
				</div>
			</div>
		);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navLeft}>
				<Link href={'/'} onClick={() => setNavDrawOpen(false)}>
					<Image
						src='/siteIcons/seventh-logo.svg'
						alt='Logo'
						width={210}
						height={40}
					/>
				</Link>
				<p>subscribe</p>
				<p>client service</p>
			</div>
			<div className={styles.navRight}>
				<p>united kingdom</p>
				<Image
					className={styles.navIcon}
					src='/siteIcons/heart.svg'
					alt='heart'
					width={20}
					height={23}
				/>
				<Image
					className={styles.navIcon}
					src='/siteIcons/bag.svg'
					alt='bag'
					width={20}
					height={23}
				/>
				<Image
					className={styles.navIcon}
					src='/siteIcons/person.svg'
					alt='user'
					width={20}
					height={23}
				/>
				<Image
					className={styles.navIcon}
					src='/siteIcons/search.svg'
					alt='search'
					width={20}
					height={23}
				/>

				{renderMobileBtns()}
			</div>
			<NavDraw />
		</nav>
	);
};

export default Navbar;
