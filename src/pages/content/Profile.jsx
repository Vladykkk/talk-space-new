import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/profile.css";

import UserPicture from "../../assets/img/menu/profile/user.png";
import EditIcon from "../../assets/img/menu/profile/edit.svg";

import PagesWrapper from "../../components/PagesWrapper/PagesWrapper";
import Button from "../../components/Button";

const Profile = () => {
  return (
    <PagesWrapper>
      <header className="profileHeader">
        <ul className="profileTopics">
          <li>
            <Link>Медіа</Link>
          </li>
          <li>
            <Link>Документи</Link>
          </li>
          <li>
            <Link>Файли</Link>
          </li>
        </ul>
        <Button>
          Редагувати <img src={EditIcon} alt="Edit Icon" />
        </Button>
      </header>
      <main className="profileTabs">
        <article className="profileTab">
          <img src={UserPicture} alt="User image" />
          <div className="userDescription">
            <p>Прізвище та ім'я (нік)</p>
            <div className="line"></div>
            <p>Галузь</p>
            <p>Відділ розробки</p>
            <p>Країна</p>
            <div className="profileData">
              <p>Дата приєднання</p>
              <p>13.02.2023</p>
            </div>
          </div>
        </article>
        <article className="profileTab">
          <h2>Про себе</h2>
          <p>
            Я розробник! Розробники відіграють вирішальну роль у створенні
            програмного забезпечення, веб-сайтів і програм, які впливають на
            багато аспектів нашого цифрового світу. Явважаю, що мої навички
            цінні в сучасному технологічному суспільстві. Хочу спілкуватися з
            іншими робробниками, ділитися досвідом, та дізнаватисч щось нове.
          </p>
        </article>
        <article className="profileTab">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            sequi, explicabo dolorem dolor facere amet, praesentium ipsum
            consequatur incidunt culpa sint voluptates quas ullam maiores atque,
            rem tempora accusamus illo.
          </p>
        </article>
      </main>
    </PagesWrapper>
  );
};

export default Profile;
