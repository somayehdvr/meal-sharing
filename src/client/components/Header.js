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
                <li><a href="/" title="Home">home</a></li>
                <li><a href="#about" title="About">about</a></li>
                <li><a href="/meals" title="Meals to reserve">Meals</a></li>
            </ul>
                </nav>
                {/* end nav  */}

            </header> 
            {/* end header */}
        </>
    )
}