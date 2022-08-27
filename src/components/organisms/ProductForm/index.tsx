import { Controller, useForm } from 'react-hook-form'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import TextArea from 'components/atoms/TextArea'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'
import InputImages, { FileData } from 'components/molecules/InputImages'
import type { Category, Condition } from 'types'

export type ProductFormData = {
  image: FileData[]
  title: string
  description: string
  category: Category
  condition: Condition
  price: string
}
