import { NavLink, Outlet } from "react-router-dom";

interface LinkState {
  isActive: boolean,
  isPending: boolean,
  isTransitioning: boolean
}

export default function Dashboard() {
  const handleLinkStateClass = ({ isActive, isPending, isTransitioning }: LinkState) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ");

  return (
    <section className="dashboard">
      <h1>Dashboard <aside className='material-symbols-outlined'>dashboard</aside></h1>
      <nav>
        <NavLink className={handleLinkStateClass} to='stats'>Stats</NavLink>
        <NavLink className={handleLinkStateClass} to='settings'>Settings</NavLink>
      </nav>
      <Outlet/>
    </section>  
  )
}
