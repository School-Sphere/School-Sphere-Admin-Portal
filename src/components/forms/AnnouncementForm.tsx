import React from 'react';

interface AnnouncementFormProps {
    onSubmit: (e: React.FormEvent) => void;
}

const AnnouncementForm: React.FC<AnnouncementFormProps> = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="bg-white rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Announcement</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title of Announcement
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description of Announcement
                </label>
                <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
                />
            </div>
            <input
                type="file"
                accept="*/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Announcement Audience
                </label>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="audience"
                            value="teachers"
                            className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Only Teachers</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="audience"
                            value="all"
                            className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">For All</span>
                    </label>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Add Announcement
                </button>
            </div>
        </form>
    );
};

export default AnnouncementForm;