import type { LanguageItem } from '../data/resume';
import SectionTitle from './SectionTitle';

interface LanguagesSectionProps {
  heading: string;
  items: LanguageItem[];
}

const DOT_COUNT = 5;

const LanguagesSection = ({ heading, items }: LanguagesSectionProps) => {
  return (
    <section aria-labelledby="languages-heading">
      <SectionTitle id="languages-heading" title={heading} />
      <ul className="section-list">
        {items.map((language) => (
          <li className="language-row" key={language.name}>
            <div>
              <h3>{language.name}</h3>
              <p>{language.level}</p>
            </div>
            <div aria-label={`${language.rating} out of ${DOT_COUNT}`} className="proficiency-dots" role="img">
              {Array.from({ length: DOT_COUNT }).map((_, index) => {
                const filled = index < language.rating;

                return (
                  <span
                    aria-hidden="true"
                    className={`proficiency-dot${filled ? ' filled' : ''}`}
                    key={`${language.name}-dot-${index + 1}`}
                  />
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LanguagesSection;
