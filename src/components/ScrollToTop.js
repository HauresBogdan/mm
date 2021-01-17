
    import { useEffect } from "react";
    import { withRouter } from "react-router-dom";

    const ScrollToTop = ({ children, location: { pathname } }) => {
      useEffect(() => {
        
        window.focus();
         window.scrollTo(0, 0);
       

      console.log("pathname:", pathname);
      }, [pathname]);

      return children || null;
    };

    export default withRouter(ScrollToTop);