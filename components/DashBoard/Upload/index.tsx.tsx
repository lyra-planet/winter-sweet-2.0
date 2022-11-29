import React, { useRef, useState } from "react";
import { File } from "../../../assets";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const Upload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      console.log(file)
      if (file.size < maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };
  return (
    <>
    {
      Object.keys(files)[0]?   <section className=" relative bg-neutral-100 w-full h-1/2 border flex flex-col items-center justify-center">
        <p>
          <File className=" text-neutral-400 w-20 h-20"/>
        </p>
      <section>
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName];
          return (
            <article key={fileName} className="flex flex-col items-center space-y-2">
                  <p>文件名称 : {file.name}</p>
                  <p>文件大小 : {convertBytesToKB(file.size)} kb</p>
                    <button
                      className=" cursor-pointer bg-red-500 text-white font-semibold py-1 px-2 hover:scale-105 duration-150 transition"
                      onClick={() => removeFile(fileName)}
                    >删除文件</button>
            </article>
          );
        })}
      </section>
    </section>:  <section className=" cursor-pointer relative bg-radial w-full h-1/2 border flex flex-col items-center justify-center space-y-2">
        <label className=" text-lg font-serif">{label}</label>
        <button type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span>点击上传或</span>
        </button>
        <p className="text-red-500 font-semibold">拖拽上传</p>
        <input className=" 
        cursor-pointer opacity-0 absolute top-0 left-0 right-0 bottom-0
        "
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </section>
    }



    </>
  );
};

export default Upload;