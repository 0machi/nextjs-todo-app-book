import type { AutoFormInputComponentProps } from '@/components/elements/auto-form/types'
import { Checkbox } from '@/components/elements/shadcn-ui/checkbox'
import { FormControl, FormDescription, FormItem, FormLabel } from '@/components/elements/shadcn-ui/form'

export const AutoFormCheckbox = ({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) => {
  return (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
      <FormControl>
        <Checkbox checked={field.value} onCheckedChange={field.onChange} {...fieldProps} />
      </FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>
          {label}
          {isRequired && <span className="text-destructive"> *</span>}
        </FormLabel>
        {fieldConfigItem.description && <FormDescription>{fieldConfigItem.description}</FormDescription>}
      </div>
    </FormItem>
  )
}
