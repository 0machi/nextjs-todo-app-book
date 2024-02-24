import { AutoFormCheckbox } from '@/components/elements/auto-form/fields/checkbox'
import { AutoFormDate } from '@/components/elements/auto-form/fields/date'
import { AutoFormEnum } from '@/components/elements/auto-form/fields/enum'
import { AutoFormInput } from '@/components/elements/auto-form/fields/input'
import { AutoFormNumber } from '@/components/elements/auto-form/fields/number'
import { AutoFormRadioGroup } from '@/components/elements/auto-form/fields/radio-group'
import { AutoFormSwitch } from '@/components/elements/auto-form/fields/switch'
import { AutoFormTextarea } from '@/components/elements/auto-form/fields/textarea'

export const INPUT_COMPONENTS = {
  checkbox: AutoFormCheckbox,
  date: AutoFormDate,
  select: AutoFormEnum,
  radio: AutoFormRadioGroup,
  switch: AutoFormSwitch,
  textarea: AutoFormTextarea,
  number: AutoFormNumber,
  fallback: AutoFormInput,
}

/**
 * Define handlers for specific Zod types.
 * You can expand this object to support more types.
 */
export const DEFAULT_ZOD_HANDLERS: {
  [key: string]: keyof typeof INPUT_COMPONENTS
} = {
  ZodBoolean: 'checkbox',
  ZodDate: 'date',
  ZodEnum: 'select',
  ZodNativeEnum: 'select',
  ZodNumber: 'number',
}
