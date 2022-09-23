import { useState } from 'react'

export function useForm() {
  const [form, setForm] = useState('')

  const onChange = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  return [form, onChange]
}
