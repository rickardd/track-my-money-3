import React from 'react';
import './upload.css';

interface UploadProps {
  foo?: string;
}

export const Upload = ({ foo = 'bar' }: UploadProps) => {
  return (
    <div>
      {foo}
    </div>
  );
};
