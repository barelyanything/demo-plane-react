// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5VnySwGRBKmpnaR3N63wcy
// Component: ObQPJ3fHQ3
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 2K2IQcamIFm/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_memeland.module.css"; // plasmic-import: 5VnySwGRBKmpnaR3N63wcy/projectcss
import sty from "./PlasmicContentText.module.css"; // plasmic-import: ObQPJ3fHQ3/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZuVfk934Gtc/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: bu03zRh4d_0/icon

export type PlasmicContentText__VariantMembers = {
  button: "button";
  textAlign: "left" | "right";
};
export type PlasmicContentText__VariantsArgs = {
  button?: SingleBooleanChoiceArg<"button">;
  textAlign?: SingleChoiceArg<"left" | "right">;
};
type VariantPropType = keyof PlasmicContentText__VariantsArgs;
export const PlasmicContentText__VariantProps = new Array<VariantPropType>(
  "button",
  "textAlign"
);

export type PlasmicContentText__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContentText__ArgsType;
export const PlasmicContentText__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicContentText__OverridesType = {
  root?: p.Flex<"section">;
  h3?: p.Flex<"h3">;
  freeBox?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultContentTextProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  button?: SingleBooleanChoiceArg<"button">;
  textAlign?: SingleChoiceArg<"left" | "right">;
  className?: string;
}

function PlasmicContentText__RenderFunc(props: {
  variants: PlasmicContentText__VariantsArgs;
  args: PlasmicContentText__ArgsType;
  overrides: PlasmicContentText__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.Stack
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbutton]: hasVariant(variants, "button", "button"),
          [sty.roottextAlign_right]: hasVariant(variants, "textAlign", "right")
        }
      )}
    >
      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(projectcss.all, projectcss.h3, sty.h3, {
          [sty.h3textAlign_left]: hasVariant(variants, "textAlign", "left"),
          [sty.h3textAlign_right]: hasVariant(variants, "textAlign", "right")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrentextAlign_left]: hasVariant(
              variants,
              "textAlign",
              "left"
            ),
            [sty.slotTargetChildrentextAlign_right]: hasVariant(
              variants,
              "textAlign",
              "right"
            )
          })
        })}
      </h3>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxbutton]: hasVariant(variants, "button", "button"),
          [sty.freeBoxtextAlign_left]: hasVariant(
            variants,
            "textAlign",
            "left"
          ),
          [sty.freeBoxtextAlign_right]: hasVariant(
            variants,
            "textAlign",
            "right"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          value: args.slot,
          className: classNames(sty.slotTargetSlot, {
            [sty.slotTargetSlotbutton]: hasVariant(
              variants,
              "button",
              "button"
            ),
            [sty.slotTargetSlottextAlign_left]: hasVariant(
              variants,
              "textAlign",
              "left"
            ),
            [sty.slotTargetSlottextAlign_right]: hasVariant(
              variants,
              "textAlign",
              "right"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "button", "button") ? true : true) ? (
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonbutton]: hasVariant(variants, "button", "button")
          })}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "freeBox", "button"],
  h3: ["h3"],
  freeBox: ["freeBox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  h3: "h3";
  freeBox: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContentText__VariantsArgs;
    args?: PlasmicContentText__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContentText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContentText__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContentText__ArgProps,
          internalVariantPropNames: PlasmicContentText__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContentText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContentText";
  } else {
    func.displayName = `PlasmicContentText.${nodeName}`;
  }
  return func;
}

export const PlasmicContentText = Object.assign(
  // Top-level PlasmicContentText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicContentText
    internalVariantProps: PlasmicContentText__VariantProps,
    internalArgProps: PlasmicContentText__ArgProps
  }
);

export default PlasmicContentText;
/* prettier-ignore-end */
