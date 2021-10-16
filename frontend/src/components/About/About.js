import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import "./About.css";
import image from "../Images/header.png";


const About = () => {
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    setLoaded(true);
  });

  if (loaded === true) {
    return (
      <div className="profile-body">
        <div className="profile-top">
          <div className="profile-img-card">
            <img
              alt="Missing Image"
              className="profile-img"
              src="https://avatars.githubusercontent.com/u/82624619?s=400&v=4"
            />
          </div>
          <div className="profile-info">
            <p className="profile-username">John Elijah "Revan" Fajardo</p>
            <p className="profile-description">Aspiring Software Engineer</p>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-left">
            <div className="profile-upvotes">Projects</div>
            <div className="profile-activity">
              <a
                href="https://awesome-anime.herokuapp.com/"
                target="_blank"
                className="activity-card"
              >
                <img
                  alt="Missing Image"
                  className="activity-img about"
                  src="https://cdn.discordapp.com/attachments/887079736923287582/888559916263026718/newLogo.png"
                />
                <div className="activity-card-text about">
                  <p className="activity-title">Awesome Anime</p>
                  <p className="activity-description">
                    First App Academy group project.
                    <br />
                    <span className="about-description">Goodreads clone.</span>
                    <br />
                    Technologies used: PUG / Javascript / Express
                  </p>
                </div>
                <a
                  className="main-squeeze"
                  href="https://github.com/riousenkai/awesome-anime"
                  target="_blank"
                >
                  <img
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzJlY2M3MSI+PHBhdGggZD0iTTYxLjIwMTA0LDE2MS4xMTU4NGMyLjQ0NTg0LC0xLjA1MjY0IDQuMTU4OTYsLTMuNDg0NzIgNC4xNTg5NiwtNi4zMTU4NHYtMTguNTc2YzAsLTAuNjc3NjggMC4wNTUwNCwtMS4zODI4OCAwLjE0MTA0LC0yLjA5ODRjLTAuMDQ4MTYsMC4wMTM3NiAtMC4wOTI4OCwwLjAyNDA4IC0wLjE0MTA0LDAuMDM0NGMwLDAgLTEwLjMyLDAgLTEyLjM4NCwwYy01LjE2LDAgLTkuNjMyLC0yLjA2NCAtMTEuNjk2LC02LjE5MmMtMi40MDgsLTQuNDcyIC0zLjQ0LC0xMi4wNCAtOS42MzIsLTE2LjE2OGMtMS4wMzIsLTAuNjg4IC0wLjM0NCwtMS43MiAxLjcyLC0xLjcyYzIuMDY0LDAuMzQ0IDYuNTM2LDMuMDk2IDkuMjg4LDYuODhjMy4wOTYsMy43ODQgNi4xOTIsNi44OCAxMS42OTYsNi44OGM4LjU1NTI4LDAgMTMuMTQwOCwtMC40MyAxNS44OTk2OCwtMS45MDkyYzMuMjEyOTYsLTQuNzc4MTYgNy42NjA4OCwtOC40MTA4IDEyLjMwODMyLC04LjQxMDh2LTAuMDg2Yy0xOS40OTc5MiwtMC42MjYwOCAtMzEuOTU0MTYsLTcuMTA3MDQgLTM3Ljc1NCwtMTcuMTE0Yy0xMi42MDc2LDAuMTQ0NDggLTIzLjU4NDY0LDEuMzkzMiAtMjkuODQ4ODgsMi40MzIwOGMtMC4xOTk1MiwtMS4xMjQ4OCAtMC4zNzE1MiwtMi4yNTY2NCAtMC41MTk0NCwtMy4zOTUyOGM2LjE4MTY4LC0xLjAxODI0IDE2LjY1OTkyLC0yLjIyNTY4IDI4LjcwNjgsLTIuNDU2MTZjLTAuMzg1MjgsLTAuOTQ5NDQgLTAuNzE4OTYsLTEuOTIyOTYgLTEuMDAxMDQsLTIuOTIwNTZjLTEyLjA3Nzg0LC0wLjYxMjMyIC0yMi41MDEwNCwtMC4xMzQxNiAtMjguMTYzMjgsMC4zMzM2OGMtMC4wNjg4LC0xLjE0MjA4IC0wLjE2MTY4LC0yLjI4MDcyIC0wLjE3NTQ0LC0zLjQzNjU2YzUuNjcyNTYsLTAuNDY0NCAxNS44MTM2OCwtMC45Mjg4IDI3LjU4MTkyLC0wLjM4MTg0Yy0wLjI3MTc2LC0xLjcyIC0wLjQ0NzIsLTMuNDc3ODQgLTAuNDQ3MiwtNS4zMDc5MmMwLC01Ljg0OCAyLjA2NCwtMTIuMDQgNS44NDgsLTE3LjJjLTEuNzIsLTUuODQ4IC00LjEyOCwtMTguMjMyIDAuNjg4LC0yMi43MDRjOS4yODgsMCAxNS44MjQsNC40NzIgMTguOTIsNy4yMjRjNS44NDQ1NiwtMi40MTE0NCAxMi4zODA1NiwtMy43ODc0NCAxOS42MDQ1NiwtMy43ODc0NGM3LjIyNCwwIDEzLjc2LDEuMzc2IDE5LjI2NCwzLjc4NGMzLjA5NiwtMi43NTIgOS42MzIsLTcuMjI0IDE4LjkyLC03LjIyNGM1LjE2LDQuODE2IDIuNDA4LDE3LjIgMC42ODgsMjIuNzA0YzMuNzg0LDUuMTYgNS44NDgsMTEuMDA4IDUuNTA0LDE3LjJjMCwxLjY2NDk2IC0wLjE1NDgsMy4yNzE0NCAtMC4zNzg0LDQuODQ2OTZjMTIuMDM2NTYsLTAuNTkxNjggMjIuNDUyODgsLTAuMTE2OTYgMjguMjIxNzYsMC4zNTA4OGMtMC4wMDY4OCwxLjE1OTI4IC0wLjExMzUyLDIuMjkxMDQgLTAuMTc1NDQsMy40MzY1NmMtNS43NDgyNCwtMC40NzQ3MiAtMTYuNDI2LC0wLjk2MzIgLTI4Ljc1NDk2LC0wLjMwNjE2Yy0wLjMwNjE2LDEuMTU1ODQgLTAuNjc3NjgsMi4yODA3MiAtMS4xMTgsMy4zNzEyYzEyLjE5ODI0LDAuMTU4MjQgMjIuOTI3NiwxLjMzODE2IDI5LjQwNTEyLDIuMzcwMTZjLTAuMTQ3OTIsMS4xNDIwOCAtMC4zMTk5MiwyLjI3Mzg0IC0wLjUxOTQ0LDMuMzk1MjhjLTYuNTc3MjgsLTEuMDUyNjQgLTE3Ljc4ODI0LC0yLjI4NDE2IC0zMC41NDM3NiwtMi4zNDYwOGMtNS43Mjc2LDkuOTAwMzIgLTE3Ljk1NjgsMTYuMzU3MiAtMzcuMDcyODgsMTcuMTEwNTZ2MC4xMDY2NGM4Ljk0NCwwIDE3LjIsMTMuNDE2IDE3LjIsMjIuNzA0djE4LjU3NmMwLDIuODMxMTIgMS43MTMxMiw1LjI2MzIgNC4xNTg5Niw2LjMxNTg0YzMxLjUxMzg0LC0xMC40MzAwOCA1NC4zMjEwNCwtNDAuMTUxNjggNTQuMzIxMDQsLTc1LjExNTg0YzAsLTQzLjYyNjA4IC0zNS40OTA0OCwtNzkuMTIgLTc5LjEyLC03OS4xMmMtNDMuNjI5NTIsMCAtNzkuMTIsMzUuNDkzOTIgLTc5LjEyLDc5LjEyYzAsMzQuOTY0MTYgMjIuODA3Miw2NC42ODU3NiA1NC4zMjEwNCw3NS4xMTU4NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                    className="github.about"
                  />
                </a>
              </a>
              <a
                href="https://gundam-hunt.herokuapp.com/"
                target="_blank"
                className="activity-card"
              >
                <img
                  alt="Missing Image"
                  className="activity-img about gundam"
                  src={image}
                />
                <div className="activity-card-text about">
                  <p className="activity-title">Gundam Hunt</p>
                  <p className="activity-description">
                    First App Academy solo project.
                    <br />
                    <span className="about-description">Product Hunt clone.</span>
                    <br />
                    Technologies used: React / Javascript / Express
                  </p>
                </div>
                <a
                  className="main-squeeze"
                  href="https://github.com/riousenkai/gundam-hunt"
                  target="_blank"
                >
                  <img
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzJlY2M3MSI+PHBhdGggZD0iTTYxLjIwMTA0LDE2MS4xMTU4NGMyLjQ0NTg0LC0xLjA1MjY0IDQuMTU4OTYsLTMuNDg0NzIgNC4xNTg5NiwtNi4zMTU4NHYtMTguNTc2YzAsLTAuNjc3NjggMC4wNTUwNCwtMS4zODI4OCAwLjE0MTA0LC0yLjA5ODRjLTAuMDQ4MTYsMC4wMTM3NiAtMC4wOTI4OCwwLjAyNDA4IC0wLjE0MTA0LDAuMDM0NGMwLDAgLTEwLjMyLDAgLTEyLjM4NCwwYy01LjE2LDAgLTkuNjMyLC0yLjA2NCAtMTEuNjk2LC02LjE5MmMtMi40MDgsLTQuNDcyIC0zLjQ0LC0xMi4wNCAtOS42MzIsLTE2LjE2OGMtMS4wMzIsLTAuNjg4IC0wLjM0NCwtMS43MiAxLjcyLC0xLjcyYzIuMDY0LDAuMzQ0IDYuNTM2LDMuMDk2IDkuMjg4LDYuODhjMy4wOTYsMy43ODQgNi4xOTIsNi44OCAxMS42OTYsNi44OGM4LjU1NTI4LDAgMTMuMTQwOCwtMC40MyAxNS44OTk2OCwtMS45MDkyYzMuMjEyOTYsLTQuNzc4MTYgNy42NjA4OCwtOC40MTA4IDEyLjMwODMyLC04LjQxMDh2LTAuMDg2Yy0xOS40OTc5MiwtMC42MjYwOCAtMzEuOTU0MTYsLTcuMTA3MDQgLTM3Ljc1NCwtMTcuMTE0Yy0xMi42MDc2LDAuMTQ0NDggLTIzLjU4NDY0LDEuMzkzMiAtMjkuODQ4ODgsMi40MzIwOGMtMC4xOTk1MiwtMS4xMjQ4OCAtMC4zNzE1MiwtMi4yNTY2NCAtMC41MTk0NCwtMy4zOTUyOGM2LjE4MTY4LC0xLjAxODI0IDE2LjY1OTkyLC0yLjIyNTY4IDI4LjcwNjgsLTIuNDU2MTZjLTAuMzg1MjgsLTAuOTQ5NDQgLTAuNzE4OTYsLTEuOTIyOTYgLTEuMDAxMDQsLTIuOTIwNTZjLTEyLjA3Nzg0LC0wLjYxMjMyIC0yMi41MDEwNCwtMC4xMzQxNiAtMjguMTYzMjgsMC4zMzM2OGMtMC4wNjg4LC0xLjE0MjA4IC0wLjE2MTY4LC0yLjI4MDcyIC0wLjE3NTQ0LC0zLjQzNjU2YzUuNjcyNTYsLTAuNDY0NCAxNS44MTM2OCwtMC45Mjg4IDI3LjU4MTkyLC0wLjM4MTg0Yy0wLjI3MTc2LC0xLjcyIC0wLjQ0NzIsLTMuNDc3ODQgLTAuNDQ3MiwtNS4zMDc5MmMwLC01Ljg0OCAyLjA2NCwtMTIuMDQgNS44NDgsLTE3LjJjLTEuNzIsLTUuODQ4IC00LjEyOCwtMTguMjMyIDAuNjg4LC0yMi43MDRjOS4yODgsMCAxNS44MjQsNC40NzIgMTguOTIsNy4yMjRjNS44NDQ1NiwtMi40MTE0NCAxMi4zODA1NiwtMy43ODc0NCAxOS42MDQ1NiwtMy43ODc0NGM3LjIyNCwwIDEzLjc2LDEuMzc2IDE5LjI2NCwzLjc4NGMzLjA5NiwtMi43NTIgOS42MzIsLTcuMjI0IDE4LjkyLC03LjIyNGM1LjE2LDQuODE2IDIuNDA4LDE3LjIgMC42ODgsMjIuNzA0YzMuNzg0LDUuMTYgNS44NDgsMTEuMDA4IDUuNTA0LDE3LjJjMCwxLjY2NDk2IC0wLjE1NDgsMy4yNzE0NCAtMC4zNzg0LDQuODQ2OTZjMTIuMDM2NTYsLTAuNTkxNjggMjIuNDUyODgsLTAuMTE2OTYgMjguMjIxNzYsMC4zNTA4OGMtMC4wMDY4OCwxLjE1OTI4IC0wLjExMzUyLDIuMjkxMDQgLTAuMTc1NDQsMy40MzY1NmMtNS43NDgyNCwtMC40NzQ3MiAtMTYuNDI2LC0wLjk2MzIgLTI4Ljc1NDk2LC0wLjMwNjE2Yy0wLjMwNjE2LDEuMTU1ODQgLTAuNjc3NjgsMi4yODA3MiAtMS4xMTgsMy4zNzEyYzEyLjE5ODI0LDAuMTU4MjQgMjIuOTI3NiwxLjMzODE2IDI5LjQwNTEyLDIuMzcwMTZjLTAuMTQ3OTIsMS4xNDIwOCAtMC4zMTk5MiwyLjI3Mzg0IC0wLjUxOTQ0LDMuMzk1MjhjLTYuNTc3MjgsLTEuMDUyNjQgLTE3Ljc4ODI0LC0yLjI4NDE2IC0zMC41NDM3NiwtMi4zNDYwOGMtNS43Mjc2LDkuOTAwMzIgLTE3Ljk1NjgsMTYuMzU3MiAtMzcuMDcyODgsMTcuMTEwNTZ2MC4xMDY2NGM4Ljk0NCwwIDE3LjIsMTMuNDE2IDE3LjIsMjIuNzA0djE4LjU3NmMwLDIuODMxMTIgMS43MTMxMiw1LjI2MzIgNC4xNTg5Niw2LjMxNTg0YzMxLjUxMzg0LC0xMC40MzAwOCA1NC4zMjEwNCwtNDAuMTUxNjggNTQuMzIxMDQsLTc1LjExNTg0YzAsLTQzLjYyNjA4IC0zNS40OTA0OCwtNzkuMTIgLTc5LjEyLC03OS4xMmMtNDMuNjI5NTIsMCAtNzkuMTIsMzUuNDkzOTIgLTc5LjEyLDc5LjEyYzAsMzQuOTY0MTYgMjIuODA3Miw2NC42ODU3NiA1NC4zMjEwNCw3NS4xMTU4NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                    className="github.about"
                  />
                </a>
              </a>
            </div>
            <div className="profile-submitted">Profile Links</div>
            <div className="profile-activity">
              <a href="https://github.com/riousenkai" className="activity-card">
                <i
                  alt="Missing Image"
                  className="activity-img fab fa-linkedin"
                />
                <div className="activity-card-text">
                  <p className="activity-title"></p>
                  <p className="activity-description"></p>
                </div>
              </a>
            </div>
          </div>
          <div className="profile-bottom-right">
            <div className="profile-comments">
              <img
                className="image"
                src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/603820afd31232aab368ea6f_New%20Red-logo-emblem.png"
              />
              <p className="user-joined">App Academy Student</p>
            </div>
            {/* <p className="profile-comments-title">
              Comments
            </p>
            <div className="profile-comment-container">

            </div> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default About;
