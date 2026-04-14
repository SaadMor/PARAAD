import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Header from './components/Header';
import LanguagesSection from './components/LanguagesSection';
import SectionTitle from './components/SectionTitle';
import SkillsSection from './components/SkillsSection';
import { resumeData } from './data/resume';

const App = () => {
  const {
    profile,
    summary,
    experienceHeading,
    experience,
    languagesHeading,
    languages,
    educationHeading,
    education,
    skillsHeading,
    skills,
  } = resumeData;

  return (
    <main className="resume-page">
      <Header profile={profile} />

      <div className="resume-grid">
        <div>
          <section aria-labelledby="summary-heading">
            <SectionTitle id="summary-heading" title={summary.heading} />
            <p>{summary.content}</p>
          </section>

          <ExperienceSection heading={experienceHeading} items={experience} />
          <LanguagesSection heading={languagesHeading} items={languages} />
        </div>

        <div>
          <EducationSection heading={educationHeading} items={education} />
          <SkillsSection heading={skillsHeading} items={skills} />
        </div>
      </div>
    </main>
  );
};

export default App;
