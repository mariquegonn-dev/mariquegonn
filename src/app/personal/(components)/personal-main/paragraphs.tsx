import { PersonalProps } from "@/config/personal/personal.type";

export const Paragraphs = ({ config }: PersonalProps) => {
  return (
    <ul className="flex flex-col gap-6">
      {config.map((item, index) => (
        <li key={index}>
          <p className="text-gray-300">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
