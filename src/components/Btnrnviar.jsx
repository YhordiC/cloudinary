import { useState } from "react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import BtnCambiar from "./BtnCambiar";



export default function BtnEnviar() {
  const CloudName = import.meta.env.VITE_CLOUD_NAME;
  const CloudApp = import.meta.env.VITE_CLOUD_APLICATION;

  const [publicId, setPublicId] = useState("midu_wknrim");
  // Replace with your own cloud name
  const [cloudName] = useState(CloudName);
  // Replace with your own upload preset
  const [uploadPreset] = useState(CloudApp);

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

  return (
    <div className="m-auto flex  gap-3 items-center max-xl:flex-col py-11">

     <div className="flex flex-col gap-2">
     <h3>Cargar tu mejor imagen</h3>
     <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
     </div>
      <div >
        <AdvancedImage
          style={{width:'100%', maxWidth:'400px' }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>
      <BtnCambiar config={uwConfig} setBtn={setPublicId} id_public={publicId}/>
    </div>
  );
}
