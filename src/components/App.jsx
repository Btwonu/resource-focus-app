import { ITEMS_DATA, BOOKS_DATA, VIDEO_DATA, CHILD_DATA } from '../data-mock';
import React from 'react';
import Hero from './Hero';
import Section from './Section';
import Shell from './Shell';
import Divider from './Divider';
import Button from './Button';
import SubSection from './Sub-section';
import TaskList from './Task-list';
import VideoForm from './Video-form/VideoForm';
import Modal from './Modal';

const App = () => {
	const returnLinkItem = (item, i) => {
		return (
			<li key={i}>
				<a href={item.url}>{item.title}</a>
			</li>
		);
	};

	const itemsArray = ITEMS_DATA.map(returnLinkItem);
	const booksArray = BOOKS_DATA.map(returnLinkItem);
	const videoArray = VIDEO_DATA.map(returnLinkItem);
	const childArray = CHILD_DATA.map(returnLinkItem);

	return (
		<div className="wrapper">
			<Shell>
				<Hero />
				<Button />
				<Divider />
				<Section title="Readings" items={itemsArray}>
					<SubSection title="Books" items={booksArray} />
				</Section>

				<Section title="Videos" items={videoArray}>
					<Modal>
						<VideoForm></VideoForm>
					</Modal>
				</Section>

				<Section title="Tasks">
					<TaskList></TaskList>
				</Section>

				<Section title="Child Pages" items={childArray}></Section>
			</Shell>
		</div>
	);
};

export default App;
