import "./footer.scss"

function Footer() {
    return (
        <footer>
            <div className="footer-Column">
                <h3>CATALOG</h3>
                <ul>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Documentaries</li>
                </ul>
            </div>
            <div className="footer-Column">
                <h3>ABOUT TMDB</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>System</li>
                    <li>API</li>
                </ul>
            </div>
            <div className="footer-Column">
                <h3>COMMUNITY</h3>
                <ul>
                    <li>Forum</li>
                    <li>FAQ</li>
                    <li>Ranking</li>
                </ul>
            </div>
            <div className="footer-Column">
                <h3>LEGAL</h3>
                <ul>
                    <li>Legal Notice</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;