import { useNavigate } from "react-router-dom";
import style from "../styles/SignIn.module.scss";
import icBack from "../assets/icons/ic-back.png";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <section className={style.signin}>
      <section className={style.signin_align}>
        <section className={style.signin_form}>
          <section>
            <h2>Welcome to Vuexy! 👋</h2>
            <p>Please sign-in to your account and start the adventure</p>
          </section>
          <div>
            <form action="">
              <section className={style.signin_item}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username..."
                />
              </section>
              <section className={style.signin_item}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password..."
                />
              </section>
              <section>
                <button className={style.signin_btn}>Sign in</button>
              </section>
              <p className={style.signin_btn_back}>
                <button onClick={() => navigate("/")}>
                  <img src={icBack} alt="back" />
                </button>
                Back to home
              </p>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}
