import Sidebar from './Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content-container bg-gray-100 text-gray-900 dark:bg-gray-800-900 dark:text-gray-400">
        Some Content
      </div>
    </div>
  );
}

export default App;
