import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restoreUser } from "../../store/session";

const SubmitGundam = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("High Grade 1/144");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(restoreUser())
  }, []);

  const submit = (e) => {
    e.preventDefault();

    const gundam = {
        name,
        user_id: user.id,
        description,
        link,
        upvotes: 1,
        grade,
        image1,
        image2,
        image3
    };

    
  };

  return (
    <div className="submit-main">
      <p className="submit-title">Submit a new Gundam</p>
      <form className="submit-form">
        <label className="submit-label">
          Gundam Name
          <input
            className="submit-input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            className="submit-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="submit-label">
          Buy Link
          <input
            className="submit-input-link"
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <label className="submit-label-img">
          Image Urls (Please Provide 3)
          <input
            type="url"
            className="submit-input-img"
            value={image1}
            onChange={(e) => setImage2(e.target.value)}
            placeholder="Primary Image"
          />
          <input
            type="url"
            className="submit-input-img"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            placeholder="Second Image"
          />
          <input
            type="url"
            className="submit-input-img"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            placeholder="Third Image"
          />
        </label>
        <button className="submit-gundam-btn" onSubmit={submit} disabled={true}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitGundam;
