type Props = {
  title: string;
  description: string;
};

export default function PageTitle({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-medium">{description}</p>
    </div>
  );
}
