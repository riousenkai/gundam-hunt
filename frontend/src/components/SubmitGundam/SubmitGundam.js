import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createGundamUpvote, makeGundam } from "../../store/gundam";
import "./SubmitGundam.css";

const SubmitGundam = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("High Grade 1/144");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, []);

  const submit = async (e) => {
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
      image3,
    };

    const payload = {
      user_id: user.id,
      gundam_id: 1,
    };

    await dispatch(makeGundam(gundam))
      .then((newId) => dispatch(createGundamUpvote(user.id, newId, gundam)))
      .then((newId) => history.push(`/gundams/${newId}`));
  };

  return (
    <div className="submit-main">
      <p className="submit-title">Submit a new Gundam</p>
      <form className="submit-form" onSubmit={submit}>
        <label className="submit-label">
          Gundam Name
          <input
            className="submit-input"
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
          <textarea
            required
            className="submit-input submit-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="false"
            spellCheck="false"
          />
        </label>
        <label className="submit-label">
          Buy Link
          <input
            className="submit-input"
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
            className="submit-input-img 3"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            placeholder="Third Image"
            required
            autoComplete="false"
            spellCheck="false"
          />
        </label>
        <button className="submit-gundam-btn">Submit</button>
      </form>
    </div>
  );
};

export default SubmitGundam;
