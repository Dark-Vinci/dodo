import { JSX } from 'react'

import style from './Nav.module.scss';

export function Nav(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.nav_container }>
                <div className="left">
                    <div className="left_container">
                        <div className="logo"></div>
                        <div className="tabs">
                            <ul>
                                <li>Products</li>
                                <li>Governance</li>
                                <li>Research</li>
                                <li>Documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="input">
                        <div className="input_container">
                            <span className="icon"></span>
                            <input type="text" placeholder='Product name, Pool addr..'/>
                        </div>
                    </div>
                    <div className="logo"></div>
                </div>
            </div>
        </div>
    );
}
