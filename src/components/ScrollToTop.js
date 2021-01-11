
    import { useEffect } from "react";
    import { withRouter } from "react-router-dom";

    const ScrollToTop = ({ children, location: { pathname } }) => {
      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        document.querySelector('html').style.scrollBehavior = '';
        window.scrollTo(0, 0);
        console.log("ruleaza");
      }, [pathname]);

      return children || null;
    };

    export default withRouter(ScrollToTop);