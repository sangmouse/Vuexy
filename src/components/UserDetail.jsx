import style from "../styles/UserDetail.module.scss";
import icBack from "../assets/icons/ic-back.png";
import { useNavigate } from "react-router-dom";

export default function UserDetail() {
  const navigate = useNavigate();
  return (
    <section className={style.detail}>
      <h1>
        <button onClick={() => navigate("/")}>
          <img src={icBack} alt="back" />
        </button>
        User Details
      </h1>
      <ul>
        <li>
          <span>User : </span> <span>John</span>
        </li>
        <li>
          <span>Role : </span> <span>Developer</span>
        </li>
        <li>
          <span>Department : </span> <span>CMC Global</span>
        </li>
        <li>
          <span>Address : </span> <span>Texas</span>
        </li>
      </ul>
    </section>
  );
}
