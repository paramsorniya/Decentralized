/*import {useState} from "react" ;
import axios from "axios";
import "./FileUpload.css"
const FileUpload = ({contract,account,provider }) => {
    
    const [file,setFile]= useState(null);
    const [fileName,setFileName]=useState("No image selected");
    const handlesubmit = async(e)=>{
 e.preventDefault();
 if(file){
try {
    const formData = new formData();
    formData.append("file", file);
    const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `b677c2f47912bc69e41c`,
          pinata_secret_api_key: `c708d10e09f6747207c2a58834571ba53e79751cc47e5d6b7b03f690b987788f`,
          "Content-Type": "multipart/form-data",
        },
    });
    const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
    //const signer = contract.connect(provider.getSigner());
   // signer.add(account,ImgHash)
    contract.add(account,ImgHash);
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);

}catch (e) {
    alert("Unable to upload image to Pinata");
}
 }
 /*alert("Successfully Image Uploaded");
 setFileName("No image selected");
 setFile(null);*
    };
    const retriverFile = (e) =>{
const data = e.target.files[0];
//console.log(data);
const reader = new window.FileReader();
reader.readAsArrayBuffer(data);
reader.onloadend=()=>{
    setFile(e.target.files[0]);

};
setFileName(e.target.files[0].name);
e.preventDefault();
    };

    
    return(
         <div className ="top">
        <form className="form" onSubmit ={handlesubmit}>
            
            <label htmlFor = "file-upload" className="choose">
                Choose Image
            </label>
            <input disabled = {!account} type ="file" id = "file-upload" name = "data" onChange={retriverFile}/>
            <span className="textArea">Image: {fileName}</span>
            
            <button type = "submit" className="upload" disabled={!file} >Upload File
                </button> 
         </form>
    </div>
    );
};

export default FileUpload; */

import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `850a8621e54b0552299a`,
            pinata_secret_api_key: `cca53c20358ef0e34920f3b659527f36ce5d1f748d953f3bf42447c3c2496e6d`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account,ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: {fileName}</span>
        <button type="submit" className="upload" disabled={!file}>
          Upload File
        </button>
      </form>
    </div>
  );
};
export default FileUpload;