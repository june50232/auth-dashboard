import * as React from "react";
import { useField } from 'formik'

export default function Input({ name, ...props }) {
  const [field, meta] = useField(name);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};