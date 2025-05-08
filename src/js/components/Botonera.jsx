
import Button from "./Buttonbase.jsx"
import {
  BookOpenText,
  BriefcaseBusiness,
  HeartPlus,
  Mail,
  Bookmark,
  User,
} from "lucide-react";



function Botonera() {
  return (
    <>
      <div className="botonera  m-1">
        <div className="bg-white rounded-pill p-1">
        <Button icon={BookOpenText} />
        <Button icon={BriefcaseBusiness} />
        <Button icon={HeartPlus} />
        <Button icon={Mail} />
        <Button icon={Bookmark} />
        <Button icon={User} />      
        </div>
      </div>
    </>
  );
}

export default Botonera;
