import { JSX } from 'react';
import { 
    SiBinance, 
    SiCoinbase, 
    SiChromatic, 
    SiPantheon, 
    SiTesla, 
    SiVirgin, 
    SiSuzuki,
    SiEthereum,
    SiGooglecontaineroptimizedos,
    SiXrp,
    SiStarlingbank,
    SiCommerzbank,
} from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { FaBitcoin } from "react-icons/fa6";
import { PiPackageThin } from "react-icons/pi";
import { TbBrandCoinbase, TbLockSquareRoundedFilled } from "react-icons/tb";
import { FaPiggyBank } from "react-icons/fa";

import style from './Body.module.scss';
import { AuditCard } from './AuditCard';


export function Body(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body_container }>
                <div className={ style.top }>
                    <div className={ style.left }>
                        <div className={ style.left_container }>
                            <div style={{backgroundColor: '#242830'}}>
                                <SiEthereum
                                    size={'80px'}
                                    color='#46595C'
                                />
                            </div>

                            <div></div>
                            <div></div>

                            <div style={{backgroundColor: '#2F2A1C'}}>
                                <SiBinance
                                    size={'80px'}
                                    color='#8E731D'
                                />
                            </div>

                            <div style={{backgroundColor: '#241E2F'}}>
                                <SiGooglecontaineroptimizedos
                                    size={'80px'}
                                    color='#54338A'
                                />
                            </div>
                            <div></div>

                            <div style={{backgroundColor: '#1F2730'}}>
                                <FaBitcoin
                                    size={'80px'}
                                    color='#38638C'
                                />
                            </div>

                            <div style={{backgroundColor: '#2D1B1D'}}>
                                <TbCurrencySolana
                                    size={'80px'}
                                    color='#991B21'
                                />
                            </div>

                            <div style={{backgroundColor: '#2E2C2B'}}>
                                <SiXrp
                                    size={'80px'}
                                    color='#836E60'
                                />
                            </div>
                        </div>
                    </div>

                    <div className={ style.mid }>
                        <p>We Build Web3 Together</p>
                    </div>

                    <div className={ style.right }>
                        <div className={ style.right_container }>
                            <div></div>
                            <div></div>
                            <div style={{backgroundColor: '#2F1C25'}}>
                                <SiCommerzbank
                                    size={'80px'}
                                    color='#971B51'
                                />
                            </div>
                            <div></div>
                            <div style={{backgroundColor: '#313031'}}>
                                <SiStarlingbank
                                    size={'80px'}
                                    color='#979697'
                                />
                            </div>
                            <div style={{backgroundColor: '#26282B'}}>
                                <PiPackageThin
                                    size={'80px'}
                                    color='#80292A'
                                />
                            </div>
                            <div style={{backgroundColor: '#1A1E2E'}}>
                                <TbBrandCoinbase
                                    size={'80px'}
                                    color='#263D92'
                                />
                            </div>
                            <div style={{backgroundColor: '#221E30'}}>
                                <TbLockSquareRoundedFilled 
                                    size={'80px'}
                                    color='#45328F'
                                />
                            </div>
                            <div style={{backgroundColor: '#2A221C'}}>
                                <FaPiggyBank
                                    size={'80px'}
                                    color='#915421'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ style.bottom }>
                    <div className={ style.bottom_container }>
                        <div className={ style.left }>
                            <AuditCard 
                                title={'Our Investors'} 
                                description={'DODO is supported by well-known investment institutions in the industry, including Pantera, Binance labs, Coinbase, Framework, Galaxy Digital, IOSG,Folius,SevenX.'} 
                                icons={[
                                    <TbCurrencySolana
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiCoinbase
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiTesla 
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiChromatic
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiVirgin
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiTesla 
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiSuzuki
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiPantheon
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                ]} 
                            />
                        </div>

                        <div className={ style.right }>
                            <AuditCard 
                                title={'Our Auditors'} 
                                description={'DODO has completed more than ten audits since its launch and has also launched a bug bounty program with a maximum reward of $100,000. Security partners includes Trail of bits, Sherlock, immunefi, hackenproof.'} 
                                icons={[
                                    <SiBinance
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <TbCurrencySolana
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiCoinbase
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiChromatic
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiPantheon
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiTesla 
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiSuzuki
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                    <SiVirgin
                                        size={'50px'}
                                        color='#848485'
                                    />,
                                ]} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
