import { Link } from 'react-router-dom'

export default function SignUpStep3() {
  return (
    <>
      <nav>
        <Link to='../step2'>Previous</Link>
      </nav>
      <h2>Confirm Signup</h2>
      <form>
        <button>Confirm</button>
      </form>
    </>
  )
}
