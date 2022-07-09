// tailwind.config.js
module.exports = {
    mode: "jit",
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    // specify other options here
    theme: {
        fontFamily: {
            sfui: ["SF UI Display Medium"],
        },
        extend: {
            colors: {
                //
            },
            boxShadow: {
                neu: "5px 6px 0 #37246F",
            },
        },
    },
};
