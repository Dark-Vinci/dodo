import { JSX } from 'react';

import style from './BigCard.module.scss';

interface BigCardProps {
    readonly title: string;
    readonly description: string;
    readonly buttonText: string;
    readonly backgroundColor: string;
}

export function BigCard({ 
    title, 
    description, 
    buttonText, 
    backgroundColor,
}: BigCardProps): JSX.Element {
    return (
        <div 
            className={style.container}
            style={{ backgroundColor }}
        >
            <div className={style.title}>
                <p>{ title }</p>
            </div>
            <div className={style.description}>
                <p>{ description }</p>
            </div>
            <div className={style.button}>
                <button>
                    { buttonText }
                </button>
            </div>
        </div>
    );
}
