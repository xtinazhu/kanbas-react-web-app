import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function TitleControlButtons() {
    return (
        <div className="float-end">
            <button className ="btn btn-outline-secondary wd-rounded-corners-all-around" > 40% of Total</button>
            <BsPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}