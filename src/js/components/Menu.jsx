

import React from "react";
import ButtonBase from "./Buttonbase.jsx"
import {
  BookOpenText,
  BriefcaseBusiness,
  HeartPlus,
  Mail,
  Bookmark,
  User,
} from "lucide-react";

// const { BookOpenText, briefcaseBusiness, heartPlus, mail, bookmark, user } = icons;

function Menu({}) {
  return (
    <>
      <div className="flex gap-4 justify-center items-center min-h-screen bg-gray-200">
        <ButtonBase icon={BookOpenText} />
        <ButtonBase icon={BriefcaseBusiness} />
        <ButtonBase icon={HeartPlus} />
        <ButtonBase icon={Mail} />
        <ButtonBase icon={Bookmark} />
        <ButtonBase icon={User} />
    </div>
    </>
  );
}

export default Menu;
