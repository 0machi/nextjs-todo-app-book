import { AutoFormInput } from '@/components/elements/auto-form/fields/input'
import type { AutoFormInputComponentProps } from '@/components/elements/auto-form/types'

export const AutoFormNumber = ({ fieldProps, ...props }: AutoFormInputComponentProps) => {
  return (
    <AutoFormInput
      fieldProps={{
        type: 'number',
        ...fieldProps,
      }}
      {...props}
    />
  )
}
