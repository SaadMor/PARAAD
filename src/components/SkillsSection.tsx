import type { SkillGroup } from '../data/resume';
import SectionTitle from './SectionTitle';

interface SkillsSectionProps {
  heading: string;
  items: SkillGroup[];
}

const SkillsSection = ({ heading, items }: SkillsSectionProps) => {
  return (
    <section aria-labelledby="skills-heading">
      <SectionTitle id="skills-heading" title={heading} />
      <ul className="section-list skills-list">
        {items.map((group) => (
          <li key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
