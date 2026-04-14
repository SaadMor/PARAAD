import type { LanguageItem } from '../data/resume';
import SectionTitle from './SectionTitle';

interface LanguagesSectionProps {
  heading: string;
  items: LanguageItem[];
}

const LanguagesSection = ({ heading, items }: LanguagesSectionProps) => {
  return (
    <section aria-labelledby="languages-heading">
      <SectionTitle id="languages-heading" title={heading} />
      <ul className="section-list">
        {items.map((language) => (
          <li key={language.name}>
            <h3>{language.name}</h3>
            <p>
              {language.level} ({language.rating}/5)
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LanguagesSection;
