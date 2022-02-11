import React from 'react';
import './styles.scss';

import Topic from '../Topic';
import { TOPICS_DATA } from '../../data-mock';

const TopicList = () => {
	const topicList = TOPICS_DATA.map((topic, i) => (
		<Topic key={i} {...topic}></Topic>
	));

	return <>{topicList}</>;
};

export default TopicList;
