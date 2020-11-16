import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { UpsetPhotos, UpsetPhotosVariables } from "./types/UpsetPhotos";

const UPSET_PHOTO = gql`
  mutation UpsetPhotos($objects: [az_docs_Photo_insert_input!]!) {
    insert_az_docs_Photo(objects: $objects, on_conflict: {constraint: Photo_pkey, update_columns: photoSeries}) {
      returning {
        photoId
      }
    }
  }
`

export const useUpsetPhoto = () => useMutation<UpsetPhotos, UpsetPhotosVariables>(UPSET_PHOTO)