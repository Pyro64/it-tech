import type { InputProps } from 'element-plus/es/components/input/index'
import type { CheckboxProps } from 'element-plus/es/components/checkbox/index'
import type { FormItemRule, UploadFile } from 'element-plus'
import type { Arrayable } from 'vitest'
import { ElCheckbox, ElInput, FormItemPhone, } from '#components'

export const componentMap: Record<FormMapKeys, Component> = {
  input: ElInput,
  checkbox: ElCheckbox,
  phone: FormItemPhone
} as const

type FormMap = {
  input: {
    type: 'input'
    props: Partial<InputProps>
  }
  checkbox: {
    type: 'checkbox'
    props: Partial<CheckboxProps>
  }
  phone: {
    type: 'phone'
    props: Partial<InputProps>
  }
}

type FormItem<T> = {
  item: {
    model: keyof T
    label?: string
  }
}
export type FormMapKeys = keyof FormMap

export type FormItems<T> = FormItem<T> & {
  [K in FormMapKeys]: FormMap[K]
}[FormMapKeys]

export type FormRequest = {
  firstname: string
  phone: string
}
export type FormFeedback = FormRequest & {
  comment: string
  upload: UploadFile | null
}
