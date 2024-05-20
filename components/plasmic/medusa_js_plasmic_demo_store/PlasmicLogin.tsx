// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVnLEr86YnvgBZvPCbTRFm
// Component: mnRZGLalV2_N

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import Button from "../../Button"; // plasmic-import: hxdFXQNRKdLs/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eVnLEr86YnvgBZvPCbTRFm/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: mnRZGLalV2_N/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: Gj8Ok3LV05ZK/icon

createPlasmicElementProxy;

export type PlasmicLogin__VariantMembers = {};
export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: Flex__<"div">;
  h3?: Flex__<"h3">;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  input2?: Flex__<typeof AntdInput>;
  button?: Flex__<typeof Button>;
};

export interface DefaultLoginProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__lm4Of)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wYgH5)}
            >
              <h3
                data-plasmic-name={"h3"}
                data-plasmic-override={overrides.h3}
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3
                )}
              >
                {"Welcome to MedusJS!"}
              </h3>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.form),
                  colon: false,
                  extendedOnValuesChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["form", "value"],
                      FormWrapper_Helpers
                    ),
                  formItems: [
                    { label: "Name", name: "name", inputType: "Text" },
                    {
                      label: "Message",
                      name: "message",
                      inputType: "Text Area"
                    }
                  ],
                  labelCol: (() => {
                    const __composite = { span: null, horizontalOnly: true };
                    __composite["span"] = 4;
                    return __composite;
                  })(),

                  layout: "horizontal",
                  mode: "advanced",
                  onFinish: async values => {
                    const $steps = {};

                    $steps["loginUser"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              (() => {
                                try {
                                  return $state.form.value;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            ]
                          };
                          return $globalActions[
                            "medusa-provider.signIn"
                          ]?.apply(null, [...actionArgs.args]);
                        })()
                      : undefined;
                    if (
                      $steps["loginUser"] != null &&
                      typeof $steps["loginUser"] === "object" &&
                      typeof $steps["loginUser"].then === "function"
                    ) {
                      $steps["loginUser"] = await $steps["loginUser"];
                    }

                    $steps["goToHomepage"] = true
                      ? (() => {
                          const actionArgs = { destination: `/` };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToHomepage"] != null &&
                      typeof $steps["goToHomepage"] === "object" &&
                      typeof $steps["goToHomepage"].then === "function"
                    ) {
                      $steps["goToHomepage"] = await $steps["goToHomepage"];
                    }

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: ["error", "Couldn't log in the user"]
                          };
                          return $globalActions[
                            "plasmic-antd5-config-provider.showNotification"
                          ]?.apply(null, [...actionArgs.args]);
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }
                  },
                  onIsSubmittingChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "isSubmitting",
                      ["form", "isSubmitting"],
                      FormWrapper_Helpers
                    ),
                  ref: ref => {
                    $refs["form"] = ref;
                  },
                  submitSlot: null,
                  wrapperCol: (() => {
                    const __composite = { span: null, horizontalOnly: true };
                    __composite["span"] = 20;
                    return __composite;
                  })()
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "form.value"
                    },
                    {
                      name: "isSubmitting",
                      plasmicStateName: "form.isSubmitting"
                    }
                  ],
                  [],
                  FormWrapper_Helpers ?? {},
                  child$Props
                );

                return (
                  <FormWrapper
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    {...child$Props}
                  >
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__qzj9L
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__lemSg
                          )}
                        >
                          {"Email"}
                        </div>
                      }
                      name={"email"}
                    >
                      {(() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.input),
                          onChange: generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["input", "value"],
                            AntdInput_Helpers
                          ),
                          value: generateStateValueProp($state, [
                            "input",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "input.value"
                            }
                          ],
                          [],
                          AntdInput_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <AntdInput
                            data-plasmic-name={"input"}
                            data-plasmic-override={overrides.input}
                            {...child$Props}
                          />
                        );
                      })()}
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__ieX2G
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wmQj
                          )}
                        >
                          {"Password"}
                        </div>
                      }
                      name={"password"}
                    >
                      {(() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.input2),
                          onChange: generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["input2", "value"],
                            AntdInput_Helpers
                          ),
                          type: "password",
                          value: generateStateValueProp($state, [
                            "input2",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "input2.value"
                            }
                          ],
                          [],
                          AntdInput_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <AntdInput
                            data-plasmic-name={"input2"}
                            data-plasmic-override={overrides.input2}
                            {...child$Props}
                          />
                        );
                      })()}
                    </FormItemWrapper>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__dBuBb)}
                    >
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        colors={"black"}
                        submitsForm={true}
                      >
                        {"Sign in"}
                      </Button>
                    </div>
                  </FormWrapper>
                );
              })()}
            </Stack__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "form", "input", "input2", "button"],
  h3: ["h3"],
  form: ["form", "input", "input2", "button"],
  input: ["input"],
  input2: ["input2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  input2: typeof AntdInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogin__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"eVnLEr86YnvgBZvPCbTRFm"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "eVnLEr86YnvgBZvPCbTRFm"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
