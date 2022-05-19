import Style from "./index.module.css";
import StyleFooter from '../footer/index.module.css'
export const Girl = {
    "@media only screen and (min-width: 1025px)": {
        ["." + Style.menuMobile]: {
            display: "none",
        },
    },
    "@media only screen and (max-width: 280px)": {
        ["." + Style.menuMobile]: {
            "font-size" : "13px"
        },
    },
    "@media only screen and (max-width: 1024px)": {
        ["." + Style.menu]: {
            display: "none"
        },
        ["." + Style.active]: {
            display: "block",
            "border-radius": "0px",
            height: "100%",
        },
        ["." + Style.icon]: {
            width: "100%",
            "text-align": "center",
            "margin-top" : "5px",
        },
        ["." + Style.span]: {
            width: "100%",
            "text-align": "center",
            "margin-top" : "5px",
        },
        ["." + Style.href]: {
            "color": "#fff",
            "text-align": "center",
            "text-decoration": "none",
            display: "block",
        },
        ["." + StyleFooter.footer]: {
         "margin-bottom" : "50px"
        }
    }
};
