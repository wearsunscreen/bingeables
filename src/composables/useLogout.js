import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)
const isPending = ref(false)

// logout function
const logout = async () => {
  error.value = null

  try {
    await projectAuth.signOut()
    isPending.value = false
  }
  catch (err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

export const useLogout = () => {
  return { error, logout, isPending }
}
