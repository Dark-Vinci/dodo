import { JSX } from 'react';

import style from './Header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.header_container }> HEADER </div>
        </div>
    );
}
