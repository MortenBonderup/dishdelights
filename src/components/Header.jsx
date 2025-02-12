import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav style={{display: "flex", gap: "20px"}}>
                <p>
                    <Link to="">Home</Link>
                </p>
                <p>
                    <Link to="first">First page</Link>
                </p>
                <p>
                    <Link to="second">Second page</Link>
                </p>
            </nav>
        </header>
    )
}