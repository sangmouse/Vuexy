import style from "../styles/Home.module.scss";
import icRemove from "../assets/icons/ic-remove.png";
import icView from "../assets/icons/ic-view.png";
import icEdit from "../assets/icons/ic-edit.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ROLE = [
  {
    value: "tester",
    label: "Tester",
  },
  {
    value: "developer",
    label: "Developer",
  },
  {
    value: "ba",
    label: "Business Analyst",
  },
];
const DEPARTMENT = [
  {
    value: "vti",
    label: "VTI Group",
  },
  {
    value: "cmc",
    label: "CMC Global",
  },
  {
    value: "fsoft",
    label: "FPT Software",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const user = JSON.parse(localStorage.getItem("user"));

  const directPage = (url) => navigate(url);

  const fetchList = async () => {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    setUserList(data);
  };

  const removeUser = async (id) => {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    await fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (!user?.username) {
      navigate("/sign-in");
    }
  });

  return (
    <section className={style.list}>
      <section className={style.option}>
        <select
          name="page-size"
          id="page-size"
          value={perPage}
          onChange={(event) => setPerPage(event.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button onClick={() => directPage("create/user")} className={style.cta}>
          Add New User
        </button>
      </section>
      <table>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Department</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        {userList.slice(0, +perPage).map((user) => {
          return (
            <tr>
              <td>{user.username}</td>
              <td>{ROLE.find((item) => item.value === user.role).label}</td>
              <td>
                {
                  DEPARTMENT.find((item) => item.value === user.department)
                    .label
                }
              </td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => directPage(`view/${user.id}`)}>
                  <img src={icView} alt="view user" />
                </button>
                <button onClick={() => directPage(`edit/${user.id}`)}>
                  <img src={icEdit} alt="edit user" />
                </button>
                <button onClick={() => removeUser(user.id)}>
                  <img src={icRemove} alt="remove user" />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}
