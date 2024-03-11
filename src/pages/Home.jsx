import { Link } from "../components/Link"


const Home = () => {
    return (
      <>
        <h1>Home</h1>
        <p>Pagina de ejemplo para react router</p>
        {/* <button href="/about" onClick={() => navegate('/about')}>About</button>
         */}
        <Link to='/about' resetScroll>
            About
        </Link>
      </>
    );
  };

  export default Home