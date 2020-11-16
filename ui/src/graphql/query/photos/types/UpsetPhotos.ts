/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_docs_Photo_insert_input } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpsetPhotos
// ====================================================

export interface UpsetPhotos_insert_az_docs_Photo_returning {
  __typename: "az_docs_Photo";
  photoId: number;
}

export interface UpsetPhotos_insert_az_docs_Photo {
  __typename: "az_docs_Photo_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: UpsetPhotos_insert_az_docs_Photo_returning[];
}

export interface UpsetPhotos {
  /**
   * insert data into the table: "az_docs.Photo"
   */
  insert_az_docs_Photo: UpsetPhotos_insert_az_docs_Photo | null;
}

export interface UpsetPhotosVariables {
  objects: az_docs_Photo_insert_input[];
}
