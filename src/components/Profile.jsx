import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { useUser } from "../contexts/UserContext";

export default function Profile() {
    const { profile } = useUser();

    const GithubIcon = () => (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.25em"
            width="1.25em"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2"
            style={{ color: "white" }}
        >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
        </svg>
    );

    const TwitterIcon = () => (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.25em"
            width="1.25em"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2"
            style={{ color: "white" }}
        >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
    );

    return (
        <Card>
            <Card.Body className="mt-3">
                {/* Profile image */}
                <div className="my-3">
                    <img src={profile.avatar_url} alt="" width="80%" className="rounded-circle" />
                </div>

                {/* Personal detail */}
                <div className="my-3">
                    <div className="d-flex align-items-center justify-content-center">
                        <GithubIcon />
                        <a
                            href={`https://github.com/${profile.login}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                        >
                            <h5 className="m-0 fw-bold">{profile.login}</h5>
                        </a>
                    </div>
                    <div className="my-2">
                        <div>{profile.name}</div>
                    </div>
                    {profile.location && (
                        <div className="d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="mx-2" />
                            <div>{profile.location}</div>
                        </div>
                    )}
                </div>

                {/* Bio */}
                <div className="my-4 lh-1">
                    <p>{profile.bio}</p>
                </div>

                {/* Follow info */}
                <div className="d-flex justify-content-around">
                    <div>
                        <h5 className="m-0 fw-bold">{profile.followers}</h5>
                        <p className="text-uppercase">Followers</p>
                    </div>
                    <div>
                        <h5 className="m-0 fw-bold">{profile.following}</h5>
                        <p className="text-uppercase">Following</p>
                    </div>
                </div>

                {/* Online presense */}
                <div className="d-flex justify-content-evenly my-4">
                    <a
                        href={`https://twitter.com/${profile.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon />
                    </a>

                    <a href={`${profile.blog}`} target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
}
