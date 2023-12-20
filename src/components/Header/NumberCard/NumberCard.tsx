import { JSX } from 'react';

import style from './NumberCard.module.scss';

interface NumberCardProps {
    readonly value: string;
    readonly description: string;
}

export function NumberCard({value, description}: NumberCardProps): JSX.Element {
    return (
        <div className={ style.container }>
            <div className="number_container">
                <div className="numb">$ {value}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
}