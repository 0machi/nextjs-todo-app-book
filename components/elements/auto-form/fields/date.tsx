import type { AutoFormInputComponentProps } from '@/components/elements/auto-form/types'
import { DatePicker } from '@/components/elements/shadcn-ui/date-picker'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/elements/shadcn-ui/form'

export const AutoFormDate = ({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) => {
  return (
    <FormItem>
      <FormLabel>
        {label}
        {isRequired && <span className="text-destructive"> *</span>}
      </FormLabel>
      <FormControl>
        <DatePicker date={field.value} setDate={field.onChange} {...fieldProps} />
      </FormControl>
      {fieldConfigItem.description && <FormDescription>{fieldConfigItem.description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}
