function StyleCss(props) {
    let result = ``;
    for (const index in props.children) {
        const object = props.children[index];
        result += index;
        result += '{'
        for (const index2 in object) {
            const object2 = object[index2];
            result += `${index2}`
            result += '{'
            for (const index3 in object2) {
                result += `${index3} : ${object2[index3]};`
            }
            result += '}'
        }
        result += '}'
    }
    const style = document.createElement("style");
    style.classList.add("style");
    style.innerHTML = result;
    document.querySelector("head").appendChild(style);
    return "";
}
export default StyleCss;