const ITEMS_DATA = [
	{ title: 'Learn React', url: 'https://' },
	{ title: 'Learn React 2', url: 'https://' },
	{ title: 'Learn React 3', url: 'https://' },
];

const BOOKS_DATA = [
	{
		title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems',
		authors: ['Lea Verou'],
		url: 'https://drive.google.com/file/d/16zEuItLjSPeNVsL7cYic_SCVSQfPL03K/view',
		currentPage: 50,
		totalPages: 354,
		completed: false,
		creationDate: Date.now(),
	},
	{
		title: 'The Pragmatic Programmer',
		authors: ['Andy Hunt', 'Dave Thomas'],
		url: 'https://drive.google.com/file/d/1ZMG9qSyzGvSTMsGMJZgQdMWEInuHvoYm/view',
		currentPage: 0,
		totalPages: 497,
		completed: false,
		creationDate: Date.now(),
	},
	{
		title: 'Refactoring UI',
		authors: ['Adam Wathan'],
		url: 'https://drive.google.com/file/d/17kUSmiI8jbFHM02l5_9Mtj2uV5JqFESv/view',
		currentPage: 252,
		totalPages: 252,
		completed: true,
		creationDate: Date.now(),
	},
	{
		title: 'The Passionate Programmer',
		authors: ['Chad Fowler'],
		url: 'https://drive.google.com/file/d/14WplAQXviV5gHmn0FTJfkFHhdSWt3Kdo/view',
		currentPage: 101,
		totalPages: 209,
		completed: false,
		creationDate: Date.now(),
	},
];

const VIDEO_DATA = [
	{ title: 'Learn React Video', url: 'https://' },
	{ title: 'Learn React Video 2', url: 'https://' },
	{ title: 'Learn React Video 3', url: 'https://' },
];

const CHILD_DATA = [
	{ title: 'JSX', url: 'https://' },
	{ title: 'Components', url: 'https://' },
	{ title: 'Redux', url: 'https://' },
];

const TASKS_DATA = [
	{
		title: 'Learn JSX',
		body: 'Some longer more descriptive text, explaining what exactly to do',
		completed: false,
	},
	{
		title: 'Build components',
		body: 'Some longer more descriptive text, explaining what exactly to do',
		completed: false,
	},
	{
		title: 'Set up Webpack',
		body: 'Some longer more descriptive text, explaining what exactly to do',
		completed: false,
	},
];

const TOPICS_DATA = [
	{
		title: 'React',
		path: 'react',
		bookIds: ['SeRtQTT5dgeS2fNtfasM'],
	},
	{
		title: 'jQuery',
		path: 'jquery',
		bookIds: ['sekzoAKyTUG5GxLbtHXM'],
	},
	{
		title: 'Current',
		path: 'current',
		bookIds: [
			'QSyFXtQaXW46fH9phwAe',
			'SeRtQTT5dgeS2fNtfasM',
			'rPwMhofSv9A5B9JY8Sjf',
			'sekzoAKyTUG5GxLbtHXM',
		],
	},
];

export {
	ITEMS_DATA,
	BOOKS_DATA,
	VIDEO_DATA,
	CHILD_DATA,
	TASKS_DATA,
	TOPICS_DATA,
};
