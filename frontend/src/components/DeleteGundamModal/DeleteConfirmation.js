import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteGundam } from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";
import { useSelector } from "react-redux";

const DeleteConfirmation = ({gundam}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { setNum } = useShowModal()

    const loggedUser = useSelector((state) => state.session.user);


    const deleteGundams = (id) => {
        dispatch(deleteGundam(id)).then(() =>
          history.push(`/profile/${loggedUser.id}`)
        );
      };

    return (
        <div className="confirmation">
            <p className="confirmation-header">Are you sure you want to delete this post?</p>
            <button className="confirmation-yes" onClick={(e) => deleteGundams(gundam.id, e)}>Yes</button>
            <button className="confirmation-no" onClick={() => setNum(0)}>No</button>
        </div>
    )
}

export default DeleteConfirmation;
