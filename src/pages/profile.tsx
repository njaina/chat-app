import { fetchUserData } from '../api/profile/getUserProfile';
import { updateProfile } from '../api/profile/editUserProfile';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/features/Sidebar';
import Style from '../styles/Primary.module.css';
import EditProfileForm from '../Components/logedIn/profile/EditProfile';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
}

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        const profileData = await fetchUserData();
        setUserProfile(profileData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfileData();
  }, []);

  const handleProfileSubmit = async (data: UserProfile) => {
    try {
      await updateProfile(data);
      console.log('Profil mis à jour avec succès');
      setShowEditForm(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil', error);
    }
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  return (
    <main className={Style.FlexContainer}>
      <Sidebar onEditClick={handleEditClick} />
      <div className={Style.props}>
        {userProfile && (
          <div>
            <h2>Nom: {userProfile.name}</h2>
            <p>Email: {userProfile.email}</p>
            <p>Bio: {userProfile.bio}</p>
          </div>
        )}
        {!showEditForm && <h1>Contents</h1>}
        {showEditForm && (
          <EditProfileForm defaultValues={userProfile} onSubmit={handleProfileSubmit} />
        )}
      </div>
    </main>
  );
};

export default Profile;
