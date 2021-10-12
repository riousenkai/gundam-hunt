import { useEffect, useState } from "react";

const SubmitGundam = () => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("High Grade 1/144");
  const [link, setLink] = useState("")
  const [img1, setImg1] = useState("")
  const [img2, setImg2] = useState("")
  const [img3, setImg3] = useState("")

    const submit = (e) => {
        e.preventDefault()

        const gundam = {

        }
    }

  return (
    <div className="submit-main">
      <p className="submit-title">Submit a new Gundam</p>
      <form className="submit-form">
        <label className="submit-label">Gundam Name
        <input
          className="submit-input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label className="submit-label">Grade
        <select className="submit-select" value={grade} onChange={(e) =>setGrade(e.target.value)}>
            <option>High Grade 1/144</option>
            <option>Real Grade 1/144</option>
            <option>Master Grade 1/100</option>
            <option>Perfect Grade 1/60</option>
            <option>Super Deformed (SD)</option>
        </select>
        </label>
        <label className="submit-label">Buy Link
        <input className="submit-input-link" value={link} onChange={(e) => setLink(e.target.value)} />
        </label>
        <label className="submit-label-img">Image Urls (Please Provide 3)
        <input type="url" className="submit-input-img" />
        <input type="url" className="submit-input-img" />
        <input className="submit-input-img" />
        </label>
        <button className="submit-gundam-btn" onSubmit={} disabled={true}>Submit</button>
      </form>
    </div>
  );
};

export default SubmitGundam;
