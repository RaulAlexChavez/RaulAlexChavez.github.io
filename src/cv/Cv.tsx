import React from "react";
import styles from "./Cv.module.css";
import { CvData } from "./cvData";

export type CvVariant = "ats" | "designed";

interface CvProps {
  data: CvData;
  variant: CvVariant;
}

const Section = ({ title, children, className = "" }: {
  title: string;
  children: React.ReactNode;
  className?: string;
}): JSX.Element => (
  <section className={`${styles.section} ${className}`}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const ContactDetails = ({ data }: { data: CvData }): JSX.Element => (
  <ul className={styles.contactList}>
    <li><a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></li>
    <li><a href={`tel:${data.contact.phone.replace(/[^+\d]/g, "")}`}>{data.contact.phone}</a></li>
    <li>{data.contact.location}</li>
  </ul>
);

const ContactLine = ({ data }: { data: CvData }): JSX.Element => (
  <div className={styles.headerContact}>
    <p>
      <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>{" | "}
      <a href={`tel:${data.contact.phone.replace(/[^+\d]/g, "")}`}>{data.contact.phone}</a>{" | "}
      <span>{data.contact.location}</span>
      {data.availability && <>{" | "}<span>{data.availability}</span></>}
    </p>
    <p>
      {data.links.filter((link) => link.url).map((link, index) => (
        <React.Fragment key={link.label}>
          {index > 0 && " | "}
          <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
        </React.Fragment>
      ))}
    </p>
  </div>
);

const SkillGroup = ({ label, items }: { label: string; items: string[] }): JSX.Element => (
  <p className={styles.skillText}><strong>{label}:</strong>{" "}{items.join(", ")}</p>
);

const ExperienceItem = ({ job, technologyLabel }: { job: CvData["experience"][number]; technologyLabel: string }): JSX.Element => (
  <article className={styles.experienceItem}>
    {job.rolePeriod ? (
      <header className={`${styles.jobHeader} ${styles.deloitteHeader}`}>
        <p className={styles.jobMeta}>
          {job.company}
          {job.companyTitle && <> <span aria-hidden="true">|</span> {job.companyTitle}</>}
          {" "}<span aria-hidden="true">|</span> {job.period}
        </p>
        <h3 className={styles.jobTitle}>{job.role} <span aria-hidden="true">|</span> {job.rolePeriod}</h3>
      </header>
    ) : (
      <header className={styles.jobHeader}>
        <h3 className={styles.jobTitle}>
          <span>{job.role}</span>
          <span className={styles.jobCompany}> | {job.company}</span>
          <span className={styles.jobDate}> | {job.period}</span>
        </h3>
      </header>
    )}
    <ul className={styles.bulletList}>
      {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
    </ul>
    <p className={styles.technologies}><strong>{technologyLabel}</strong> {job.technologies.join(", ")}</p>
  </article>
);

const SkillsSection = ({ data }: { data: CvData }): JSX.Element => (
  <Section title={data.sections.skills}>
    <div className={styles.skillGroups}>
      {data.skills.map((group) => <SkillGroup key={group.label} {...group} />)}
    </div>
  </Section>
);

const ExperienceSection = ({ data }: { data: CvData }): JSX.Element => (
  <Section title={data.sections.experience}>
    {data.experience.map((job) => <ExperienceItem key={`${job.company}-${job.role}`} job={job} technologyLabel={data.sections.technologies} />)}
  </Section>
);

const ProjectsSection = ({ data }: { data: CvData }): JSX.Element | null => {
  if (!data.projects?.length || !data.sections.projects) {
    return null;
  }

  return (
    <Section title={data.sections.projects}>
      {data.projects.map((project) => (
        <article className={styles.experienceItem} key={project.name}>
          <h3 className={styles.jobTitle}>{project.name}</h3>
          <p className={styles.profile}>{project.description}</p>
          <p className={styles.technologies}>
            <strong>{data.sections.technologies}</strong> {project.technologies.join(", ")}
          </p>
        </article>
      ))}
    </Section>
  );
};

const EducationSection = ({ data }: { data: CvData }): JSX.Element => (
  <Section title={data.sections.education}>
    {data.education.map((item) => (
      <article className={styles.educationItem} key={item.institution}>
        <h3 className={styles.jobTitle}>{item.institution} | {item.program} | {item.location && <>{item.location} | </>}{item.period}</h3>
        {item.detail && <p className={styles.educationDetail}>{item.detail}</p>}
      </article>
    ))}
  </Section>
);

const LanguagesSection = ({ data }: { data: CvData }): JSX.Element => (
  <Section title={data.sections.languages}>
    <p className={styles.languageLine}>
      {data.languages.map((language, index) => (
        <React.Fragment key={language.name}>
          {index > 0 && " | "}
          <strong>{language.name}</strong> ({language.level})
        </React.Fragment>
      ))}
    </p>
  </Section>
);

const Cv = ({ data, variant }: CvProps): JSX.Element => {
  const ats = variant === "ats";

  return (
    <article className={`${styles.document} ${ats ? styles.ats : styles.designed}`}>
      {ats ? (
        <>
          <header className={styles.atsHeader}>
            <h1>{data.name}</h1>
            <ContactLine data={data} />
          </header>
          <Section title={data.sections.profile}><p className={styles.profile}>{data.profile}</p></Section>
          <ProjectsSection data={data} />
          <ExperienceSection data={data} />
          <SkillsSection data={data} />
          <EducationSection data={data} />
          <LanguagesSection data={data} />
        </>
      ) : (
        <div className={styles.designedGrid}>
          <aside className={styles.sidebar}>
            {data.photo && <img className={styles.photo} src={data.photo} alt={data.name} />}
            <Section title={data.sections.contact}>
              <ContactDetails data={data} />
            </Section>
            <SkillsSection data={data} />
            <LanguagesSection data={data} />
          </aside>
          <div className={styles.mainColumn}>
            <header className={styles.designedHeader}>
              <h1>{data.name}</h1>
              <p className={styles.role}>{data.title}</p>
              <ContactLine data={data} />
            </header>
            <Section title={data.sections.profile}><p className={styles.profile}>{data.profile}</p></Section>
            <ProjectsSection data={data} />
            <ExperienceSection data={data} />
            <EducationSection data={data} />
          </div>
        </div>
      )}
    </article>
  );
};

export default Cv;