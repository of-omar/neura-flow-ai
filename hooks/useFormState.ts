import { useState, useCallback } from 'react'

interface UseFormStateOptions<T> {
  initialValues: T
  onSubmit?: (values: T) => Promise<void>
  onError?: (error: Error) => void
  onSuccess?: () => void
}

interface FormErrors {
  [key: string]: string
}

export function useFormState<T extends Record<string, unknown>>({
  initialValues,
  onSubmit,
  onError,
  onSuccess,
}: UseFormStateOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target
      setValues((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }))
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    },
    [errors],
  )

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!onSubmit) return

      setIsSubmitting(true)

      try {
        await onSubmit(values)
        onSuccess?.()
        setValues(initialValues)
        setTouched({})
      } catch (error) {
        const err = error instanceof Error ? error : new Error('An error occurred')
        onError?.(err)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, onSubmit, onSuccess, onError, initialValues],
  )

  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setErrors,
    resetForm,
  }
}
