import avatar from '../images/avatar.png';
import './Entete.scss';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar"> <a>Thomas Lorenzo</a> <img src={avatar} className="IMG" alt="Thomas Lorenzo" /></div>
    </header>
  );
  
}