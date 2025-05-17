import React from 'react';
import TopNav from '../components/TopNav';
import './TopNavDemo.css';

const TopNavDemo = () => {
  return (
    <div className="top-nav-demo">
      <div className="demo-showcase">
        <h1>Top Navigation Component</h1>
        <p>This is a standalone demo of the Top Navigation component.</p>
        
        <div className="component-display">
          <h3>Component Preview:</h3>
          <TopNav />
        </div>

        <div className="component-info">
          <h3>Component Details:</h3>
          <ul>
            <li><strong>Repository:</strong> repo-top-nav</li>
            <li><strong>Type:</strong> Navigation Component</li>
            <li><strong>Features:</strong> Responsive design, customizable links</li>
          </ul>
        </div>

        <div className="component-code">
          <h3>Implementation Example:</h3>
          <pre>
            <code>{`import { TopNav } from 'repo-top-nav';

// Then in your component:
<TopNav />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TopNavDemo;