import style from "../styles/UserForm.module.scss";
import icBack from "../assets/icons/ic-back.png";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const navigate = useNavigate();
  return (
    <section className={style.form}>
      <h1>
        <button onClick={() => navigate("/")}>
          <img src={icBack} alt="back" />
        </button>
        Add User
      </h1>
    </section>
  );
}
