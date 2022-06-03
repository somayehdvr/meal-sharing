import React from "react"
export default function Header() {
    return (
        <>
        {/* header ==================================================  */}
    <header class="s-header">

        <nav class="header-nav-wrap">

            <div class="header-nav-brand">
                <div class="header-nav-brand-box">
                    <h1>Meal Sharing</h1>
                    <p class="header-nav-brand-description">an application for sharing your meal!</p>
                </div>
            </div>

            <ul class="header-nav">
                <li><a href="/" title="home">home</a></li>
                <li><a href="#about" title="about">about</a></li>
                <li><a href="/meals" title="our services">Meals</a></li>
                <li><a href="/reservations" title="reservations">Reservations</a></li>
                <li><a href="/reviews" title="reviews">Reviews</a></li>
            </ul>
                </nav>
                {/* end nav  */}

            </header> 
            {/* end header */}
        </>
    )
}