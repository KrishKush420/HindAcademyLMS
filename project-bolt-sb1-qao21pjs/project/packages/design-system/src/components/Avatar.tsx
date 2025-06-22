import React from 'react';
import { User } from 'lucide-react';
import { cn } from '../utils/cn';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallback?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className, 
  fallback 
}) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
  };

  return (
    <div className={cn('relative inline-flex shrink-0 overflow-hidden rounded-full', sizes[size], className)}>
      {src ? (
        <img
          className="aspect-square h-full w-full object-cover"
          src={src}
          alt={alt}
        />
      ) : fallback ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-600">
          <span className="text-xs font-medium">{fallback}</span>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-600">
          <User className={iconSizes[size]} />
        </div>
      )}
    </div>
  );
};