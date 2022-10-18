// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterIcon(props: TwitterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.283 20c7.546 0 11.676-6.158 11.676-11.488 0-.173 0-.347-.008-.52A8.287 8.287 0 0022 5.898a8.424 8.424 0 01-2.36.637A4.075 4.075 0 0021.447 4.3a8.245 8.245 0 01-2.61.977A4.128 4.128 0 0015.846 4c-2.264 0-4.105 1.811-4.105 4.04 0 .314.04.621.104.92a11.718 11.718 0 01-8.46-4.22 3.988 3.988 0 00-.552 2.032c0 1.401.729 2.637 1.825 3.362A4.204 4.204 0 012.8 9.63v.055c0 1.953 1.417 3.59 3.29 3.96a4.062 4.062 0 01-1.08.142c-.265 0-.521-.023-.77-.07.521 1.606 2.042 2.771 3.834 2.803a8.317 8.317 0 01-5.098 1.732A8.04 8.04 0 012 18.197 11.814 11.814 0 008.283 20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
