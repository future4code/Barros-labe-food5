import {useState} from "react"

export function useForm(InitialState){
  const [form, setForm] = useState(InitialState)

  const onChange = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }

  const clear = () => {
    setForm(InitialState)
  }
    return [form, onChange, clear]
}