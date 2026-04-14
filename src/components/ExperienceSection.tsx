import { FiCalendar, FiMapPin } from 'react-icons/fi';
import type { ExperienceItem } from '../data/resume';
import SectionTitle from './SectionTitle';

interface ExperienceSectionProps {
  heading: string;
  items: ExperienceItem[];
}

const ExperienceSection = ({ heading, items }: ExperienceSectionProps) => {
  return (
    <section aria-labelledby="experience-heading">
      <SectionTitle id="experience-heading" title={heading} />
      <ul className="section-list experience-list">
        {items.map((item) => (
          <li key={`${item.role}-${item.company}`}>
            <h3>{item.role}</h3>
            <p className="meta meta-inline">
              <span className="icon-inline">
                <FiMapPin className="inline-icon" aria-hidden="true" focusable="false" />
                <a className="link-like" href={item.companyUrl} rel="noreferrer" target="_blank">
                  {item.company}
                </a>
              </span>
              <span className="icon-inline">
                <FiCalendar className="inline-icon" aria-hidden="true" focusable="false" />
                <span>{item.period}</span>
              </span>
            </p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
