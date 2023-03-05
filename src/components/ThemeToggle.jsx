import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkmode';

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  const tooltipText = 'Toggle Theme';
  return (
    <button
      onClick={handleMode}
      className="relative flex items-center justify-center h-12 w-12 mt-auto mb-2 mx-auto bg-gray-400 text-green-700 dark:bg-gray-800 dark:text-yellow-300 hover:bg-yellow-400 hover:text-black rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
    >
      {darkTheme ? <FiSun size="1.5rem" /> : <FiMoon size="1.5rem" />}
      <span className="sidebar-tooltip group-hover:scale-100">
        {tooltipText}
      </span>
    </button>
  );
}
