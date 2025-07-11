import style from "../styles/Home.module.scss";

export default function HomePage() {
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
            <button>
              <img src="" alt="" />
            </button>
            <button></button>
            <button></button>
          </td>
        </tr>
      </table>
    </section>
  );
}
