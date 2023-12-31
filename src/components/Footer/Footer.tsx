import { JSX } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.footer_container }>
                <div className={ style.top_container }>
                    <div className={style.top}>
                        {/* <div className="span_container"> */}
                        {/* <span>Just DODO it!</span> */}
                            <span>Just DODO it!</span>
                            {/* <span>Just DODO it!</span>
                            <span>Just DODO it!</span> */}
                        {/* </div> */}
                    </div>
                </div>

                <div className={ style.body_container }>
                    <div className={ style.body }>
                        <div className={ style.left_container }>
                            <div className={style.logo}>
                                <div className={style.logo_container}>
                                    <svg 
                                        width="200" 
                                        height="75" 
                                        viewBox="0 0 200 75" 
                                        fill="none" 
                                        className="">
                                            <path 
                                                d="M60.0082 34.9266C57.0966 32.2472 53.5254 30.3894 49.6601 29.5434C49.8613 29.3784 50.0625 29.2014 50.2556 29.0083C51.9655 27.2984 52.573 25.1378 51.6115 24.1803C50.7505 23.3193 48.9158 23.7216 47.3145 25.0533C47.0128 22.6796 45.8219 20.9053 44.3976 20.9053C42.9734 20.9053 41.7784 22.6796 41.4767 25.0533C39.8673 23.7216 38.0448 23.3193 37.1798 24.1803C36.2222 25.1418 36.8257 27.3024 38.5356 29.0083C38.7328 29.2014 38.938 29.3824 39.1391 29.5474C34.4727 30.5799 30.2582 33.0764 27.1106 36.6728C23.9629 40.2692 22.0468 44.7773 21.6416 49.5394L21.2715 53.9369H27.045L27.3789 50.0262C27.7318 45.8656 29.6341 41.9893 32.7091 39.1646C35.7842 36.3399 39.8077 34.7729 43.9832 34.7737H44.8442C49.0195 34.772 53.0431 36.3389 56.1177 39.1639C59.1923 41.9888 61.0934 45.8656 61.4445 50.0262L61.7784 53.9369H67.5559L67.1898 49.5394C66.7162 43.9393 64.1524 38.7227 60.0082 34.9266Z" 
                                                fill="black" className="">
                                            </path>
                                            <path 
                                                d="M38.7688 42.1646C37.6262 42.1646 36.6968 43.8141 36.6968 45.8499 36.6968 47.8857 37.6262 49.5353 38.7688 49.5353 39.9114 49.5353 40.8408 47.8857 40.8408 45.8499 40.8408 43.8141 39.9114 42.1646 38.7688 42.1646ZM50.0542 42.1646C48.9116 42.1646 47.9822 43.8141 47.9822 45.8499 47.9822 47.8857 48.9116 49.5353 50.0542 49.5353 51.1968 49.5353 52.1262 47.8857 52.1262 45.8499 52.1262 43.8141 51.1968 42.1646 50.0542 42.1646ZM83.8424 29.1692H74.1501V53.8684H83.8424C90.9073 53.8684 96.4716 48.4369 96.4716 41.5892 96.4716 34.6409 90.9275 29.1692 83.8424 29.1692ZM83.7056 48.5053H80.0202V34.5323H83.7056C87.4634 34.5323 90.3964 37.6383 90.3964 41.5892 90.3964 45.4637 87.4634 48.5053 83.7056 48.5053ZM112.155 29.1611C104.985 29.1611 99.3765 34.6007 99.3765 41.4806 99.3765 48.3605 104.973 53.8 112.143 53.8 119.312 53.8 124.905 48.3766 124.905 41.4806 124.905 34.5846 119.32 29.1611 112.155 29.1611ZM112.155 48.4088C108.328 48.4088 105.428 45.4395 105.428 41.4806 105.428 37.5216 108.328 34.5524 112.155 34.5524 115.981 34.5524 118.878 37.5216 118.878 41.4806 118.878 45.4395 115.977 48.4088 112.155 48.4088ZM137.654 29.1692H127.962V53.8684H137.654C144.719 53.8684 150.284 48.4369 150.284 41.5892 150.284 34.6409 144.719 29.1692 137.654 29.1692ZM137.518 48.5053H133.832V34.5323H137.518C141.275 34.5323 144.208 37.6383 144.208 41.5892 144.208 45.4637 141.275 48.5053 137.518 48.5053ZM165.967 29.1611C158.797 29.1611 153.201 34.5846 153.201 41.4806 153.201 48.3766 158.797 53.8 165.967 53.8 173.136 53.8 178.729 48.3766 178.729 41.4806 178.729 34.5846 173.132 29.1611 165.967 29.1611ZM165.967 48.4088C162.145 48.4088 159.24 45.4395 159.24 41.4806 159.24 37.5216 162.141 34.5524 165.967 34.5524 169.793 34.5524 172.69 37.5216 172.69 41.4806 172.69 45.4395 169.785 48.4088 165.967 48.4088Z" 
                                                fill="black" className="">
                                            </path>
                                    </svg>
                                </div>
                            </div>

                            <div className={style.socials}>
                                <div className={style.socials_container}>
                                    <IoLogoGithub
                                        size={'30px'}
                                        color='#8C8121'
                                    />
                                    <FaTwitter
                                        size={'30px'}
                                        color='#8C8121'
                                    />
                                    <FaTelegramPlane
                                        size={'30px'}
                                        color='#8C8121'
                                    />
                                    <FaDiscord
                                        size={'30px'}
                                        color='#8C8121'
                                    />
                                    <FaMedium
                                        size={'30px'}
                                        color='#8C8121'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={ style.right_container }>
                            <div className="about">
                                <div className="about_container">
                                    <p>About</p>
                                    <ul>
                                        <li><a href=".">Medium</a></li>
                                        <li><a href=".">Document</a></li>
                                        <li><a href=".">Help</a></li>
                                        <li><a href=".">Media</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="product">
                                <div className="product_container">
                                    <p>Products</p>
                                    <ul>
                                        <li><a href=".">Swap</a></li>
                                        <li><a href=".">Crosschain</a></li>
                                        <li><a href=".">Earning</a></li>
                                        <li><a href=".">Crowdpooling</a></li>
                                        <li><a href=".">Create Token</a></li>
                                        <li><a href=".">Create Pool</a></li>
                                        <li><a href=".">Market Maker Pool</a></li>
                                        <li><a href=".">Create Liquidity Mining</a></li>
                                        <li><a href=".">Create Crowdpooling</a></li>
                                        <li><a href=".">Fractionalize NFTS</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="developer">
                                <div className="deleoper_conatiner">
                                    <p>Developer</p>
                                    <ul>
                                        <li><a href=".">Github</a></li>
                                        <li><a href=".">Whitepaper</a></li>
                                        <li><a href=".">Audit Report</a></li>
                                        <li><a href=".">Bug Bounty</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
