import { SpinnerIcon } from "@/components/icons";

export const LoadingComponent = () => {
  return (
    <div className="absolute top-0 bottom-0 left-[15vw] right-0 pt-[400px] backdrop-blur-[8px] ">
      <div className="flex gap-1 items-center mx-auto max-w-max">
        <SpinnerIcon size={24} className="animate-spin" />
        <p className="font-geist text-x5 font-semibold">mariquegonn-dev</p>
      </div>
    </div>
  );
};
