import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarCustomProps = {
  src: string;
  alt: string;
};

export const AvatarCustom = ({ src, alt }: AvatarCustomProps) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};
