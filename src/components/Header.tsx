import { FiExternalLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import type { Profile } from '../data/resume';

interface HeaderProps {
  profile: Profile;
}

const formatContactHref = (value: string) => {
  if (value.includes('@')) {
    return `mailto:${value}`;
  }

  if (/\d/.test(value)) {
    const cleaned = value.replace(/[^\d+]/g, '');
    return `tel:${cleaned}`;
  }

  if (/^https?:\/\//.test(value)) {
    return value;
  }

  return `https://${value}`;
};

const Header = ({ profile }: HeaderProps) => {
  const email = profile.contacts.find((contact) => contact.includes('@'));
  const phone = profile.contacts.find((contact) => /\d/.test(contact));
  const otherContacts = profile.contacts.filter((contact) => contact !== email && contact !== phone);

  return (
    <header className="resume-header">
      <h1>{profile.name}</h1>
      <p className="subtitle">{profile.title}</p>
      <ul className="contact-line" aria-label="Contact details">
        {phone ? (
          <li>
            <a className="link-like icon-inline" href={formatContactHref(phone)}>
              <FiPhone className="inline-icon" aria-hidden="true" focusable="false" />
              <span>{phone}</span>
            </a>
          </li>
        ) : null}
        {email ? (
          <li>
            <a className="link-like icon-inline" href={formatContactHref(email)}>
              <FiMail className="inline-icon" aria-hidden="true" focusable="false" />
              <span>{email}</span>
            </a>
          </li>
        ) : null}
        <li className="icon-inline">
          <FiMapPin className="inline-icon" aria-hidden="true" focusable="false" />
          <span>{profile.location}</span>
        </li>
        {otherContacts.map((contact) => (
          <li key={contact}>
            <a className="link-like icon-inline" href={formatContactHref(contact)} rel="noreferrer" target="_blank">
              <FiExternalLink className="inline-icon" aria-hidden="true" focusable="false" />
              <span>{contact}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
