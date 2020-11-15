import { EuiFilePicker, EuiFilePickerProps, EuiFormErrorText } from "@elastic/eui";
import React from "react";
import { useAddDocument } from "src/graphql/query/documents/addDocument";
import { useAddPhoto } from "src/graphql/query/photos/addPhoto";
import { document_type } from "src/types";

type FilePicker = Omit<EuiFilePickerProps, 'onChange'> & {
  onChange: (fileId: number) => void,
  documentType: document_type
}

export const DocumentLoader = ({ onChange, name, documentType }: FilePicker) => {
  const [ addDocument, { data, loading, error } ] = useAddDocument()

  return <>
    <EuiFilePicker
      name={name}
      isLoading={loading}
      accept='.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      initialPromptText="Виберіть або перетягніть файл"
      onChange={async (files) => {
        const file = files.item(0)

        const documentBody = await file.text()
        await addDocument({ variables: { documentType, documentBody }})

        if (!error) {
          const fileId = data.insert_az_docs_Documents.returning[0].documentId
          onChange(fileId);
        }
      }}
      display='large'
    />
    {error && <EuiFormErrorText>{error}</EuiFormErrorText>}
  </>
}

export const PhotoLoader = ({ onChange, name, documentType }: FilePicker) => {
  const [ addPhoto, { data, loading, error } ] = useAddPhoto()

  return <>
    <EuiFilePicker
      name={name}
      isLoading={loading}
      accept='image/*'
      initialPromptText="Виберіть або перетягніть фото"
      onChange={async (files) => {
        const file = files.item(0)

        const photoSeries = await file.arrayBuffer()
        await addPhoto({ variables: { photoSeries }})

        if (!error) {
          const fileId = data.insert_az_docs_Photo.returning[0].photoId
          onChange(fileId);
        }
      }}
      display='large'
    />
    {error && <EuiFormErrorText>{error}</EuiFormErrorText>}
  </>
}