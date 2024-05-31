import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Products from './pages/Products'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { RouterProvider } from 'react-router'


export default function App() {

  const PageLayout = () => {
    return <>
   <Sidebar />
      <div className="flex-1 flex flex-col gap-4 relative">
        <Header />
       <Outlet />
        <Footer/>
      </div>
    </>
  }
  const routerPages = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "login",
        element: <Login />
      }, 
      {
        path: "products",
        element: <Products />
      },

      ]
    }
  ])

  return (
    <main className='bg-primary flex'>
      <RouterProvider router={routerPages}></RouterProvider>
    </main>
  )
}
