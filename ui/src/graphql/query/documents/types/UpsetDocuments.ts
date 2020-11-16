/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_docs_Documents_insert_input } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpsetDocuments
// ====================================================

export interface UpsetDocuments_insert_az_docs_Documents_returning {
  __typename: "az_docs_Documents";
  documentId: number;
}

export interface UpsetDocuments_insert_az_docs_Documents {
  __typename: "az_docs_Documents_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: UpsetDocuments_insert_az_docs_Documents_returning[];
}

export interface UpsetDocuments {
  /**
   * insert data into the table: "az_docs.Documents"
   */
  insert_az_docs_Documents: UpsetDocuments_insert_az_docs_Documents | null;
}

export interface UpsetDocumentsVariables {
  objects: az_docs_Documents_insert_input[];
}
