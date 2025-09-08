import { useNavigate } from "react-router"

import { useEffect } from "react"
import Loader from "../../components/loader/Loader"

export default function Start() {
  const navigate = useNavigate()

  useEffect(() => {
    const id = setTimeout(() => {
      navigate("/home")
    }, 5000)

    return () => clearTimeout(id)
  }, [navigate])

  return <Loader />
}
