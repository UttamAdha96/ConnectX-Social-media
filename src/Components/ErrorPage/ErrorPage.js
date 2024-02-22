import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (<>
    <div> 404 error page not find</div>
    <p>Go back to <Link to='/'>Home page</Link></p>
    

    </>
  )
}

export default ErrorPage