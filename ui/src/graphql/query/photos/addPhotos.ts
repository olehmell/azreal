import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { az_docs_Photo_insert_input } from "src/types/graphql-global-types";
import { ADD_DOCUMENT } from "../documents/addDocument";
import { AddPhotos, AddPhotosVariables } from "./types/AddPhotos";

const ADD_PHOTOS = gql`
  mutation AddPhotos($objects: [az_docs_Photo_insert_input!]!) {
    insert_az_docs_Photo(objects: $objects) {
      returning {
        photoId
      }
    }
  }`

export const useAddPhotos = () => useMutation<AddPhotos, AddPhotosVariables>(ADD_DOCUMENT)