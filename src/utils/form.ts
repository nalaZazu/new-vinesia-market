import { FieldError, FieldErrors, FieldValues } from "react-hook-form"

export const isFormInvalid = (err: any) => {
    if (Object.keys(err).length > 0) return true
    return false
}

export function findInputError(errors: FieldErrors<FieldValues>, name: string) {
    const filtered = Object.keys(errors)
      .filter(key => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] })
      }, {})
    return filtered as {error: FieldError | undefined}
  }