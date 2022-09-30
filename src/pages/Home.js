import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.scss";
import Logo from "../Logo";
import AboutUsImg from "../assets/svg-images/about-us.svg";
import BlogImg from "../assets/svg-images/blogging.svg";
import ProjectImg from "../assets/svg-images/projects.svg";
import ToolImg from "../assets/svg-images/projects.svg";
export default function Home() {

    return (
        <>
            <div>
                <header>
                    <nav className="navbar">
                        <div className="nav-brand">
                            <a href="/" title="K K UPGRADER" className="logo">
                                {/* <img src="./logo.svg" alt="Logo" loading="lazy" /> */}
                                <Logo />
                            </a>
                        </div>
                        <div className="nav-content">
                            <div className="nav-toggler" data-nav-toggle="menu">
                                <span /><span /><span />
                            </div>
                            <ul className="nav-list" id="menu">
                                <li className="nav-item"><a href="#About" className="nav-link" data-section="About">About</a></li>
                                <li className="nav-item"><a href="#Tools" className="nav-link" data-section="Tools">Tools</a></li>
                                <li className="nav-item"><a href="#Blog" className="nav-link" data-section="Blog">Blog</a></li>
                                <li className="nav-item"><a href="#Projects" className="nav-link" data-section="Projects">Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                    <section className="hero-container">
                        <div className="hero-content">
                            <h1 className="hero-heading">
                                K K UPGRADER
                            </h1>n
                            <h5 className="hero-paragraph">
                                Blogging, Internet Tools and Coding Tips.
                            </h5>
                        </div>
                    </section>
                </header>
                <main>
                    <section id="About">
                        <div className="sectionImg">
                            <img src={AboutUsImg} alt="About Us" loading="lazy" />
                        </div>
                        <div className="sectionContent">
                            <h1>About Us</h1>
                            <h3>K K UPGRADER</h3>
                            <p>Hey There, I am Kanak Kholwal and I am a Frontend Developer and I share Web Development tips and
                                tricks , Internet Tools and Blog Articles on this site.</p>
                            <a href="./portfolio/" className="btn btn-success external-link ripple">Visit Portfolio</a>
                        </div>
                    </section>
                    <section id="Tools">
                        <div className="sectionImg">
                            <img src={ToolImg} alt="Tools" loading="lazy" />
                        </div>
                        <div className="sectionContent">
                            <h1>Tools</h1>
                            <p>Free to Use Internet Tools for everyone. From Text to Handwriting ,Svg designing ,Css Generator to
                                Meta Tag Generator ,JavaScript Beautifier &amp; Minifier Tools and many More
                            </p>
                            <div className="showCase">
                                <Link href="./tools/meta-tag-generator/" className="btn btn-sm">Meta Tag Generator</Link>
                                <Link href="./tools/iframe-generator/" className="btn btn-sm">iFrame Embed Code Generator</Link>
                                <Link href="./tools/Neumorphic-Generator/" className="btn btn-sm">Neumorphism CSS generator</Link>
                                <Link href="./tools/svg-to-css-generator/" className="btn btn-sm">SVG to CSS Generator Tool
                                </Link>
                                <Link href="./tools/" className="btn btn-sm btn-warning">See More    </Link>
                            </div>
                        </div>
                    </section>
                    <section id="Blog">
                        <div className="sectionImg">
                            <img src={BlogImg} alt="Blogging" />
                        </div>
                        <div className="sectionContent">
                            <h1>Blog</h1>
                            <h3><a href="https://kkupgrader.blogspot.com" target="_blank" rel='noreferrer'>kkupgrader.blogspot.com</a></h3>
                            <p>News , Information , Tech Tips and Tricks ,Blogger, Awesome Css and Java Codes and Much More...
                            </p>
                            <div className="showCase">
                                <a href="https://kkupgrader.blogspot.com/2022/03/how-to-add-bot-or-botsapp-in-whatsapp.html" className="item" target="_blank" rel='noreferrer'>
                                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtq5YPUMcf8vMCBEG_cYNm-eS7aExpKBU3izEVjNcV5y4uREE-A3S80RkB9rswMApm4ll334bwLNLmRG8sf7ZYuqzH1hZhJyjyQUmyxk6-mxtd-eM6LB7vaKv0_QMbgsiT73QDPEuollVkA-EGuIarG8rXBW1v0fHi46_vhcx2w6DBP41FxZ2P7DWz/w640-h361/How-to-add-a-Bot-or-BotsApp-in-Whatsapp.webp" alt="How to add a Bot or BotsApp in Whatsapp" />
                                </a>
                                <a href="https://kkupgrader.blogspot.com/2021/12/Create-neumorphism-contact-form-widget-with-google-recaptcha-for-blogger.html" className="item" target="_blank" rel='noreferrer'>
                                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhgIwwHUSFxT3pd2DPOgck_kRjFIEgv-cdHIdTZg-jQKotz6_uwE9xVci_oMr2yk3-n4WD2MQRW1f9WgG4gP9Db_8-Tw1R5LRa5fXsI-D4EnZSC20KVPqsbwm7zlzFwUainq4Opqdoeudd_la_Q31UxVxIhJt_s7gdi-eUbCjUgOQ6cukif_KSCtiB6" alt="How to Create Neumorphism Contact Form Widget With Google Captcha For Blogger" />
                                </a>
                                <a href="https://kkupgrader.blogspot.com/2021/09/how-to-create-automatic-table-of-content-in-blogger.html" className="item" target="_blank" rel='noreferrer'>
                                    <img src="https://1.bp.blogspot.com/-lcWkwGSPA_M/YUTV3dDIGxI/AAAAAAAACJg/40tp58V2gbQ4DN2QB-XDg1w_m3JkcEn3ACLcBGAsYHQ/s600/How%2Bto%2BCreate%2BModern%2BCode%2BBox%2Bwith%2BCopy%2BButton%2B.webp" alt="How to Create Automatic Table of Content in Blogger" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <section id="Projects">
                        <div className="sectionImg ripple-effect">
                            <img src={ProjectImg} alt="Projects" loading="lazy" />
                        </div>
                        <div className="sectionContent">
                            <h1>Projects</h1>
                            <h3>K K UPGRADER</h3>
                            <p>Many Projects have been created by us from very basic like calculator and Webpage clone to major
                                website and nowadays I am working on a personalized library framework like Bootstrap.</p>
                            <a href="./pixonoids/" className="btn btn-danger ripple-effect">Projects</a>
                        </div>
                    </section>
                </main>
                <div className="ContactsSection">
                    <form id="contactForm" name="contactForm" action="POST" data-netlify="true" method="POST">
                        <div className="form-element">
                            <input type="email" name="Email" id="email" placeholder="Enter your email address ..." className="form-input" defaultValue={""} required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>

                        <div className="form-element">
                            <input type="name" name="Name" id="subject" placeholder="Subject..." className="form-input form-lg" required defaultValue={""} />
                            <label htmlFor="name" className="form-label">Subject</label>
                        </div>
                        <div className="form-element">
                            <textarea name="Subject" id="body" cols={30} rows={10} className="form-textarea" placeholder="Enter Message" required defaultValue={""} />
                            <label htmlFor="Subject" className="form-label"> Message:</label>
                        </div>
                        {/* <div data-netlify-recaptcha="true"></div> */}
                        <button type="submit" className="form-submit">submit</button>
                    </form>
                    <div className="ContactInfo">
                        <h2>Have projects in
                            mind or want to discuss ? <span>
                                Let's Talk! </span>
                        </h2>
                        <p>Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get
                            back to you in the next 48 hours.
                        </p>
                        <div className="ContactSocial">
                            <a href="https://www.instagram.com/kanakkholwal/" className="icon" rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg></a>
                            <a href="https://github.com/kkupgrader" className="icon" rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg></a>
                            <a href="https://codepen.io/kkupgrader/" className="icon" rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-codepen">
                                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                                    <line x1={12} y1={22} x2={12} y2="15.5" />
                                    <polyline points="22 8.5 12 15.5 2 8.5" />
                                    <polyline points="2 15.5 12 8.5 22 15.5" />
                                    <line x1={12} y1={2} x2={12} y2="8.5" />
                                </svg></a>
                            <a href="https://www.linkedin.com/in/kanak-kholwal/" className="icon" rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x={2} y={9} width={4} height={12} />
                                    <circle cx={4} cy={4} r={2} />
                                </svg> </a>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="copyright">Copyright <a href="/" title="K K UPGRADER">K K UPGRADER</a> © <span id="currentYear" /></div>
                    <div className="social">
                        <a href="https://www.instagram.com/kanakkholwal/" className="icon" rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg></a>
                        <a href="https://github.com/kkupgrader" className="icon" rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg></a>
                        <a href="https://codepen.io/kkupgrader/" className="icon" rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-codepen">
                                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                                <line x1={12} y1={22} x2={12} y2="15.5" />
                                <polyline points="22 8.5 12 15.5 2 8.5" />
                                <polyline points="2 15.5 12 8.5 22 15.5" />
                                <line x1={12} y1={2} x2={12} y2="8.5" />
                            </svg></a>
                        <a href="https://www.linkedin.com/in/kanak-kholwal/" className="icon" rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x={2} y={9} width={4} height={12} />
                                <circle cx={4} cy={4} r={2} />
                            </svg> </a>
                    </div>
                </footer>
            </div>

        </>
    )
}