import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Welcome to Jobster – Transform your job search experience and
            discover streamlined job opportunities organization on our landing
            page. 🚀 Effortlessly record and categorize job prospects by
            location, job type, and status.
            <br />
            <br />
            Upon login, Jobster unveils a user-friendly platform with a dynamic
            stat overview. Track pending, scheduled interviews, and declined
            prospects. Visualize your journey with insightful charts. Simplify
            job hunting with Jobster – where organization meets efficiency! 💼✨
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
