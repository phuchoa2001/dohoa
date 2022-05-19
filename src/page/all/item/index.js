import Style from "./index.module.css";
import clsx from 'clsx';
import { withRouter } from "react-router";
function Item(props) {
    const { name, img, href } = props;
    function handleUrl(e) {
        props.history.push(href);
    }
    return (
        <div href={href}
            className={clsx(Style.box_product_heading_item
                , "col-xxl-3 col-lg-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 item")}
            onClick={handleUrl}
        >
            <div className={Style.box_product_heading_item_card}>
                <img src={img} alt="" className={Style.box_product_heading_item_img} />
                <p title="heading" className={Style.box_product_heading_item_text}>Tên : {name}
                    <span className={clsx("badge bg-info" , Style.box_product_heading_item_span)}>{props.new ? "new" : ""}</span>
                </p>
            </div>
        </div>
    )
}
export default withRouter(Item);