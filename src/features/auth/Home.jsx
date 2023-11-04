import { Link } from "react-router-dom";

import "../../assets/css/home.css";

import AuthLayout from "../../components/AuthLayout";

import FirstPlanet from "../../assets/img/login/first-planet.png";
import SecondPlanet from "../../assets/img/login/second-planet.png";

const Home = () => {
  return (
    <AuthLayout>
      <h1 className="title">Ласкаво просимо!</h1>
      <div className="tiles">
        <Link className="homeTile" to="/login">
          <h2>Увійти в аккаунт</h2>
          <img src={FirstPlanet} alt="First Planet" />
        </Link>
        <Link className="homeTile" to="/register">
          <h2>Зареєструвати аккаунт</h2>
          <img src={SecondPlanet} alt="First Planet" />
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Home;
