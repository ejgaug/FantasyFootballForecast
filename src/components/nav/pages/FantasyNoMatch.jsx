import { Link } from "react-router-dom";

export default function FantasyNoMatch(props) {

    return (
        <div style={{color: '#F2F2F2'}}>
            <h2>That's a 404.</h2>
            <p>Uh oh, looks like you've taken a wrong turn!</p>
            <p>
                <Link to="/">Back to safety.</Link>
            </p>
        </div>
    );
}
