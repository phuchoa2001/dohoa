import clsx from 'clsx';
import Style from './index.module.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from './router';
import { withRouter } from "react-router";
function Etion(props) {
    const path = props.match.path;
    return (
        <Router>
            <div className={clsx("row", Style.BoxEtion)}>
                <Switch>
                    {showRouter(router , path)}
                </Switch>
            </div>
        </Router>
    )
    function showRouter(router , path) {
        var result = null;
        if (router.length > 0) {
            result = router.map((router, index) => {
                return (
                    <Route
                        key={index}
                        path={path  + router.path}
                        exact={router.exact}
                        component={router.mani}
                    />
                )
            })
        }
        return result;
    }
}
export default withRouter(Etion);