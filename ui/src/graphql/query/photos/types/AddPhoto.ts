/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPhoto
// ====================================================

export interface AddPhoto_insert_az_docs_Photo_returning {
  __typename: "az_docs_Photo";
  photoId: number;
}

export interface AddPhoto_insert_az_docs_Photo {
  __typename: "az_docs_Photo_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddPhoto_insert_az_docs_Photo_returning[];
}

export interface AddPhoto {
  /**
   * insert data into the table: "az_docs.Photo"
   */
  insert_az_docs_Photo: AddPhoto_insert_az_docs_Photo | null;
}

export interface AddPhotoVariables {
  photoSeries?: any | null;
}
