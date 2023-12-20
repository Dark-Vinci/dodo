import { JSX } from 'react'

import style from './HomePage.module.scss';
import { Header, Nav, Body, Footer } from '../components';

export function HomePage(): JSX.Element {
    return (
        <div className={ style.container }>
            <nav>
                <Nav />
            </nav>

            <body>
                <header>
                    <Header />
                </header>

                <section>
                    <Body />
                </section>

                <footer>
                    <Footer />
                </footer>
            </body>
        </div>
    );
}
