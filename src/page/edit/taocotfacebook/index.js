import clsx from 'clsx';
import domtoimage from 'dom-to-image';
import Style from './index.module.css'
import { useState, useEffect } from 'react';
import StyleCss from '../../../commons/csstojs';
import { Girl } from './girl';
function TaocotFacebook() {
    const [image, Setimage] = useState("/asset/image/product-1.jpg");
    const [height, setHeight] = useState(576);
    const [width, setWidth] = useState(350);
    const [bottom, setBottom] = useState(100);
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image)
        }
    }, [image]);
    function handleChange(e) {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        Setimage(url);
    }
    function handleWidth(e) {
        const value = e.target.value;
        const valuebottom = (value - width) / 2;
        setBottom(prev => prev + valuebottom);
        setWidth(value)
    }
    function handleHeight(e) {
        const value = e.target.value;
        setHeight(value)
    }
    function hanhleDownone() {
        domtoimage.toJpeg(document.querySelector(`.product-2`), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'taocotfacebook.png';
                link.href = dataUrl;
                link.click();
            });
    }
    return (
        <>
            <div className={clsx("col-12", Style.BoxFile)}>
                <h3>box Edit</h3>
                <div className={Style.boxFile}>
                    <label htmlFor="input"
                        className={clsx(Style.label, Style.btn)}
                    >
                        Upload Image
                    </label>
                    <input
                        type="file"
                        className="display"
                        id="input"
                        onChange={handleChange}
                    />
                    <label htmlFor="inputheight">Chiều rộng:</label>
                    <input type="number" className={Style.inputrange} value={width} onChange={handleWidth} min="100" max="1000" />
                    <label htmlFor="inputheight">Chiều cao:</label>
                    <input type="number" className={Style.inputrange} value={height} onChange={handleHeight} min="100" max="1000" />
                    <label htmlFor="width">(Chiều Rộng : {width}):</label>
                    <input type="range" id="width" name="vol" min="100" max="1000" className={Style.inputrange} value={width} onChange={handleWidth} />
                    <label htmlFor="height">(Chiều cao : {height}):</label>
                    <input type="range" id="height" name="vol" min="100" max="1000" className={Style.inputrange} value={height} onChange={handleHeight} />
                </div>
            </div>
            <div className={clsx("col-12", Style.BoxProduct)} >
                <h3> Tạo Cột Facebook </h3>
                <div className="product-2">
                    <div className={Style.Khung}>
                        <div className={Style.box} style={{
                            background: `url(${image})`,
                            width: `${width}px`,
                            height: `${height}px`,
                            margin: `${bottom}px  400px`
                        }} >
                            <div className={Style.before}>

                            </div>
                        </div>
                    </div>
                </div>
                <button className={Style.btn} onClick={hanhleDownone}>Tải ảnh 1</button>
            </div>
            <StyleCss>
              {Girl}
            </StyleCss>
        </>
    )
}
export default TaocotFacebook;