import { Link } from 'react-router-dom'

export default function SignUpStep2() {
  return (
    <>
      <nav>
        <Link to='../step1'>Previous</Link>
        <Link to='../step3'>Next</Link>
      </nav>
      <h2>Personal info</h2>
      <form>
        <input type="text" placeholder='Name'></input>
        <input type="email" placeholder='Email'></input>
      </form>
    </>
  )
}
