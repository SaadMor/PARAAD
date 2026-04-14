import { FiCalendar, FiMapPin } from 'react-icons/fi';
import type { EducationItem } from '../data/resume';
import SectionTitle from './SectionTitle';

interface EducationSectionProps {
  heading: string;
  items: EducationItem[];
}

const EducationSection = ({ heading, items }: EducationSectionProps) => {
  return (
    <section aria-labelledby="education-heading">
      <SectionTitle id="education-heading" title={heading} />
      <ul className="section-list">
        {items.map((item) => (
          <li key={`${item.degree}-${item.institution}`}>
            <h3>{item.degree}</h3>
            <p className="meta meta-inline">
              <span className="icon-inline">
                <FiMapPin className="inline-icon" aria-hidden="true" focusable="false" />
                <a className="link-like" href={item.institutionUrl} rel="noreferrer" target="_blank">
                  {item.institution}
                </a>
              </span>
              <span className="icon-inline">
                <FiCalendar className="inline-icon" aria-hidden="true" focusable="false" />
                <span>{item.period}</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
