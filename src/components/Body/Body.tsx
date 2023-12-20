import { JSX } from 'react';

import style from './Body.module.scss';

export function Body(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body_container }>BODY</div>
        </div>
    );
}
