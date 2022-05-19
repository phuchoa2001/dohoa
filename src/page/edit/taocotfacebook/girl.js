import Style from './index.module.css';
export const Girl = {
    "@media only screen and (min-width: 320px) and (max-width: 576px) ": {
        ["." + Style.Khung]: {
            zoom : "20%"
        },
        ["." + Style.boxFile + " input"]: {
            margin: "10px 0px"
        }
    },
    "@media only screen and (min-width: 577px) and (max-width: 768px) ": {
        ["." + Style.Khung]: {
            zoom : "40%"
        }
    },
    "@media only screen and (min-width: 769px) and (max-width: 992px) ": {
        ["." + Style.Khung]: {
            zoom : "50%"
        }
    },
    "@media only screen and (min-width: 993px) and (max-width: 1200px) ": {
        ["." + Style.Khung]: {
            zoom : "57%"
        }
    }
};