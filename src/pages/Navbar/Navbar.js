import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar bg-transparent fixed-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="!#"><h3>adMAVIN</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">All Task's</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav text-light justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href="/">Box Splitting</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Element">ElementTransfer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href="/Infinitescroll">Infinitescroll</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/List">NestedList</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Game">Game</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar