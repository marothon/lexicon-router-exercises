import { Link } from 'react-router-dom'

export default function SignUpStep1() {
  return (
    <>
      <nav>
        <Link to='../step2'>Next</Link>
      </nav>
      <h2>Accept terms</h2>
      <form>
        <p>By signing up, you agree to our Terms of Service. You consent to the collection and use of your information as outlined in our Privacy Policy.
          You agree not to engage in harmful activities. Your account may be terminated for violations. Use of this site is at your own risk.</p>
        <label htmlFor="accept-terms">I accept the terms</label>
        <input type="checkbox" name="accept-terms"/>
      </form>
    </>
  )
}
