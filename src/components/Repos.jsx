import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { useUser } from "../contexts/UserContext";

export default function Repos() {
    const userData = useUser();
    const repos = userData && userData.repo;

    const LinkIcon = () => (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className='me-2'
        >
            <path d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path>
        </svg>
    );

    const Repo = ({ repo }) => (
        <Card className="my-5">
            <Card.Body>
                <h4 className="fw-bold">{repo.name}</h4>

                <p>{repo.description}</p>

                <div className="mb-2">
                    <p className="fw-bold d-inline me-1">Made with: </p>
                    <p className="d-inline">{repo.language}</p>
                </div>

                <div className='d-flex'>
                    <div className='me-4'>
                        <FontAwesomeIcon icon={faStar} size="1x" className="me-2" />
                        {repo.stargazers_count}
                    </div>
                    <div className='d-flex align-items-center'>
                        <LinkIcon />
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='text-white text-decoration-none'>View repository</a>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );

    return (
        <div className="text-start px-3">
            <h3 className="fw-bold">Repositories</h3>
            {repos.map((repo) => (
                <Repo repo={repo} key={repo.id}/>
            ))}
        </div>
    );
}
