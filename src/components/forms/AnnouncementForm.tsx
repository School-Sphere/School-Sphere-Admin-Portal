import React, { useState } from 'react';
import { createAnnouncement } from '../../api/announcementApi';

interface AnnouncementFormProps {
    onAnnouncementAdded: () => void;
}

const AnnouncementForm: React.FC<AnnouncementFormProps> = ({ onAnnouncementAdded }) => {
    // Define initial form state
    const initialFormState = {
        title: '',
        description: '',
        targetAudience: 'ALL',
    };

    const [formData, setFormData] = useState(initialFormState);

    // Handler to update form state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createAnnouncement(formData);
            // Reset the form to initial state
            setFormData(initialFormState);
            // Call the callback function to notify parent component
            onAnnouncementAdded();
        } catch (error) {
            console.error('Error creating announcement:', error);
        }
    };

    return (
        <form className="bg-white rounded-lg p-6 space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Announcement</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title of Announcement
                </label>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description of Announcement
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Announcement Audience
                </label>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="targetAudience"
                            checked={formData.targetAudience === 'TEACHERS_ONLY'}
                            value="TEACHERS_ONLY"
                            onChange={handleChange}
                            className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Only Teachers</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="targetAudience"
                            checked={formData.targetAudience === 'ALL'}
                            value="ALL"
                            onChange={handleChange}
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