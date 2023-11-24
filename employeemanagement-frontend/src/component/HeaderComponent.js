import React from 'react'
import Logo from './logo.png'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark p-3'>
                <div>
                    <a className='navbar-brand m-5' href=""><img width="30px" height="30px" className="img-responsive" src={Logo}  alt="logo" /> ESystem</a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent