import React, { useEffect } from 'react';
import "./Navbar.scss";
export const Navbar = () => {

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix nav after a specific scrollable */
    const isSticky = (e) => {
        const nav = document.querySelector('.navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? nav.classList.add('is-sticky') : nav.classList.remove('is-sticky');
    };
    return (
        <>
            <nav class="navbar">
                <div class="nav-brand">
                    <a href="/" title="K K UPGRADER" class="logo"><img src="https://d33wubrfki0l68.cloudfront.net/dd28017dc2f91d9d1bddc84ba89a6a2706c2a7d0/50b55/logo.svg" alt="Logo" loading="lazy" /></a>
                </div>
                <div class="nav-content">
                    <div class="nav-toggler">
                        <span></span><span></span><span></span>
                    </div>
                    <ul class="nav-list" id="menu">
                        <li class="nav-item"><a href="#About" class="nav-link" data-section="About">About</a></li>
                        <li class="nav-item"><a href="#Tools" class="nav-link" data-section="Tools">Tools</a></li>
                        <li class="nav-item"><a href="#Blog" class="nav-link" data-section="Blog">Blog</a></li>
                        <li class="nav-item"><a href="#Projects" class="nav-link" data-section="Projects">Projects</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}