
import css from "./Header.module.css"
import Link from "next/link"

 export default function Haeder() {
    return (
        <header className="header">
            <nav>
                <ul className={css.navList}>
                    <li className={css.link}><Link href="/">Hoom</Link></li>
                    <li className={css.link}><Link href="abaut">Abaut</Link></li>
                    <li className={css.link}><Link href="gerga">Gerga</Link></li>
                </ul>
            </nav>
        </header>
    )
}
