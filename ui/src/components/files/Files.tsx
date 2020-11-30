import { EuiButton, EuiFlexGroup, EuiImage, EuiLoadingSpinner, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiOverlayMask, EuiText } from '@elastic/eui'
import React, { useCallback, useState } from 'react'
import { Images } from './Images'
import { PdfViewer } from './PdfViewer'
import { getFileUri, useGetFiles } from './utils'

type ImagesProps = {
  fileIds: string[]
}
export const Files = (props: ImagesProps) => <Images {...props} />
// export const Files = ({ fileIds }: ImagesProps) => {
//   const { data, loading } = useGetFiles(fileIds)
//   const [ selectFile, setSelectFile ] = useState<File>()
//   const [ show, setShow ] = useState(false)

//   const open = (file: File) => {
//     setSelectFile(file)
//     setShow(true)
//   }
//   const close = () => {
//     setShow(false)
//     setSelectFile(undefined)
//   }

//   const ViewFileModal = useCallback(() => selectFile && show ? <EuiOverlayMask onClick={close}>
//     <EuiModal onClose={close}>
//       <EuiModalHeader>
//         <EuiModalHeaderTitle>{selectFile.name}</EuiModalHeaderTitle>
//       </EuiModalHeader>

//       <EuiModalBody>
//         <PdfViewer url={getFileUri(selectFile)} />
//       </EuiModalBody>

//     </EuiModal>
//   </EuiOverlayMask> : null, [ selectFile ]) 

//   console.log('FILes', data, fileIds)

//   const FileList = useCallback(() => <>
//     {loading
//       ? <EuiLoadingSpinner size='l' />
//       : data?.map(file => <EuiButton
//         key={file.name}
//         fill
//         color="ghost"
//         size='s'
//         iconType="currency"
//         onClick={() => open(file)}
//       >
//         {file.name}
//       </EuiButton>)}
//   </>, [ data?.length ])

//   return <EuiFlexGroup justifyContent='center' alignItems='center'>
//     <FileList />
//     <ViewFileModal />
//   </EuiFlexGroup>
  
// }