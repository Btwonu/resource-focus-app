import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Data
import { TOPICS_DATA } from '../data-mock';

// Services
import { getTopics } from '../services/topic-service';

const Dashboard = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setTopics([]);
  }, []);

  const topicsList = topics.map((topic) => (
    <li key={topic.id}>
      <Link to={topic.id}>{topic.title}</Link>
    </li>
  ));

  return (
    <>
      <h2>Dashboard</h2>

      <ul>{topicsList}</ul>
      <Outlet />
    </>
  );
};

export default Dashboard;
