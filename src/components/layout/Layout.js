import classes from "./Layout.module.css";
import MainNaviagtion from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNaviagtion />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
