import { ButtonLink } from './ButtonLink'

type EditButtonProps = {
  typeEdit: 'organisations' | 'sensors' | 'users',
  id: number
}
// eslint-disable-next-line react/react-in-jsx-scope
export const EditButton = ({ id, typeEdit }: EditButtonProps) => <ButtonLink
  href={`/${typeEdit}/${id}/edit`}
  iconType='documentEdit'
  size='s'>
    Редагувати
</ButtonLink>