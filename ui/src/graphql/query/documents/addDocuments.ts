import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AddDocuments, AddDocumentsVariables } from "./types/AddDocuments";

export const ADD_DOCUMENTS = gql`
  mutation AddDocuments($objects: [az_docs_Documents_insert_input!]!) {
    insert_az_docs_Documents(objects: $objects) {
      returning {
        documentId
      }
    }
  }`

export const useAddDocuments = () => useMutation<AddDocuments, AddDocumentsVariables>(ADD_DOCUMENTS)
