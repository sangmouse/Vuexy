import style from "../styles/UserForm.module.scss";
import icBack from "../assets/icons/ic-back.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [msg, setMsg] = useState("");
  let timeoutId;
  const [user, setUser] = useState({
    username: "",
    role: "developer",
    department: "vti",
    address: "",
  });

  const onSubmit = async (event) => {
    clearTimeout(timeoutId);
    event.preventDefault();
    if (!user.username.trim() || !user.address.trim()) {
      setMsg("All field is required!");
      return;
    }
    if (params.id) {
      fetch(`http://localhost:3001/users/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user }),
      });
      setMsg("Update successfully!");
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user }),
      });
      setMsg("Create successfully!");
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const fetchDetail = async () => {
    const res = await fetch(`http://localhost:3001/users/${params?.id}`, {
      method: "GET",
    });
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    if (params.id) {
      fetchDetail();
    }
  }, [params.id]);

  return (
    <section className={style.form}>
      <p className={style.form_msg}>{msg}</p>
      <h1>
        <button onClick={() => navigate("/")}>
          <img src={icBack} alt="back" />
        </button>
        {params.id ? "Edit" : "Add"} User
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
            onChange={(event) => {
              setMsg("");
              setUser({
                ...user,
                username: event.target.value,
              });
            }}
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
            onChange={(event) => {
              setMsg("");
              setUser({
                ...user,
                address: event.target.value,
              });
            }}
          />
        </div>
        <div className={style.form_item}>
          <label htmlFor="username">User Name</label>
          <select
            name="role"
            id="role"
            value={user.role}
            onChange={(event) => {
              setMsg("");
              setUser({
                ...user,
                role: event.target.value,
              });
            }}
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
            onChange={(event) => {
              setMsg("");
              setUser({
                ...user,
                department: event.target.value,
              });
            }}
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
