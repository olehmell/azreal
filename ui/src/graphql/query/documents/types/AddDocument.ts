/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_type } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddDocument
// ====================================================

export interface AddDocument_insert_az_docs_Documents_returning {
  __typename: "az_docs_Documents";
  documentId: number;
}

export interface AddDocument_insert_az_docs_Documents {
  __typename: "az_docs_Documents_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddDocument_insert_az_docs_Documents_returning[];
}

export interface AddDocument {
  /**
   * insert data into the table: "az_docs.Documents"
   */
  insert_az_docs_Documents: AddDocument_insert_az_docs_Documents | null;
}

export interface AddDocumentVariables {
  documentBody?: string | null;
  documentType?: document_type | null;
}
