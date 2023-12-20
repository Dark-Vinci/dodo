import { JSX } from 'react';

import style from './NumberCard.module.scss';

interface NumberCardProps {
    readonly value: string;
    readonly description: string;
}

export function NumberCard({value, description}: NumberCardProps): JSX.Element {
    return (
        <div className={ style.container }>
            {/* <div className={ style.number_container }> */}
                <div className={ style.numb }>$ {value}</div>
                <div className={ style.description }>{description}</div>
            {/* </div> */}
        </div>
    );
}