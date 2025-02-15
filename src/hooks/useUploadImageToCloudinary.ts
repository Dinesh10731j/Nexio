import axios from 'axios';


const cloudinaryCloudName = 'dztcsje3w'; 



export const UseUploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset',"researchlink");

  try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload`, formData);
    return response.data.secure_url; 
  } catch (error) {

    if(error instanceof Error){
    throw new Error('Failed to upload image. Please try again.');
    }
    
  }
};