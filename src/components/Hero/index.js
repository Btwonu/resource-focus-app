import React from 'react';
import Logo from '../Logo';
import ListLinks from '../List-links';
import reactLogo from '../../images/logo-react.png';
import './styles.scss';

const DATA = [
	{ id: 0, title: 'Documentation', url: 'https://' },
	{ id: 1, title: 'Something', url: 'https://' },
];

const Hero = ({ title }) => {
	const links = DATA.map((link) => (
		<li key={link.id}>
			<a href={link.url}>{link.title}</a>
		</li>
	));

	const addLink = (link) => {
		const linkObj = {
			title: link.title,
			url: link.url,
		};

		DATA.push(linkObj);
	};

	return (
		<div className="hero">
			<h1 className="hero__head">{title}</h1>

			<Logo src={reactLogo} />

			<div className="hero__body">
				<p>A JavaScript library for building user interfaces</p>

				<ListLinks>{links}</ListLinks>
			</div>
		</div>
	);
};

export default Hero;
