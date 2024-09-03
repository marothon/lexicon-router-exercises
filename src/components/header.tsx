import { NavLink } from 'react-router-dom'

interface LinkState {
  isActive: boolean,
  isPending: boolean,
  isTransitioning: boolean
}

export default function Header() {

  const handleLinkStateClass = ({ isActive, isPending, isTransitioning }: LinkState) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ");
  

  return (
    <nav>
      <NavLink className={handleLinkStateClass} to='/'>Home</NavLink>
      <NavLink className={handleLinkStateClass} to='/about'>About</NavLink>
      <NavLink className={handleLinkStateClass} to='/contact'>Contact</NavLink>
      <NavLink className={handleLinkStateClass} to='/dashboard'>Dashboard</NavLink>
      <NavLink className={handleLinkStateClass} to='/user/1'>Profile</NavLink>
    </nav>
  )
}
