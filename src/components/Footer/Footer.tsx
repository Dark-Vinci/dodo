import { JSX } from 'react';

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.footer_container }>FOOTER</div>
        </div>
    );
}
