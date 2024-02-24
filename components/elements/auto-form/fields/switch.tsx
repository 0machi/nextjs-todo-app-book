import type { AutoFormInputComponentProps } from '@/components/elements/auto-form/types'
import { FormControl, FormDescription, FormItem, FormLabel } from '@/components/elements/shadcn-ui/form'
import { Switch } from '@/components/elements/shadcn-ui/switch'

export const AutoFormSwitch = ({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) => {
  return (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
      <FormControl>
        <Switch checked={field.value} onCheckedChange={field.onChange} {...fieldProps} />
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
