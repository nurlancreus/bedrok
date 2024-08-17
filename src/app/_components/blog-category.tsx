const styles = {
  creator: "text-neutral-10 bg-neutral-80",
  entrepreneurship: "text-secondary-10 bg-secondary-80",
  tech: "text-primary-10 bg-primary-80",
};

export default function BlogCategory({
  category,
}: {
  category: "entrepreneurship" | "creator" | "tech";
}) {
  return (
    <div className={`rounded-sm px-2 py-1 uppercase ${styles[category]}`}>
      category
    </div>
  );
}
