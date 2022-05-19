import clsx from 'clsx';
import domtoimage from 'dom-to-image';
import { useState, useEffect } from 'react';
import Style from './index.module.css'
import {Girl} from './girl.js';
import Stylecss from '../../../commons/csstojs/index'
function Bienhinhanhthanhhinhve() {
    const [img, Setimg] = useState(process.env.PUBLIC_URL + '/asset/image/bienhinhanhthanhhinhve.jpg');
    useEffect(() => {
        return () => {
            img && URL.revokeObjectURL(img)
        }
    }, [img]);
    function handleChange(e) {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        Setimg(url);
    }
    function hanhleDownone() {
        domtoimage.toJpeg(document.querySelector(`.${Style.one}`), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'bienhinhanhthanhhinhve.png';
                link.href = dataUrl;
                link.click();
            });
    }
    function hanhleDowntow() {
        domtoimage.toJpeg(document.querySelector(`.${Style.tow}`), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }
    return (
        <>
            <div className={clsx("col-12 col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12", Style.BoxFile)}>
                <h3>box Edit Tạo Hình vẽ</h3>
                <div className="box-file">
                    <label htmlFor="hinhve_input"
                        className={clsx(Style.label, Style.btn)}
                    >
                        Upload Image
                    </label>
                    <input
                        type="file"
                        className="display"
                        id="hinhve_input"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={clsx("col-12 col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12", Style.BoxProduct)}>
                <h3>box Prouct Tạo Hình vẽ</h3>
                <div className="product-1">
                    <img src={img} alt=""
                        className={clsx(Style.image)} />
                    <img src={img} alt=""
                        className={clsx(Style.image, Style.one)} />
                    <img src={img} alt=""
                        className={clsx(Style.image, Style.tow)}
                    />
                </div>
                <div className={Style.boxBtn}>
                    <button className={Style.btn} onClick={hanhleDownone}>Tải ảnh 1</button>
                    <button className={Style.btn} onClick={hanhleDowntow}>Tải ảnh 2</button>
                </div>
            </div>
            <Stylecss >
              {Girl}
            </Stylecss>
        </>
    )
}
export default Bienhinhanhthanhhinhve;