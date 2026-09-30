import React, { useState } from 'react';

const PopupSettings = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    buttonText: '',
    buttonLink: '',
    delay: '3',
    frequency: '7',
    width: 'Small',
    position: 'Center',
    bgColor: '#ffffff',
    textColor: '#1e293b',
    enable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-5xl mx-auto font-sans text-gray-700">
      
      <div className="space-y-6">
        
        {/* Popup Title & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Popup Title</label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Popup Image</label>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <label className="bg-gray-100 border-r border-gray-300 px-3 py-2 text-sm font-medium cursor-pointer hover:bg-gray-200">
                Choose File
                <input type="file" className="hidden" />
              </label>
              <span className="px-3 text-sm text-gray-500">No file chosen</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Recommended: 600×400px, JPG/PNG/GIF, Max 2MB</p>
          </div>
        </div>

        {/* Popup Content */}
        <div>
          <label className="block text-sm font-semibold mb-2">Popup Content</label>
          <textarea
            name="content"
            rows="4"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Button Text & Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Button Text</label>
            <input
              type="text"
              name="buttonText"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              value={formData.buttonText}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Button Link</label>
            <input
              type="text"
              name="buttonLink"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              value={formData.buttonLink}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Delay & Frequency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Delay (seconds)</label>
            <input
              type="number"
              name="delay"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              value={formData.delay}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Frequency (days)</label>
            <input
              type="number"
              name="frequency"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              value={formData.frequency}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Popup Width & Position */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Popup Width</label>
            <select
              name="width"
              className="w-full border border-gray-300 rounded p-2 bg-white focus:outline-none focus:border-blue-500"
              value={formData.width}
              onChange={handleChange}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Popup Position</label>
            <select
              name="position"
              className="w-full border border-gray-300 rounded p-2 bg-white focus:outline-none focus:border-blue-500"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="Center">Center</option>
              <option value="Top">Top</option>
              <option value="Bottom">Bottom</option>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
            </select>
          </div>
        </div>

        {/* Background Color & Text Color */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Background Color</label>
            <div className="border border-gray-300 rounded p-1">
              <input
                type="color"
                name="bgColor"
                className="w-full h-8 cursor-pointer"
                value={formData.bgColor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Text Color</label>
            <div className="border border-gray-300 rounded p-1">
              <input
                type="color"
                name="textColor"
                className="w-full h-8 cursor-pointer"
                value={formData.textColor}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Enable Popup Checkbox */}
        <div className="pt-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="enable"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={formData.enable}
              onChange={handleChange}
            />
            <span className="text-sm font-medium">Enable Popup</span>
          </label>
        </div>

        {/* Save Button - Same Blue-to-Red Gradient as Announcement */}
        <div className="pt-4">
          <button className="flex items-center space-x-2 bg-[#0d9488] text-white font-semibold py-2 px-6 rounded shadow-md hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm5 2a1 1 0 000 2h4a1 1 0 100-2H8zm-1 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span>Save Popup Settings</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PopupSettings;