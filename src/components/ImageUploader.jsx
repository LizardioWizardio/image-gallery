import React from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../store/imagesSlice';

const ImageUploader = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      dispatch(addImage(reader.result));
    };
  };

  return (
    <div >
        <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
        <input 
            class="block m-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file" 
            accept="image/*" 
            onChange={handleInputChange}
        />
    </div>
  );
};

export default ImageUploader;