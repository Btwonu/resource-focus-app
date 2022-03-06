// Dependencies
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Dashboard, Empty } from '../pages';

// Components
import Topic from '../components/Topic';

// Test
import '../services/seed';

const App = () => {
  return (
    <BrowserRouter>
      {/* <TopicList /> */}
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path=":topicId" element={<Topic />} />
          <Route path="*" element={<Empty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
