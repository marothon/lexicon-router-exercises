import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <h1>Dashboard <aside className='material-symbols-outlined'>dashboard</aside></h1>
      <nav>
        <Link to='stats'>Stats</Link>
        <Link to='settings'>Settings</Link>
      </nav>
      <Outlet/>
    </section>  
  )
}
