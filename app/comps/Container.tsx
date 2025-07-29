'use client';

import React from 'react';
import clsx from 'clsx'; // Optional: helps cleanly merge class names

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={clsx(
        "max-w-[1980px] mx-auto xl:px-20 md:px-10 px-4 sm:px-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
