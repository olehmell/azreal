import { EuiButton, EuiFlexGroup, EuiImage, EuiLoadingSpinner, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiOverlayMask, EuiText } from '@elastic/eui'
import React, { useCallback, useState } from 'react'
import { Images } from './Images'
import { PdfViewer } from './PdfViewer'
import { getFileLinks, getFileUri, useGetFiles } from './utils'

type ImagesProps = {
  fileIds: string[]
}
// export const Files = (props: ImagesProps) => <Images {...props} />
export const Files = ({ fileIds }: ImagesProps) => {
  const [ selectLink, setSelectFile ] = useState<string>()
  const [ show, setShow ] = useState(false)
  const links = getFileLinks(fileIds)

  const open = (file: string) => {
    setSelectFile(file)
    setShow(true)
  }
  const close = () => {
    setShow(false)
    setSelectFile(undefined)
  }

  const ViewFileModal = useCallback(() => selectLink && show ? <EuiOverlayMask onClick={close}>
    <EuiModal onClose={close}>
      <EuiModalBody>
        <PdfViewer url={selectLink} />
      </EuiModalBody>

    </EuiModal>
  </EuiOverlayMask> : null, [ selectLink ]) 

  console.log('FILes', links, fileIds)

  const FileList = useCallback(() => <>
    {links?.map((link, i) => <EuiButton
      key={link}
      fill
      color="ghost"
      size='s'
      iconType="currency"
      onClick={() => open(link)}
    >
      {`Файл - ${i + 1}`}
    </EuiButton>)}
  </>, [ links?.length ])

  return <EuiFlexGroup justifyContent='center' alignItems='center'>
    <FileList />
    <ViewFileModal />
  </EuiFlexGroup>
  
}