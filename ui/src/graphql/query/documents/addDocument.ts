import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AddDocument, AddDocumentVariables } from "./types/AddDocument";

export const ADD_DOCUMENT = gql`
  mutation AddDocument($documentBody: String, $documentType: document_type) {
    insert_az_docs_Documents(objects: {documentBody: $documentBody, documentType: $documentType}) {
      returning {
        documentId
      }
    }
  }`

export const useAddDocument = () => useMutation<AddDocument, AddDocumentVariables>(ADD_DOCUMENT)