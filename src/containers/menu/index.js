
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Style from "./index.module.css";
import Navlinkmenu from './Navlinkmenu';
import router from '../../router';
import clsx from 'clsx';
import Footer from "../footer";
import StyleCss from '../../commons/csstojs/index';
import { Girl } from './girl.js'
const Links = ({ label, to, activeOnlyWhenExact, icon, span }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      return (
        <li className={Style.item}>
          <NavLink to={to} className={Style.href} activeClassName={Style.active} exact >
            {icon ? <i className={icon + " " + Style.icon} aria-hidden="true"></i> : <span className={clsx("badge bg-info",
              Style.span
            )}>{span}</span>}
            {label}
          </NavLink >
        </li>
      )
    }} />
  )
}
function Menu(props) {
  var elemt = showItemMenu(Navlinkmenu);
  return (
    <Router>
      <>
        <div className="col-12 col-sm-12 col-xxl-1 col-lg-12 col-xl-1 col-lg-12 col-md-12 col-sm-12">
          <div className={Style.menuMobile}>
            <ul className={Style.listitem}>
              {elemt.map(item => item)}
            </ul>
          </div>
          <div className={Style.menu}>
            <ul className={Style.listItem}>
              {elemt.map(item => item)}
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-xxl-11 col-lg-12 col-xl-11 col-lg-12 col-md-12 col-sm-12">
          <Switch>
            {showRouter(router)}
          </Switch>
        </div>
        <Footer />
        <StyleCss>
          {Girl}
        </StyleCss>
      </>
    </Router>
  )
  function showItemMenu(listitem) {
    var result = null;
    if (listitem.length > 0) {
      result = listitem.map((item, index) => {
        return (
          <Links
            key={index}
            label={item.name}
            to={item.to}
            activeOnlyWhenExact={item.exact}
            icon={item.icon}
            span={item.span}
          />
        )
      })
    }
    return result;
  }
  function showRouter(router) {
    var result = null;
    if (router.length > 0) {
      result = router.map((router, index) => {
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.mani}
          />
        )
      })
    }
    return result;
  }
}
export default withRouter(Menu);