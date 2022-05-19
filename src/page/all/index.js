import Style from "./index.module.css";
import Item from "./item";
import listproduct from "./listproduct";
import { withRouter } from "react-router";
import clsx from 'clsx';
function All(props) {
    let list = listproduct;
    const route = props.match.params.route
    if (route) {
        const filterArray = listproduct.filter((item) => item.product === route);
        list = filterArray;
    }
    return (
        <div className={Style.box_product}>
            <h3 className={Style.box_product_heading}>Danh sách sản phẩm {route}</h3>
            <div className={clsx(Style.listproduct , "row")}>
                {list.map((item, index) =>
                    <Item key={index} name={item.name} img={item.img} href={item.href} new={item.new} />
                )}
              
            </div>
            <div className={Style.boxnavigation}>
                <nav aria-label="Page navigation example" className={Style.navigation}>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/page1">1</a></li>
                        <li className="page-item"><a className="page-link" href="/page2">2</a></li>
                        <li className="page-item"><a className="page-link" href="/page3">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/end" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}
export default withRouter(All);