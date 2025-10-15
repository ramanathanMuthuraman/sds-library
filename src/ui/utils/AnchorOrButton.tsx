import React, { ForwardedRef, forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

export type AnchorOrButtonSharedProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
};

type AnchorProps = Omit<
  React.ComponentPropsWithoutRef<typeof RACLink>,
  keyof AnchorOrButtonSharedProps
> &
  AnchorOrButtonSharedProps;

type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof RACButton>,
  keyof AnchorOrButtonSharedProps
> &
  AnchorOrButtonSharedProps;

export type AnchorOrButtonProps = AnchorProps | ButtonProps;

function isAnchorProps(props: AnchorOrButtonProps): props is AnchorProps {
  return "href" in props && props.href !== undefined;
}

export const AnchorOrButton = forwardRef(function AnchorOrButton(
  props: AnchorOrButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const { children, className, style, ...rest } = props;

  if (isAnchorProps(props)) {
    return (
      <RACLink
        {...(rest as AnchorProps)}
        className={className}
        style={style}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {children}
      </RACLink>
    );
  }

  return (
    <RACButton
      {...(rest as ButtonProps)}
      className={className}
      style={style}
      ref={ref as ForwardedRef<HTMLButtonElement>}
    >
      {children}
    </RACButton>
  );
});
