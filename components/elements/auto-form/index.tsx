/* eslint-disable */
'use client'
import { Form } from '@/components/elements/shadcn-ui/form'
import React from 'react'
import { DefaultValues, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/elements/shadcn-ui/button'
import { cn } from '@/libs/shadcn-ui/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import { AutoFormObject } from '@/components/elements/auto-form/fields/object'
import type { FieldConfig } from '@/components/elements/auto-form/types'
import { ZodObjectOrWrapped, getDefaultValues, getObjectFormSchema } from '@/components/elements/auto-form/utils'

export const AutoFormSubmit = ({ children }: { children?: React.ReactNode }) => {
  return <Button type="submit">{children ?? 'Submit'}</Button>
}

export const AutoForm = <SchemaType extends ZodObjectOrWrapped>({
  formSchema,
  values: valuesProp,
  onValuesChange: onValuesChangeProp,
  onParsedValuesChange,
  onSubmit: onSubmitProp,
  fieldConfig,
  children,
  className,
}: {
  formSchema: SchemaType
  values?: Partial<z.infer<SchemaType>>
  onValuesChange?: (values: Partial<z.infer<SchemaType>>) => void
  onParsedValuesChange?: (values: Partial<z.infer<SchemaType>>) => void
  onSubmit?: (values: z.infer<SchemaType>) => void
  fieldConfig?: FieldConfig<z.infer<SchemaType>>
  children?: React.ReactNode
  className?: string
}) => {
  const objectFormSchema = getObjectFormSchema(formSchema)
  const defaultValues: DefaultValues<z.infer<typeof objectFormSchema>> = getDefaultValues(objectFormSchema)

  const form = useForm<z.infer<typeof objectFormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    values: valuesProp as { [x: string]: any },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const parsedValues = formSchema.safeParse(values)
    if (parsedValues.success) {
      onSubmitProp?.(parsedValues.data)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          form.handleSubmit(onSubmit)(e)
        }}
        onChange={() => {
          const values = form.getValues()
          onValuesChangeProp?.(values)
          const parsedValues = formSchema.safeParse(values)
          if (parsedValues.success) {
            onParsedValuesChange?.(parsedValues.data)
          }
        }}
        className={cn('space-y-5', className)}
      >
        <AutoFormObject
          schema={objectFormSchema}
          form={form}
          fieldConfig={fieldConfig as FieldConfig<{ [x: string]: any }>}
        />

        {children}
      </form>
    </Form>
  )
}
