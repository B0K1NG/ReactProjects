import { useParams } from "react-router-dom";
export default function ProfilePage() {
    const params = useParams();
    const profileId = params.profileId;
    return (
        <div>
            <h1>Profile Page {profileId ? profileId : 'No Profile Found'}</h1>
            <p>This is the profile page.</p>
        </div>
    );
}