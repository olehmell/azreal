/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_docs_Photo_insert_input } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddPhotos
// ====================================================

export interface AddPhotos_insert_az_docs_Photo_returning {
  __typename: "az_docs_Photo";
  photoId: number;
}

export interface AddPhotos_insert_az_docs_Photo {
  __typename: "az_docs_Photo_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddPhotos_insert_az_docs_Photo_returning[];
}

export interface AddPhotos {
  /**
   * insert data into the table: "az_docs.Photo"
   */
  insert_az_docs_Photo: AddPhotos_insert_az_docs_Photo | null;
}

export interface AddPhotosVariables {
  objects: az_docs_Photo_insert_input[];
}
