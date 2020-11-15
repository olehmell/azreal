import { EuiFilePicker, EuiFilePickerProps, EuiFormErrorText } from "@elastic/eui";
import React from "react";
import { useAddDocument } from "src/graphql/query/documents/addDocument";
import { useAddDocuments } from "src/graphql/query/documents/addDocuments";
import { useAddPhoto } from "src/graphql/query/photos/addPhoto";
import { useAddPhotos } from "src/graphql/query/photos/addPhotos";
import { az_docs_Documents_insert_input, az_docs_Photo_insert_input, document_type } from "src/types/graphql-global-types";

type FilePicker = Omit<EuiFilePickerProps, 'onChange'> & {
  onChange: (fileId?: number) => void
}

type DocumentPicker = FilePicker & {
  documentType: document_type
}

const InnerFileLoader = (props: EuiFilePickerProps) => <EuiFilePicker
  multiple
  compressed
  fullWidth
  display='large'
  {...props}
/>

export const DocumentLoader = ({ onChange, name, documentType }: DocumentPicker) => {
  const [ addDocuments, { loading, error } ] = useAddDocument()

  return <>
    <InnerFileLoader
      name={name}
      isLoading={loading}
      accept='.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      initialPromptText="Виберіть або перетягніть файл"
      onChange={async (files) => {
        const documents: az_docs_Documents_insert_input[] = []

        for (const file of files) {
          const documentBody = await file.text()
          documents.push({ documentType, documentBody })
        }

        console.log(documents)

        try {
          const { data } = await addDocuments({ variables: { documentBody: documents[0].documentBody, documentType } })
          const fileIds = data.insert_az_docs_Documents.returning
          const fileId = fileIds[0].documentId
          onChange(fileId);
        } catch (error) {
          console.error(error)
          onChange();
        }

      }}
    />
    {error && <EuiFormErrorText>{error.message}</EuiFormErrorText>}
  </>
}

export const PhotoLoader = ({ onChange, name }: FilePicker) => {
  const [ addPhotos, { data, loading, error } ] = useAddPhotos()

  return <>
    <InnerFileLoader
      name={name}
      isLoading={loading}
      accept='image/*'
      initialPromptText="Виберіть або перетягніть фото"
      onChange={async (files) => {
        const photos: az_docs_Photo_insert_input[] = []

        for (const file of files) {
          const photoSeries = await file.arrayBuffer()
          photos.push({ photoSeries })
        }

        await addPhotos({ variables: { objects: photos }})

        if (!error) {
          const fileIds = data.insert_az_docs_Photo.returning
          const fileId = fileIds[0].photoId
          onChange(fileId);
        }
      }}
    />
    {error && <EuiFormErrorText>{error.message}</EuiFormErrorText>}
  </>
}