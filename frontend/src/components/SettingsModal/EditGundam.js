import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fixGundam } from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";

const EditGundam = ({ gundam }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(gundam.name);
  const [grade, setGrade] = useState(gundam.grade);
  const [link, setLink] = useState(gundam.link);
  const [description, setDescription] = useState(gundam.description);
  const [image1, setImage1] = useState(gundam.image1);
  const [image2, setImage2] = useState(gundam.image2);
  const [image3, setImage3] = useState(gundam.image3);

  const { setNum } = useShowModal();

  useEffect(() => {
    console.log(gundam);
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      description,
      link,
      grade,
      image1,
      image2,
      image3,
    };

    await dispatch(fixGundam(payload, gundam.id)).then(() => setNum(0));
  };

  return (
    <div className="edit-gundam-">
      <form className="submit-form" onSubmit={submit}>
        <label className="submit-label">
          Gundam Name
          <input
            className="submit-input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="false"
            spellCheck="false"
          />
        </label>
        <label className="submit-label">
          Grade
          <select
            className="submit-select"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option>High Grade 1/144</option>
            <option>Real Grade 1/144</option>
            <option>Master Grade 1/100</option>
            <option>Perfect Grade 1/60</option>
            <option>Super Deformed (SD)</option>
          </select>
        </label>
        <label className="submit-label">
          Product Description
          <input
            required
            className="submit-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="false"
            spellCheck="false"
          />
        </label>
        <label className="submit-label">
          Buy Link
          <input
            className="submit-input-link"
            required
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            autoComplete="false"
            spellCheck="false"
          />
        </label>
        <label className="submit-label-img">
          Image Urls (Please Provide 3)
          <input
            type="url"
            className="submit-input-img"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
            placeholder="Primary Image"
            required
            autoComplete="false"
            spellCheck="false"
          />
          <input
            type="url"
            className="submit-input-img"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            placeholder="Second Image"
            required
            autoComplete="false"
            spellCheck="false"
          />
          <input
            type="url"
            className="submit-input-img"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            placeholder="Third Image"
            required
            autoComplete="false"
            spellCheck="false"
          />
        </label>
        <button className="submit-gundam-btn" disabled={false}>
          Submit
        </button>
        <button onMouseDown={() => setNum(0)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditGundam;
