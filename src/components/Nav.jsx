import React from "react";
export default function Nav() {
    return (
        <div className="flex p-10">
            <div>
                <span className="self-center text-[25px] font-bold">
                    MoneyBuddy
                </span>
            </div>
            <div className="flex ml-auto font-sfui tracking-[0.07em]">
                <ul className="self-center flex gap-8 text-[15px] pr-5">
                    <li>Courses</li>
                    <li>Success Stories</li>
                    <li>Community</li>
                    <li>About us</li>
                </ul>
                <button className="px-6 bg-[#C5B1FF] border-solid border-2 border-[#6E4CD1] shadow-neu">
                    Login
                </button>
            </div>
        </div>
    );
}
