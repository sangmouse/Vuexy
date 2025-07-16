import style from "../styles/UserDetail.module.scss";
import icBack from "../assets/icons/ic-back.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState(null);
  const params = useParams();

  const fetchDetail = async () => {
    const res = await fetch(`http://localhost:3001/users/${params?.id}`, {
      method: "GET",
    });
    const data = await res.json();
    setUserDetail(data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);
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
          <span>User : </span> <span>{userDetail?.username}</span>
        </li>
        <li>
          <span>Role : </span> <span>{userDetail?.role}</span>
        </li>
        <li>
          <span>Department : </span> <span>{userDetail?.department}</span>
        </li>
        <li>
          <span>Address : </span> <span>{userDetail?.address}</span>
        </li>
      </ul>
    </section>
  );
}
