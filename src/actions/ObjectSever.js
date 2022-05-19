import callApi from "../commons/api/apiCall";
export const saveimage = (file) => {
    console.log(file);
    return () => {
        callApi("addimage", "POST", file)
     }
}
export const SendObjectSever = (Objects) => {
    return ()  =>{
        callApi("sendobject", "POST", {
            payLoad: {
                Objects
            }
        })
     }
}