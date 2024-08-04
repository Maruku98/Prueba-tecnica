import "./header.scss"

function Header() {
    return (
        <header>
            <h1><a href="https://www.themoviedb.org" target="_blank">TMDB</a></h1>

            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Movies</li>
                    <li>Shows</li>
                    <li>Support</li>
                    <li>More</li>
                </ul>
            </nav>

            <input type="search" autoComplete="off" spellCheck="off" placeholder="Search" maxLength={50}></input>
        </header>
    );
}

export default Header;