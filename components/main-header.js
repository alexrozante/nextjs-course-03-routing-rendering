import Navlink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Navlink href="/">NextNews</Navlink>
      </div>
      <nav>
        <ul>
          <li>
            <Navlink href="/news">News</Navlink>
          </li>
          <li>
            <Navlink href="/archive">Archive</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
