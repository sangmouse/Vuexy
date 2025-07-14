import style from "../styles/Home.module.scss";
import icRemove from "../assets/icons/ic-remove.png";
import icView from "../assets/icons/ic-view.png";
import icEdit from "../assets/icons/ic-edit.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const directPage = (url) => navigate(url);

  return (
    <section className={style.list}>
      <section className={style.option}>
        <select name="page-size" id="page-size">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button className={style.cta}>Add New Record</button>
      </section>
      <table>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Department</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>john</td>
          <td>Developer</td>
          <td>VTI Group</td>
          <td>Texas</td>
          <td>
            <button onClick={() => directPage("view/1")}>
              <img src={icView} alt="view user" />
            </button>
            <button onClick={() => directPage("edit/1")}>
              <img src={icEdit} alt="edit user" />
            </button>
            <button>
              <img src={icRemove} alt="remove user" />
            </button>
          </td>
        </tr>
      </table>
    </section>
  );
}
