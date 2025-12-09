import userModel from "../models/userModel";
import FormData from "form-data";
import axios from "axios";



export const generateImage = async (req, res) => {   

   try {
     
    const { userId , prompt  } = req.body;

    const user = await userModel.findById(userId);

    if(!user || !prompt){
        return res.json({ success:false,message: 'Missing Details' });
    }
    
    if(user.creditBalance === 0 || userModel.creditBalance < 0){
        return res.json({ success:false,message: 'Insufficient Credits',creditBalance:user.creditBalance });
    }
   const formData = new FormData();
   formData.append('prompt', prompt);

   const {data}=await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
    
    headers: { 
        'x-api-key': process.env.CLIPDROP_API_KEY
    },
    responseType: 'arraybuffer'
     
   })


   } catch (error) {
    console.log(error);
    res.json({ success:false,message: error.message });
   }
}