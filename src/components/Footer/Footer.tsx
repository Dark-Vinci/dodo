import { JSX } from 'react';

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.footer_container }>
                <div className="top_container">
                    <div className="top">
                        <div className="span_container">
                            <span>Just DODO it!</span>
                            <span>Just DODO it!</span>
                            <span>Just DODO it!</span>
                        </div>
                    </div>
                </div>

                <div className="body_container">
                    <div className="body">
                        <div className="left_container">LEFT</div>
                        <div className="right_container">RIGHT</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
