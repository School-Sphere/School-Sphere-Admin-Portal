import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      const allowedFormats = ['csv', 'xlsx'];
      const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase();

      if (fileExtension && allowedFormats.includes(fileExtension)) {
        setFile(uploadedFile);
        setError(null); // Clear error if file is valid
      } else {
        setError('Invalid file format. Please upload a .csv or .xlsx file.');
        setFile(null);
      }
    }
  };

  const handleSubmit = () => {
    if (!file) {
      setError('Please upload a file before proceeding.');
      return;
    }

    // Handle the file upload logic here
    console.log('File uploaded:', file);
    navigate('/dashboard/students'); // Redirect back to the Students page
  };

  const handleCancel = () => {
    navigate('/dashboard/students'); // Redirect back to the Students page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl"> {/* Increased width and padding */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">File Upload</h1> {/* Larger heading */}

        <div className="border-4 border-dashed border-gray-300 rounded-lg p-10 text-center"> {/* Larger dropzone */}
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex flex-col items-center space-y-4 text-blue-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12 text-gray-400" // Increased size of the upload icon
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16v-4m0 0V4m0 8H8m4 0h4"
              />
            </svg>
            <span className="text-lg">Click or drag file to this area to upload</span> {/* Increased text size */}
          </label>
          <p className="text-base text-gray-500 mt-4">
            Formats accepted are .csv and .xlsx
          </p>
        </div>

        {file && (
          <div className="mt-6 text-lg text-gray-900"> {/* Larger text for file name */}
            Selected File: <span className="font-medium">{file.name}</span>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <div className="mt-8 flex justify-end space-x-6"> {/* Increased spacing between buttons */}
          <button
            onClick={handleCancel}
            className="px-6 py-3 bg-gray-200 rounded-md text-lg font-medium" // Larger button
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-medium hover:bg-indigo-700" // Larger button
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;