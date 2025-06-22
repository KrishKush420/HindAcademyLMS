import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  User,
  Award
} from 'lucide-react';
import { cn } from '@hind-lms/design-system';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Assignments', href: '/assignments', icon: FileText },
  { name: 'Grades', href: '/grades', icon: Award },
  { name: 'Profile', href: '/profile', icon: User },
];

const StudentSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 px-4 py-4">
        <GraduationCap className="h-8 w-8 text-teal-600" />
        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
          Student Portal
        </span>
      </div>

      {/* Navigation */}
      <nav className="mt-5 flex-1 px-2 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-teal-100 text-teal-900 border-r-2 border-teal-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 flex-shrink-0 h-6 w-6',
                  isActive ? 'text-teal-500' : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default StudentSidebar;