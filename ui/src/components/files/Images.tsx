import { EuiFlexGroup, EuiFlexItem, EuiImage } from '@elastic/eui'
import React from 'react'
import { getFileLinks } from './utils'

type ImagesProps = {
  fileIds: string[]
}

export const Images = ({ fileIds }: ImagesProps) => {
  const links = getFileLinks(fileIds)
  const count = fileIds.length

  const ImageList = () => <>{links.map(link => 
    <EuiFlexItem key={link} style={{ margin: '.5rem' }}>
      <EuiImage
        size={count > 3 ? 's' : 'm'}
        hasShadow
        allowFullScreen
        alt={link}
        url={link}
      />
    </EuiFlexItem>
  )}</>

  return <EuiFlexGroup justifyContent='center' alignItems='center'>
    <ImageList />
  </EuiFlexGroup>
  
}