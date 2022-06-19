// Dependencies
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Dashboard, Empty } from '../pages';
import TopicDetails from '../pages/TopicDetails';

// Test
import '../services/seed';

const App = () => {
	return (
		<BrowserRouter>
			{/* <TopicList /> */}
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route path="*" element={<Empty />} />
				</Route>

				<Route
					path="/topics/:topicId"
					element={<TopicDetails />}
					exact
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
