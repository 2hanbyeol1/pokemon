import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const chipVariants = cva("text-white px-4 py-[0.3px] rounded-full", {
  variants: {
    type: {
      노말: "bg-[#949495]",
      불꽃: "bg-[#E56C3E]",
      물: "bg-[#5185C5]",
      풀: "bg-[#67A844]",
      전기: "bg-[#FBB917]",
      얼음: "bg-[#6CC8EB]",
      격투: "bg-[#E09C40]",
      독: "bg-[#735098]",
      땅: "bg-[#9C7643]",
      비행: "bg-[#A2C3E7]",
      에스퍼: "bg-[#DD6A7A]",
      벌레: "bg-[#9FA244]",
      바위: "bg-[#BFB889]",
      고스트: "bg-[#684770]",
      드래곤: "bg-[#535CA8]",
      악: "bg-[#4B4948]",
      강철: "bg-[#69A8C7]",
      페어리: "bg-[#DAB3D4]",
    },
    size: {
      base: "text-base",
      sm: "text-sm",
    },
  },
  // compoundVariants: [],
  defaultVariants: {
    type: "노말",
    size: "base",
  },
});

type ChipVariantsType = VariantProps<typeof chipVariants>;
type ChipProps = ChipVariantsType & PropsWithChildren;

function Chip({ type, size, children }: ChipProps) {
  return <span className={chipVariants({ type, size })}>{children}</span>;
}

export default Chip;
