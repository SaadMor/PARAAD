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
      <ul className="section-list">
        {items.map((item) => (
          <li key={`${item.role}-${item.company}`}>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <p className="meta">{item.period}</p>
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
