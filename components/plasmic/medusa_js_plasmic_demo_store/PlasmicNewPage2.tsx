// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVnLEr86YnvgBZvPCbTRFm
// Component: hBpCNcbsEMOO

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

import { ProductBox } from "../../medusa/ProductBox"; // plasmic-import: fBKEgiaUpMRS/codeComponent
import { ProductTextField } from "../../medusa/ProductTextField"; // plasmic-import: ypKjMcT3f1kY/codeComponent
import { ProductMedia } from "../../medusa/ProductMedia"; // plasmic-import: CiW24O40QcVr/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eVnLEr86YnvgBZvPCbTRFm/projectcss
import sty from "./PlasmicNewPage2.module.css"; // plasmic-import: hBpCNcbsEMOO/css

createPlasmicElementProxy;

export type PlasmicNewPage2__VariantMembers = {};
export type PlasmicNewPage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage2__VariantsArgs;
export const PlasmicNewPage2__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage2__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage2__ArgsType;
export const PlasmicNewPage2__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage2__OverridesType = {
  root?: Flex__<"div">;
  productBox?: Flex__<typeof ProductBox>;
  freeBox?: Flex__<"div">;
  productMedia?: Flex__<typeof ProductMedia>;
};

export interface DefaultNewPage2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage2__RenderFunc(props: {
  variants: PlasmicNewPage2__VariantsArgs;
  args: PlasmicNewPage2__ArgsType;
  overrides: PlasmicNewPage2__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

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
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__julie
            )}
          >
            {"Enter some text"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lFzKz
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return JSON.stringify($ctx.customer);
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wwAmd
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return undefined;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <ProductBox
            data-plasmic-name={"productBox"}
            data-plasmic-override={overrides.productBox}
            className={classNames("__wab_instance", sty.productBox)}
            emptyMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5IdsI
                    )}
                  >
                    {"No product found!"}
                  </div>
                )}
              </DataCtxReader__>
            }
            handle={"picnic-table"}
            loadingMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8RWww
                    )}
                  >
                    {"Loading..."}
                  </div>
                )}
              </DataCtxReader__>
            }
          >
            <DataCtxReader__>
              {$ctx => (
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField__c93T
                    )}
                    field={"title"}
                  />

                  <ProductMedia
                    data-plasmic-name={"productMedia"}
                    data-plasmic-override={overrides.productMedia}
                    className={classNames("__wab_instance", sty.productMedia)}
                  />

                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField___0N3Si
                    )}
                    field={"description"}
                  />
                </div>
              )}
            </DataCtxReader__>
          </ProductBox>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "productBox", "freeBox", "productMedia"],
  productBox: ["productBox", "freeBox", "productMedia"],
  freeBox: ["freeBox", "productMedia"],
  productMedia: ["productMedia"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  productBox: typeof ProductBox;
  freeBox: "div";
  productMedia: typeof ProductMedia;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage2__VariantsArgs;
    args?: PlasmicNewPage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage2__ArgsType,
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
          internalArgPropNames: PlasmicNewPage2__ArgProps,
          internalVariantPropNames: PlasmicNewPage2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage2";
  } else {
    func.displayName = `PlasmicNewPage2.${nodeName}`;
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

export const PlasmicNewPage2 = Object.assign(
  // Top-level PlasmicNewPage2 renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    productBox: makeNodeComponent("productBox"),
    freeBox: makeNodeComponent("freeBox"),
    productMedia: makeNodeComponent("productMedia"),

    // Metadata about props expected for PlasmicNewPage2
    internalVariantProps: PlasmicNewPage2__VariantProps,
    internalArgProps: PlasmicNewPage2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage2;
/* prettier-ignore-end */
