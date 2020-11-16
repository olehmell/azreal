import { GetUser_az_users_Users as UserType } from '../../graphql/query/users/types/GetUser';
import * as yup from 'yup'
import { useRouter } from 'next/router';
import React from 'react';
import { useGetUsersById } from 'src/graphql/query/users/getUserById';
import { NotFoundPage } from '../utils/NotFoundPage';
import { Loading } from '../utils/loading';

type UserKeys = keyof UserType
type UserSchema = Record<UserKeys, any>

const yupRequiredStr = yup.string().required()

export const getFiledName = (name: UserKeys) => name

export const userSchema = yup.object().shape({
  email: yupRequiredStr.email(),
  organisationId: yupRequiredStr,
  fullName: yupRequiredStr,
  userRole: yupRequiredStr,
  registryLink: yupRequiredStr.url(),
  phoneNumber: yup.number(),
  documentId: yup.number()
} as unknown as UserSchema);

export type UserProps = {
  user: UserType
}

export const withLoadUserFormUrl = (Component: React.ComponentType<UserProps>) => {
  return () => {
    const { query: { userId }} = useRouter()
    const { data, loading, error } = useGetUsersById(parseInt(userId as string))

    console.log('DAuseGetUserByIdTA', data)
  
    if (error) return null;
  
    if (loading) return <Loading />
  
    const user = data?.az_users_Users.pop()

    if (!user) return <NotFoundPage />

    return <Component user={user} />
  }
}