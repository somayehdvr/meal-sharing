import React from "react";
export default function Footer() {
    return (
        <>
            {/*  footer ================================================== */}
        <footer>
        <div class="footer-row">

            <div class="footer-col">
                <h3>FIND US</h3>
                <p>
                    Hack Your Future<br />
                    Copenhagen<br />
                    M-Thu: 7am - 4pm<br />
                    Fri-Sat: 9am - 8pm
                </p>
            </div>

            <div class="footer-col">
                <h3>ABOUT THIS PAGE</h3>
                <p>
                    This is a website for <br />
                    meal sharing
                </p>
            </div>
            
            <div class="footer-col">
                <h3>ARCHIVES</h3>
                <ul>
                    <li><a> 2016</a></li>
                    <li><a>February 2016</a></li>
                    <li><a>January 2016</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>NAVIGATION</h3>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li>
                        <ul>
                            <li><a>History</a></li>
                        </ul>
                    </li>
                    <li><a>Contact</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>

        </div>

            </footer>
            {/*  end footer */}
        </>
    )
}