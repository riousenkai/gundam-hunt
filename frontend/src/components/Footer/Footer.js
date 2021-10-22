import "./Footer.css";

const footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">A project by John Elijah "Revan" Fajardo</p>
      <a href="https://www.linkedin.com/in/john-elijah-revan-fajardo-33a189a3/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/riousenkai" target="_blank" rel="noreferrer">
        <i className="fab fa-github-square"></i>
      </a>
    </div>
  );
};

export default footer;
