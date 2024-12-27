import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div>
                <div>
                    <ul>
                        <li>
                            <NavLink >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header