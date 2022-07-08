import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Boy from "./images/boy.png";
import Girl from "./images/girl.png";
import Partners from "./images/partners.png";
import Ycombi from "./images/ycombi.png";

function App() {
    return (
        <div className="App">
            <Nav />
            <h1 className="text-center pt-7 tracking-tighter text-[55px] font-bold">
                Make money as a student
            </h1>

            <div className="flex justify-center">
                <div>
                    <img src={Boy} alt="" />
                </div>

                <div className="flex flex-col">
                    <div className="w-[590px] pt-10">
                        <p className="text-center">
                            We helped 2,000+ students to make more than 50k per
                            month as a student. Sounds crazy? Join us today 👇{" "}
                        </p>
                    </div>
                    <div className="flex justify-center pt-7">
                        <form action="">
                            <input
                                type="text"
                                placeholder="Your email address"
                            />
                            <button className="pl-2">Join us</button>
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
