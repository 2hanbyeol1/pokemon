import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const pageVariants = cva("mx-auto px-4", {
  variants: {
    size: {
      lg: "max-w-[1024px]",
      sm: "max-w-[624px]",
    },
    centered: {
      true: "h-screen flex justify-center items-center",
      false: "",
    },
    relative: {
      true: "relative",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    centered: false,
    relative: false,
  },
});

type PageVariantType = VariantProps<typeof pageVariants>;
type PageProps = PageVariantType & PropsWithChildren;

function Page({ size, centered, relative, children }: PageProps) {
  return (
    <main className={pageVariants({ size, centered, relative })}>
      {children}
    </main>
  );
}

export default Page;
