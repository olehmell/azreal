import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { AddPhoto, AddPhotoVariables } from './types/AddPhoto';

export const ADD_PHOTO = gql`
  mutation AddPhoto($photoSeries: _bytea) {
    insert_az_docs_Photo(objects: {photoSeries: $photoSeries}) {
      returning {
        photoId
      }
    }
  }`

export const useAddPhoto = () => useMutation<AddPhoto, AddPhotoVariables>(ADD_PHOTO)