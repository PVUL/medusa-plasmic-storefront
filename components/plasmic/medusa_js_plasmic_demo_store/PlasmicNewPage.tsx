// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVnLEr86YnvgBZvPCbTRFm
// Component: QMh91KWUUi9o

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

import { ProductCollection } from "../../medusa/ProductCollection"; // plasmic-import: 3tFMl1-mZib8/codeComponent
import { ProductBox } from "../../medusa/ProductBox"; // plasmic-import: fBKEgiaUpMRS/codeComponent
import { ProductTextField } from "../../medusa/ProductTextField"; // plasmic-import: ypKjMcT3f1kY/codeComponent
import { ProductMedia } from "../../medusa/ProductMedia"; // plasmic-import: CiW24O40QcVr/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eVnLEr86YnvgBZvPCbTRFm/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: QMh91KWUUi9o/css

createPlasmicElementProxy;

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: Flex__<"div">;
  productBox?: Flex__<typeof ProductBox>;
};

export interface DefaultNewPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
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
          <ProductCollection
            className={classNames(
              "__wab_instance",
              sty.productCollection___5XEqC
            )}
            emptyMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mjNxM
                    )}
                  >
                    {"No product found!"}
                  </div>
                )}
              </DataCtxReader__>
            }
            loadingMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dIsR1
                    )}
                  >
                    {"Loading..."}
                  </div>
                )}
              </DataCtxReader__>
            }
            noAutoRepeat={true}
          >
            <DataCtxReader__>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__kimgh)}>
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $ctx.products;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__izgU
                        )}
                        key={currentIndex}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__u6Qyh
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.title;
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
                      </div>
                    );
                  })}
                </div>
              )}
            </DataCtxReader__>
          </ProductCollection>
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
                      sty.text__dYuZu
                    )}
                  >
                    {"No product found!"}
                  </div>
                )}
              </DataCtxReader__>
            }
            loadingMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vEbXa
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
                <div className={classNames(projectcss.all, sty.freeBox__in94N)}>
                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField__lxLak
                    )}
                    field={"title"}
                  />

                  <ProductMedia
                    className={classNames(
                      "__wab_instance",
                      sty.productMedia__rQeWx
                    )}
                  />

                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField__sjviq
                    )}
                    field={"description"}
                  />
                </div>
              )}
            </DataCtxReader__>
          </ProductBox>
          <ProductCollection
            className={classNames(
              "__wab_instance",
              sty.productCollection__vSZog
            )}
            emptyMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1ICSs
                    )}
                  >
                    {"No product found!"}
                  </div>
                )}
              </DataCtxReader__>
            }
            limit={2}
            loadingMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rBtft
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
                  className={classNames(projectcss.all, sty.freeBox___4SclM)}
                >
                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField__cjoKi
                    )}
                    field={"title"}
                  />

                  <ProductMedia
                    className={classNames(
                      "__wab_instance",
                      sty.productMedia__kOoGr
                    )}
                  />

                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField___1Ykhv
                    )}
                    field={"description"}
                  />
                </div>
              )}
            </DataCtxReader__>
          </ProductCollection>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "productBox"],
  productBox: ["productBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  productBox: typeof ProductBox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
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
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
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

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    productBox: makeNodeComponent("productBox"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
