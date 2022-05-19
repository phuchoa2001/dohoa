
import FooterContext from "./footercontext";
import Nocopy from "./nocopy";
import Style from './index.module.css'
import clsx from 'clsx';
function footer() {
  return (
    <div className={clsx(Style.footer  ,"container")}>
      <div className="footer-context row g-0">
        <FooterContext />
      </div>
      <Nocopy />
    </div>
  );
}

export default footer;
