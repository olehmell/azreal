/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum document_type {
  Location = "Location",
  Organisation = "Organisation",
  Sensor = "Sensor",
  Service = "Service",
  User = "User",
}

/**
 * input type for inserting data into table "az_docs.Documents"
 */
export interface az_docs_Documents_insert_input {
  documentBody?: string | null;
  documentId?: number | null;
  documentType?: document_type | null;
}

/**
 * input type for inserting data into table "az_docs.Photo"
 */
export interface az_docs_Photo_insert_input {
  photoId?: number | null;
  photoSeries?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
