import React from 'react'

export default function Nav() {
    return (
        <nav class="light-blue " role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Would You Rather</a>
            <ul class="left hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">New Question</a></li>
                <li><a href="#">Leader Board</a></li>
            </ul>

            <ul class="right hide-on-med-and-down">
                <li><a href="#">Log out</a></li>
            </ul>

            <ul id="nav-mobile" class="sidenav">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
        </nav>
    )
}