import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps } from "react";

const buttonVariant = cva(
  "rounded text-[15px] font-semibold border transition hover:brightness-95 active:brightness-90",
  {
    variants: {
      intent: {
        primary: "border-sky-500",
        secondary: "border-slate-500",
        danger: "border-red-500",
      },
      size: {
        sm: "px-3 py-1 text-[13px]",
        md: "px-4 py-1.5 text-[15px]",
        lg: "px-5 py-2 text-[17px]",
      },
      outline: {
        true: "bg-white",
        false: "text-white",
      },
      absolute: {
        true: "absolute top-3 left-2",
        false: "",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        outline: false,
        className: "bg-sky-500",
      },
      {
        intent: "primary",
        outline: true,
        className: "text-sky-500",
      },
      {
        intent: "secondary",
        outline: false,
        className: "bg-slate-500",
      },
      {
        intent: "secondary",
        outline: true,
        className: "text-slate-500",
      },
      {
        intent: "danger",
        outline: false,
        className: "bg-red-500",
      },
      {
        intent: "danger",
        outline: true,
        className: "text-red-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      outline: false,
      absolute: false,
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;
type ButtonProps = ButtonVariant &
  (
    | ({ href?: undefined } & ComponentProps<"button">)
    | ({ href: string } & ComponentProps<typeof Link>)
  );

function Button({
  intent,
  size,
  outline,
  absolute,
  children,
  ...props
}: ButtonProps) {
  if (props.href) {
    return (
      <Link
        className={buttonVariant({ intent, size, outline, absolute })}
        {...props}
      >
        {children}
      </Link>
    );
  } else if (typeof props.href === "undefined") {
    return (
      <button
        className={buttonVariant({ intent, size, outline, absolute })}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
