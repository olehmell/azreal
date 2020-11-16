import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AddPhotos, AddPhotosVariables } from "./types/AddPhotos";

const ADD_PHOTOS = gql`
  mutation AddPhotos($objects: [az_docs_Photo_insert_input!]!) {
    insert_az_docs_Photo(objects: $objects) {
      returning {
        photoId
      }
    }
  }`

export const useAddPhotos = () => useMutation<AddPhotos, AddPhotosVariables>(ADD_PHOTOS)