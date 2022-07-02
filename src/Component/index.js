import React from "react";
import style from "./index.module.scss"
import cx from 'classnames'
import img from "./pic.png"
function Main() {
    const vartoken= "$token";
    return (
        <div>
            <header>
                <div className={style.mainHeader}>
                    <img src={img} className={style.img}></img>
                    <span>DAO KING</span>
                    <div >
                        <button className={style.webbtn}>WEBSITE</button>
                        <button className={style.btnStyle}>CONNECT</button>
                    </div>
                </div>
            </header>
            <div className={style.containerStyle}>
                <div className={style.container}>
                    <div className={style.secondContainer}>
                        <div className={style.containerContent}>
                            <span>Stake Your 
                                $Token
                                And Earn 20% Interest
                                On Staked Token </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                        </div>
                        <div className={style.containerBox}>
                            <div className={style.box}>
                                <br />
                                <span>APY In Percentage</span>
                                <p>24% APY</p>
                            </div>
                            <div className={style.box}>
                            <br />
                                <span>Current Token Price</span>
                                <p>1.384 USDT</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.container2}>
                        <div className={style.containerBox}>
                            <div className={style.box1}>
                                <br></br>
                                <span>Min Staking Amount</span>
                                <p>50 USDT</p>
                            </div>
                            <div className={style.box1}>
                                <br></br>
                                <span>Max Staking Amount</span>
                                <p>500 USDT</p>
                            </div>
                        </div>
                        <div className={style.containerBox1}>
                            <div className={style.conbox}>
                                <div className={style.boxcontent}>
                                    <span>Your Wallet Address</span><br></br><br></br>
                                    <span>Total Stakable Token</span><br></br><br></br>
                                    <span>Unstake Fee</span><br></br><br></br>
                                    <span>Lock Deadline</span>
                                </div>
                                <div className={style.boxcontent1}>
                                    <span>0x8F5d...8955</span><br></br><br></br>
                                    <span>53746 TOKEN</span><br></br><br></br>
                                    <span>15%</span><br></br><br></br>
                                    <span>30 Days</span>
                                </div>
                            </div>
                            <div className={style.poolstyle}>
                                <span>Pool Filled</span>
                                <div className={style.progressbar}>
                                    <div>45% Filled</div>
                                </div>
                            </div>
                            <div className={style.spancontent}>
                                <span>Stake Your Token</span>
                                <div className={style.box2}>
                                    <div className={style.boxcontent2}>Enter Amount Of Token</div>
                                    <div className={style.boxcontent3}>MAX</div>
                                </div>
                            </div>
                            <div className={style.btnContent}>
                                <button>STAKE</button>
                                <button>UNSTAKE</button>
                            </div>
                            <div className={style.btnContent1}>
                                <button>EMERGENCY WITHDRAW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;
