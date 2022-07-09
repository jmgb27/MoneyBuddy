import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Boy from "./images/boy.png";
import Girl from "./images/girl.png";
import Partners from "./images/partners.png";
import Ycombi from "./images/ycombi.png";
import Money from "./images/money.png";
import Sack from "./images/sack.png";

function App() {
    return (
        <div className="App">
            <Nav />
            <h1 className="text-center pt-7 tracking-tighter text-[55px] font-bold">
                Make money as a student
            </h1>

            <div className="m-auto flex h-7 justify-between px-56 ">
                <img src={Money} alt="" />
                <img src={Sack} alt="" />
            </div>

            <div className="flex justify-center">
                <div>
                    <img src={Boy} alt="" />
                </div>

                <div className="flex flex-col font-sfui text-[17px]">
                    <div className="w-[590px] pt-10">
                        <p className="text-center tracking-[0.06em]">
                            We helped{" "}
                            <span className="font-semibold">
                                2,000+ students
                            </span>{" "}
                            to make more than{" "}
                            <span className="font-semibold">50k per month</span>{" "}
                            as a student. Sounds crazy? Join us today 👇
                        </p>
                    </div>
                    <div className="flex justify-center pt-7">
                        <form className="border-solid shadow-neu" action="">
                            <input
                                className="border-2 border-[#928672] p-3"
                                type="text"
                                placeholder="Your email address"
                            />
                            <button className="px-6 border-2 border-[#6E4CD1] p-3 bg-[#C5B1FF]">
                                Join us now
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center flex-col pt-10">
                        <p className="text-center">Investors & Partners</p>
                        <img src={Partners} alt="" />
                        <img
                            className="w-[250px] self-center pt-10"
                            src={Ycombi}
                            alt=""
                        />
                    </div>
                </div>

                <div>
                    <img src={Girl} alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;
