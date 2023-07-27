import { useDropzone } from "react-dropzone"
import { IFileUploadArea } from "../FileUploadArea"
import { useRef, useState } from "react"
import { getMbFileSize } from "@core/helpers"

const fileOriginalState = null

const useFileUpload = (
  handleFileUpload: IFileUploadArea["handleFileUpload"],
) => {
  const [ file, setFile ] = useState<File | null>(fileOriginalState)

  const fileUploadInputNodeRef = useRef<HTMLInputElement | null>(null)

  const onDrop = (acceptedFiles: File[]) => {
    const inputFile = acceptedFiles[0]
    setFile(inputFile)
    handleFileUpload(inputFile)
  }

  const reuploadFile = () => {
    fileUploadInputNodeRef?.current?.click()
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const userFriendlyFileMbSize = file ? `${getMbFileSize(file)} MB` : ""

  return {
    file,
    userFriendlyFileMbSize,
    fileUploadInputNodeRef,
    reuploadFile,
    getRootProps,
    getInputProps,
  }
}

export default useFileUpload