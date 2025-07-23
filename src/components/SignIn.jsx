import { useNavigate } from "react-router-dom";
import style from "../styles/SignIn.module.scss";
import icBack from "../assets/icons/ic-back.png";
import { useEffect, useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const userSignin = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let timeoutID;
  const onSignIn = (event) => {
    clearTimeout(timeoutID);
    event.preventDefault();
    if (!user.username.trim() || !user.password.trim()) {
      setMsg("All field is required!");
      return;
    } else {
      if (
        user.username.trim() === "Larry" &&
        user.password.trim() === "Larry@123"
      ) {
        setMsg("Signin successfully!");
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setMsg("Account incorrect!");
      }
    }
  };

  useEffect(() => {
    if (userSignin?.username) {
      navigate("/");
    }
  });

  return (
    <section className={style.signin}>
      <section className={style.signin_align}>
        <section className={style.signin_form}>
          <section>
            <h2>Welcome to Vuexy! 👋</h2>
            <p>Please sign-in to your account and start the adventure</p>
          </section>
          <div>
            <p className={style.signin_msg}>{msg}</p>
            <form action="" onSubmit={onSignIn}>
              <section className={style.signin_item}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username..."
                  value={user.username}
                  onChange={(event) => {
                    setMsg("");
                    setUser({
                      ...user,
                      username: event.target.value,
                    });
                  }}
                />
              </section>
              <section className={style.signin_item}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password..."
                  value={user.password}
                  onChange={(event) => {
                    setUser({
                      ...user,
                      password: event.target.value,
                    });
                    setMsg("");
                  }}
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
