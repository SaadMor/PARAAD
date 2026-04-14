interface SectionTitleProps {
  title: string;
  id?: string;
}

const SectionTitle = ({ title, id }: SectionTitleProps) => {
  return (
    <h2 className="section-title" id={id}>
      {title}
    </h2>
  );
};

export default SectionTitle;
