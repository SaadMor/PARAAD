import type { Profile } from '../data/resume';

interface HeaderProps {
  profile: Profile;
}

const Header = ({ profile }: HeaderProps) => {
  return (
    <header className="resume-header">
      <h1>{profile.name}</h1>
      <p className="subtitle">{profile.title}</p>
      <p className="contact-line">{[...profile.contacts, profile.location].join(' • ')}</p>
    </header>
  );
};

export default Header;
