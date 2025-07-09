import { Outlet } from 'react-router-dom';

export default function LayoutRoot() {
   return <section>
      <h1>Header section</h1>
      <Outlet />
      <h1>Footer section</h1>
   </section>
}