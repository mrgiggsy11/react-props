
import './App.css';
import Profile from './Profile/Profile'
import {profileDetails} from './Profile/Profile'
import Profil_photo from './Assets/man.svg'


function App() {
  return (
    <div className="App" >
      <Profile fullName={profileDetails.fullName} bio={profileDetails.bio} profession={profileDetails.profession} >
        <img src={Profil_photo} className="card-title" width="150rem" height="150rem"/>
      </Profile>
    </div>
  );
}

export default App;
