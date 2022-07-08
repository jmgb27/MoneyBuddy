import React from "react";
export default function Nav() {
    return (
        <div className="flex p-10">
            <div>
                <span className="self-center text-[25px] font-bold">
                    MoneyBuddy
                </span>
            </div>
            <div className="flex ml-auto">
                <ul className="self-center flex gap-8 text-[15px]">
                    <li>Courses</li>
                    <li>Success Stories</li>
                    <li>Community</li>
                    <li>About us</li>
                </ul>
                <button className="pl-8">Login</button>
            </div>
        </div>
    );
}
