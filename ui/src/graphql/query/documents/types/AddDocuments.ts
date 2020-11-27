/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_docs_Documents_insert_input } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddDocuments
// ====================================================

export interface AddDocuments_insert_az_docs_Documents_returning {
  __typename: "az_docs_Documents";
  documentId: number;
}

export interface AddDocuments_insert_az_docs_Documents {
  __typename: "az_docs_Documents_mutation_response";
  returning: AddDocuments_insert_az_docs_Documents_returning[];
}

export interface AddDocuments {
  insert_az_docs_Documents: AddDocuments_insert_az_docs_Documents | null;
}

export interface AddDocumentsVariables {
  objects: az_docs_Documents_insert_input[];
}
