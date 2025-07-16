import style from "../styles/UserForm.module.scss";
import icBack from "../assets/icons/ic-back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    role: "developer",
    department: "vti",
    address: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={style.form}>
      <h1>
        <button onClick={() => navigate("/")}>
          <img src={icBack} alt="back" />
        </button>
        Add User
      </h1>
      <form action="" onSubmit={onSubmit}>
        <div className={style.form_item}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Larry Wheels"
            value={user.username}
            onChange={(event) =>
              setUser({
                ...user,
                username: event.target.value,
              })
            }
          />
        </div>
        <div className={style.form_item}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="adress"
            id="adress"
            placeholder="Texas"
            value={user.address}
            onChange={(event) =>
              setUser({
                ...user,
                address: event.target.value,
              })
            }
          />
        </div>
        <div className={style.form_item}>
          <label htmlFor="username">User Name</label>
          <select
            name="role"
            id="role"
            value={user.role}
            onChange={(event) =>
              setUser({
                ...user,
                role: event.target.value,
              })
            }
          >
            <option value="developer">Developer</option>
            <option value="ba">Business Analyst</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div className={style.form_item}>
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={user.department}
            onChange={(event) =>
              setUser({
                ...user,
                department: event.target.value,
              })
            }
          >
            <option value="vti">VTI Group</option>
            <option value="cmc">CMC Global</option>
            <option value="fsoft">FPT Software</option>
          </select>
        </div>
        <button className={style.form_btn}>Submit</button>
      </form>
    </section>
  );
}
