import { JSX } from 'react';

import style from './Header.module.scss';
import { SiBinance, SiChromatic  } from 'react-icons/si';
import { FaPiggyBank, FaBitcoin } from "react-icons/fa";
import { TbBrandCoinbase } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import { BigCard } from './BigCard';
import { NumberCard } from './NumberCard';

export function Header(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.header_container }>
                <div className={style.left}>
                    <div className="one">
                        <img src="https://dodoex.io/_next/static/media/banner.9fa89f16.svg" alt="" />
                    </div>

                    <div className={style.two}>
                        <p>Your On-Chain Liquidity Hub</p>
                    </div>

                    <div className={style.thre}>
                        <p>DODO Token listed on</p>
                    </div>

                    <div className={style.last}>
                        <ul>
                            <li>
                                <a href=".">
                                    <SiBinance 
                                        size={'30px'}
                                        color='#F3BA2F'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <FaBitcoin
                                        size={'30px'}
                                        color='#2CA6E0'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <SiChromatic
                                        size={'30px'}
                                        color='#25AF91'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <FaPiggyBank
                                        size={'30px'}
                                        color='#5176ED'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <TbBrandCoinbase
                                        size={'30px'}
                                        color='#1CA2B4'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <CiMenuKebab
                                        size={'30px'}
                                        color='#000'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={ style.right }>
                    <div className={ style.f }>
                        <BigCard 
                            title={'FOR TRADERS'} 
                            description={'DODO X: The Best Price and Cross-Chain Aggregator'} 
                            buttonText={'Launch App'} 
                            backgroundColor={'#F6F5F1'}
                        />
                    </div>

                    <div className={ style.s }>
                        <BigCard 
                            title={'FOR DEVELOPERS'} 
                            description={'Add trading function to your products and earn transaction fees'} 
                            buttonText={'Launch App'} 
                            backgroundColor={'#EDE5FF'}
                        />
                    </div>

                    <div className={ style.l }>
                        <div className={ style.w }>
                            <NumberCard 
                                value={'132.52B'} 
                                description={'All-Time Volume'} 
                            />
                        </div>
                        <div className={ style.t }>
                            <NumberCard 
                                value={'2,736,050'} 
                                description={'Total Users'} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
