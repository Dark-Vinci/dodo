import { JSX } from 'react';

import style from './AuditCard.module.scss';

interface AuditCradProps {
    readonly title: string;
    readonly description: string;
    readonly icons: JSX.Element[];
}

export function AuditCard({icons, title, description}: AuditCradProps): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.header}>
                <p>{title}</p>
            </div>
            <div className={ style.description}>
                <p>{description}</p>
            </div>
            <div className={ style.icons}>
                {icons.map((icons, ind) => {
                    return <div key={ind}>{icons}</div>
                })}
            </div>
        </div>
    );
}