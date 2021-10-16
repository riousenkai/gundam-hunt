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
                    <span className="about-description">
                      Product Hunt clone.
                    </span>
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
              <a
                href="https://www.linkedin.com/in/john-elijah-revan-fajardo-33a189a3/"
                className="activity-card"
              >
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI4OEQxIiBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDVWMzd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEyIDE5SDE3VjM2SDEyek0xNC40ODUgMTdoLS4wMjhDMTIuOTY1IDE3IDEyIDE1Ljg4OCAxMiAxNC40OTkgMTIgMTMuMDggMTIuOTk1IDEyIDE0LjUxNCAxMmMxLjUyMSAwIDIuNDU4IDEuMDggMi40ODYgMi40OTlDMTcgMTUuODg3IDE2LjAzNSAxNyAxNC40ODUgMTd6TTM2IDM2aC01di05LjA5OWMwLTIuMTk4LTEuMjI1LTMuNjk4LTMuMTkyLTMuNjk4LTEuNTAxIDAtMi4zMTMgMS4wMTItMi43MDcgMS45OUMyNC45NTcgMjUuNTQzIDI1IDI2LjUxMSAyNSAyN3Y5aC01VjE5aDV2Mi42MTZDMjUuNzIxIDIwLjUgMjYuODUgMTkgMjkuNzM4IDE5YzMuNTc4IDAgNi4yNjEgMi4yNSA2LjI2MSA3LjI3NEwzNiAzNiAzNiAzNnoiPjwvcGF0aD48L3N2Zz4="
                />
                <div className="activity-card-text about">
                  <p className="activity-title">LinkedIn</p>
                </div>
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2VjZjBmMSI+PHBhdGggZD0iTTg2LDYuODhjLTQzLjY0OTAxLDAgLTc5LjEyLDM1LjQ3MDk5IC03OS4xMiw3OS4xMmMwLDQzLjY0OTAxIDM1LjQ3MDk5LDc5LjEyIDc5LjEyLDc5LjEyYzQzLjY0OTAxLDAgNzkuMTIsLTM1LjQ3MDk5IDc5LjEyLC03OS4xMmMwLC00My42NDkwMSAtMzUuNDcwOTksLTc5LjEyIC03OS4xMiwtNzkuMTJ6TTg2LDEzLjc2YzM5LjkyOTIzLDAgNzIuMjQsMzIuMzEwNzcgNzIuMjQsNzIuMjRjMCwwLjI0NTUyIC0wLjAxNzcyLDAuNDg3NDEgLTAuMDIwMTUsMC43MzIzNWMtMi4yMDAyNywtMC4yMDMwOSAtNC43NDI1LC0wLjM5NiAtNy45NzUxNiwtMC41MTA2M2MtNC41NzA3OSwtMC4xNjIwOCAtMTAuMzMyMTIsLTAuMTE1MTIgLTE2Ljg2NDA2LDAuMjA4MjhjMC4yNDIyMiwtMS42ODY4IDAuNDEyLC0zLjM5NzQyIDAuNDE2NTYsLTUuMTUzMjhjMC4zMzMxLC02LjQ0MTgyIC0xLjgzMDExLC0xMi40NjgyNCAtNS4zNDgxMiwtMTcuNzkxMjVjMC44NDk5MiwtMi45MzY4MiAxLjg0Njk1LC02LjY3MzEyIDIuMDk2MjUsLTEwLjkxMTI1YzAuMjg0MTQsLTQuODMwNzIgLTAuMTMyODUsLTEwLjE4NzM1IC00LjAxMTEsLTEzLjgwNzAzbC0wLjk5NDM3LC0wLjkyNzE5aC0xLjM1NzE5Yy05LjIyOTc2LDAgLTE1LjU0NzM4LDMuODYzODQgLTE5LjQxMDQ3LDYuOTI3MDNjLTUuNTc3OTcsLTIuMTU5MTIgLTExLjg1MDE1LC0zLjQ4NzAzIC0xOC43NzIxOSwtMy40ODcwM2MtNi45NjEzLDAgLTEzLjI5Mzc5LDEuMzQ2NDcgLTE5LjEwMTQsMy41MDA0N2MtMy44NjA5LC0zLjA2NDY1IC0xMC4xODQwNSwtNi45NDA0NyAtMTkuNDIzOTEsLTYuOTQwNDdoLTEuMzUwNDdsLTAuOTk0MzcsMC45MjA0N2MtMy43Nzc3NiwzLjUwNzkyIC00LjEyNTgxLDguNzE3NTggLTMuODkwMTYsMTMuNTI0ODVjMC4yMDc4MSw0LjIzOTA3IDEuMTQ3MDcsOC4wOTQwNiAxLjk4MjAzLDExLjE3MzI4Yy0zLjU3NzQ4LDUuNDI2OTIgLTUuNzI0MzcsMTEuNjA5MTUgLTUuNzI0MzcsMTcuNzI0MDZjMCwxLjc2IDAuMTYzNjcsMy40NzU5OSAwLjQwMzEyLDUuMTY2NzJjLTYuMjExODIsLTAuMjg4MTEgLTExLjc0OTI1LC0wLjM0MzY0IC0xNi4xNDUxNiwtMC4xODgxMmMtMy4yMzI1OCwwLjExNDM2IC01Ljc3NDk5LDAuMzA1NiAtNy45NzUxNiwwLjUxMDYyYy0wLjAwMjA1LC0wLjIyNDc3IC0wLjAyMDE2LC0wLjQ0NjYyIC0wLjAyMDE2LC0wLjY3MTg3YzAsLTM5LjkyOTIzIDMyLjMxMDc3LC03Mi4yNCA3Mi4yNCwtNzIuMjR6TTQ5LjUyMzksNDUuMTcwMTVjNi45NDA0OSwwLjY1NzY3IDEyLjE2MjE2LDMuNzU2ODcgMTQuNTc5NjksNS45MDU3OGwxLjYxMjUsMS40MjQzOGwxLjk4ODc1LC0wLjgxMjk3YzUuNDQwMTksLTIuMjQwMDggMTEuNTA3OTgsLTMuNTI3MzUgMTguMjk1MTUsLTMuNTI3MzVjNi43ODcxOCwwIDEyLjg1NjYzLDEuMjkzNyAxNy44ODUzMSwzLjQ5Mzc1bDIuMDE1NjIsMC44ODY4OGwxLjY0NjEsLTEuNDY0NjljMi40MTgzNiwtMi4xNDk2NSA3LjY0ODg4LC01LjI0OTc5IDE0LjU5MzEyLC01LjkwNTc4YzAuOTIzMjksMS41MzA3NCAxLjcyNTYsMy43MDc2NiAxLjUzMTg4LDcuMDAwOTRjLTAuMjMxODYsMy45NDEyOCAtMS4yODYxMSw4LjIzNDEzIC0yLjA4MjgxLDEwLjc4MzU5bC0wLjUxNzM1LDEuNjU5NTNsMS4wMjc5NywxLjQwNDIyYzMuNDAzNzksNC42NDE1NCA1LjEzOTI5LDkuNjY0NzkgNC44NDQyMiwxNC45NzYxbC0wLjAwNjcyLDAuMDk0MDZ2MC4wOTQwNmMwLDguNTg0MzcgLTMuMDkxMjIsMTUuNDU0OTkgLTkuNjc1LDIwLjU0NTk0Yy02LjU4MzYyLDUuMDkwOTcgLTE2Ljk3NzE4LDguMzUxNCAtMzEuNjA1LDguMzUxNGMtMTQuNjI3ODIsMCAtMjUuMDI3OTQsLTMuMjYwNDYgLTMxLjYxMTcyLC04LjM1MTRjLTYuNTgzNzksLTUuMDkwOTUgLTkuNjY4MjgsLTExLjk2MTU3IC05LjY2ODI4LC0yMC41NDU5NGMwLC01LjAzODU5IDEuODE5NDcsLTEwLjU4MTQ3IDUuMTgwMTUsLTE1LjE2NDIybDEuMDA3ODEsLTEuMzcwNjJsLTAuNDgzNzUsLTEuNjMyNjZjLTAuNzk3MTQsLTIuNzEwMjkgLTEuNzc0MjUsLTcuMTAxMDQgLTEuOTY4NiwtMTEuMDY1NzhjLTAuMTYxNjUsLTMuMjk3NjYgMC42MTg4MywtNS4zODIgMS40MTA5NCwtNi43NzkyMnpNMzAuNTYzNTksODkuNTEzOWMyLjQzMTAyLDAuMDMxMDUgNS4yMTc0MywwLjE2MjI3IDguMDA4NzUsMC4zMDIzNWMwLjI2NjcsMS4wNzI1OCAwLjU3MDgsMi4xMjc3MiAwLjk0MDYyLDMuMTU3ODFjLTExLjM3NzMsMC4yMzk5MyAtMTkuODg4NjksMS4zODQwMiAtMjUuMTM0ODQsMi4zNjVjLTAuMjIxODEsLTEuNzIxMiAtMC4zOTg0OSwtMy40NTY1OSAtMC40OTcxOSwtNS4yMTM3NWMzLjg3NzA1LC0wLjM2NzkzIDkuMzQyNDksLTAuNzA1MTUgMTYuNjgyNjYsLTAuNjExNDF6TTE0MS40MzY0LDg5LjU2NzY1YzcuMzM1MDksLTAuMDkzMTQgMTIuNzk4NSwwLjI0NDQgMTYuNjc1OTQsMC42MTE0MWMtMC4wOTg1OCwxLjczMTk4IC0wLjI3MjI1LDMuNDQyODIgLTAuNDkwNDcsNS4xMzk4NGMtNS40MzM2MiwtMC45OTY4MiAtMTQuMTc0OTksLTIuMTQwNyAtMjUuODQ3MDMsLTIuMzI0NjljMC4zNjIyNSwtMS4wMDk3MyAwLjY2Mzg3LC0yLjA0Njc0IDAuOTI3MTksLTMuMDk3MzVjMy4wNzkyMSwtMC4xNjUwNSA2LjA4MzI3LC0wLjI5NTU1IDguNzM0MzcsLTAuMzI5MjJ6TTQwLjk3NzY1LDk2LjM4NzE5YzIuMDUyNzksNC4xMTM1NCA0Ljk4NTk2LDcuNzg2NCA4Ljg2MjAzLDEwLjc4MzZjNS4yOTk0Nyw0LjA5Nzg0IDEyLjE4OTEsNi45NjA5OCAyMC41OTk2OSw4LjQ5MjVjLTEuMTAwMzMsMS4xMzA1NiAtMi4xMDEwOSwyLjM3MjA1IC0yLjk4OTg0LDMuNjgxODdsLTAuMjA4MjgsLTAuMTgxNGMwLjAxODkyLC0wLjAyMTY3IC0xLjcxMDExLDAuODQzNjcgLTQuMjkzMjgsMS4wNzVjLTIuNTgzMTcsMC4yMzEzNCAtNS43Njk2MSwwLjE2MTI1IC04LjU5MzI4LDAuMTYxMjVjLTQuMjE0LDAgLTYuMDcwMTIsLTEuOTkxMDQgLTkuMDM2NzIsLTUuNjE2ODdjLTEuNjQyNzUsLTIuMjE0MDggLTMuNjQ1NDYsLTQuMDA3MTEgLTUuNTksLTUuMzY4MjhjLTEuOTkxMSwtMS4zOTM3NyAtMy42ODk2NCwtMi4zNzc0OSAtNS43OTE1NiwtMi43Mjc4MWwtMC4yODIxOSwtMC4wNDcwM2gtMC4yODg5MWMtMS42MDUzMywwIC0zLjE1ODczLDAuMTE2MjQgLTQuNjA5MDYsMS43NzM3NWMtMC43MjUxNywwLjgyODc2IC0xLjIyNDk4LDIuMzYzMDYgLTAuOTAwMzEsMy42NjE3MmMwLjMyNDY2LDEuMjk4NjYgMS4xNDYyMSwyLjA5NjY5IDEuODgxMjUsMi41ODY3MmM0LjcwMTUzLDMuMTM0MzUgNS41MzI0Myw5LjMzNzgxIDguNDc5MDYsMTQuODU1MTZjMi43NTE3NCw1LjQ4MzEgOC42OTA0Myw4LjA4MjY1IDE0Ljc2MTEsOC4wODI2NWg4Ljk0MjY1djE2LjUyMTRjLTI0LjE5MDczLC04LjUzODc2IC00Mi40MzM1LC0yOS41Nzc1NCAtNDcuMDE3ODEsLTU1LjM4MjY1YzUuMjY2MywtMC45OTE5MiAxNC4wODUxMSwtMi4xODQ0NiAyNi4wNzU0NywtMi4zNTE1NnpNMTMwLjMxNjg3LDk2LjQxNDA2YzEyLjI1NTc4LDAuMTA0OTEgMjEuMzIxOTQsMS4yOTU5MSAyNi43ODc2NiwyLjMwNDUzYy00LjU3ODIxLDI1LjgxNDU4IC0yMi44MjczMiw0Ni44NjE3NiAtNDcuMDI0NTMsNTUuNDAyODF2LTE3Ljg5ODc1YzAsLTUuNDUwOTEgLTEuNzkwMDMsLTExLjQ2MTczIC00LjkwNDY5LC0xNi40NzQzN2MtMC45NDU2NSwtMS41MjE5IC0yLjA1ODA2LC0yLjk2MTE5IC0zLjI5ODkxLC00LjI1Mjk3YzcuOTY0MzUsLTEuNTczMzggMTQuNTA2OTMsLTQuMzg3MzcgMTkuNTk4NiwtOC4zMjQ1M2MzLjg2NzY3LC0yLjk5MDcgNi43OTQzLC02LjY1MjUyIDguODQxODcsLTEwLjc1Njcyek04MS41MjUzMSwxMTcuMzAyNjVoOS42MzQ2OWMyLjc5NjEsMCA1Ljc4MDY2LDIuMjI4NCA4LjE3LDYuMDczNzVjMi4zODkzNCwzLjg0NTM1IDMuODcsOS4wMDkxNiAzLjg3LDEyLjg0NjI1djE5Ljk0Nzk3Yy01LjUxMjkyLDEuMzQ0MzQgLTExLjI3MDE2LDIuMDY5MzcgLTE3LjIsMi4wNjkzN2MtNS45Mjk4NCwwIC0xMS42ODcwOCwtMC43MjUwNCAtMTcuMiwtMi4wNjkzN3YtMTkuOTQ3OTdjMCwtMy43NTIxNSAxLjYwOTMzLC04LjkwMzc2IDQuMTU4OSwtMTIuNzY1NjJjMi41NDk1OCwtMy44NjE4NiA1Ljc3MDMsLTYuMTU0MzggOC41NjY0MSwtNi4xNTQzOHpNNDIuMzQxNTYsMTIxLjM2NzVjMi45NzgyNiwzLjA4OTE1IDYuNTgzOTIsNS45MTI1IDEyLjAxMzEyLDUuOTEyNWMyLjY4MDMzLDAgNi4wMjU4NiwwLjA5NjU3IDkuMjA0NjksLTAuMTg4MTNjMC4wMTEzLC0wLjAwMTAxIDAuMDIyMjksLTAuMDA1NyAwLjAzMzYsLTAuMDA2NzJjLTAuNDE4ODEsMS4yMDQwMSAtMC43MzEyOSwyLjQxNTQ2IC0wLjk5NDM3LDMuNjM0ODVoLTkuNjIxMjVjLTQuMjQyNjcsMCAtNy4yMzk5LC0xLjUzMjc2IC04LjYyMDE2LC00LjI5MzI4bC0wLjAyNjg3LC0wLjA0NzAzbC0wLjAyMDE2LC0wLjA0MDMxYy0wLjU2NTU0LC0xLjA1MDQ4IC0xLjMwNzk0LC0zLjE1MDk0IC0xLjk2ODU5LC00Ljk3MTg3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                <div className="activity-card-text about">
                  <p className="activity-title">Github</p>
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
