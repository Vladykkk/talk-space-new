import React from "react";

import "../../assets/css/groups.css";

import PagesWrapper from "../../components/PagesWrapper/PagesWrapper";
import Button from "../../components/Button";
import GroupsWindow from "../../components/GroupsWindow";

import ReloadIcon from "../../assets/img/menu/groups/reload.svg";

const Groups = () => {
  return (
    <PagesWrapper>
      <div className="groupsHeader">
        <h2 className="pagesTitle">Групи в просторі ()</h2>
        <Button>Додати</Button>
      </div>
      <div className="groupsSearch">
        <button>Сортувати за</button>
        <input type="search" placeholder="Знайти" />
      </div>
      <div className="groupsTiles">
        <GroupsWindow></GroupsWindow>
      </div>
      <div className="groupsMore">
        <button>
          Більше <img src={ReloadIcon} alt="Reload Icon" />
        </button>
      </div>
    </PagesWrapper>
  );
};

export default Groups;
