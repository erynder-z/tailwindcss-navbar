import React from 'react';
import { FiAtSign, FiBox, FiCompass, FiCoffee, FiHeart } from 'react-icons/fi';
import SidebarIcon from './SidebarIcon';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-white shadow">
      <i>
        <SidebarIcon icon={<FiAtSign size="1.5rem" />} />
      </i>
      <i>
        <SidebarIcon icon={<FiBox size="1.5rem" />} />
      </i>
      <i>
        <SidebarIcon icon={<FiCompass size="1.5rem" />} />
      </i>
      <i>
        <SidebarIcon icon={<FiCoffee size="1.5rem" />} />
      </i>
      <i>
        <SidebarIcon icon={<FiHeart size="1.5rem" />} />
      </i>
      <ThemeToggle />
    </div>
  );
}
