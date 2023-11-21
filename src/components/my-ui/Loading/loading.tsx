import { SpinnerIcon } from "@/components/icons";

export const LoadingComponent = () => {
  return (
    <div className="absolute top-0 left-[10vw] sm:left-[20vw] lg:bottom-0 md:left-[35vw] lg:right-0 lg:left-[15%] lg:pt-[400px] pt-[200px] backdrop-blur-8px">
      <div className="flex gap-1 items-center mx-auto max-w-max">
        <SpinnerIcon size={24} className="animate-spin" />
        <p className="font-geist text-x5 font-semibold">mariquegonn-dev</p>
      </div>
    </div>
  );
};
