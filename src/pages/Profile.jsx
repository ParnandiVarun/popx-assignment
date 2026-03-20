import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h3 className="profile-title">Account Settings</h3>

        <div className="profile-header">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="profile-img"
          />

          <div>
            <h4 className="profile-name">{user?.fullName || "User Name"}</h4>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>

        <p className="profile-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
