import { MutationTuple, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { az_docs_Documents_insert_input } from "src/types/graphql-global-types";
import { ADD_DOCUMENT } from "./addDocument";
import { AddDocuments, AddDocumentsVariables } from "./types/AddDocuments";

export const ADD_DOCUMENTS = gql`
  mutation AddDocuments($objects: [az_docs_Documents_insert_input!]!) {
    insert_az_docs_Documents(objects: $objects) {
      returning {
        documentId
      }
    }
  }`

export const useAddDocuments = () => useMutation<AddDocuments, AddDocumentsVariables>(ADD_DOCUMENT)
