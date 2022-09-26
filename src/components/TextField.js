import React from 'react'
import { useField } from 'formik'
import { ErrorMessage } from 'formik'



export default function TextField({ label, ...props }) {
  const [Field, meta] = useField(props)

  return (
    <div className='mb-2'>
      <label htmlFor={Field.name}>{label}</label>
      <input className={`form-control shadow-none  ${meta.touched && meta.error && 'is-invalid'}` } {...Field} {...props} autoComplete='off'/>
      <ErrorMessage name={Field.name} component='div' className='error'/>
    </div>
  )
}
