/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * Part of this code is taken from @chakra-ui/system and @nextui-org/nextui
 */

 import {forwardRef as baseForwardRef} from "react";
 
 export type As<Props = any> = React.ElementType<Props>;
 
 export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
   Target,
   "transition" | "as" | "color" | OmitAdditionalProps
 >;
 
 export type RightJoinProps<
   SourceProps extends object = {},
   OverrideProps extends object = {},
 > = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
 
 export type MergeWithAs<
   ComponentProps extends object,
   AsProps extends object,
   AdditionalProps extends object = {},
   AsComponent extends As = As,
 > = RightJoinProps<ComponentProps, AdditionalProps> &
   RightJoinProps<AsProps, AdditionalProps> & {
     as?: AsComponent;
   };
 
 export type ComponentWithAs<Component extends As, Props extends object = {}> = {
   <AsComponent extends As = Component>(
     props: MergeWithAs<
       React.ComponentProps<Component>,
       React.ComponentProps<AsComponent>,
       Props,
       AsComponent
     >,
   ): JSX.Element;
 
   displayName?: string;
   propTypes?: React.WeakValidationMap<any>;
   contextTypes?: React.ValidationMap<any>;
   defaultProps?: Partial<any>;
   id?: string;
 };
 
 /**
  * Extract the props of a React element or component
  */
 export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
   as?: As;
 };
 
 export function forwardRef<Props extends object, Component extends As>(
   component: React.ForwardRefRenderFunction<
     any,
     RightJoinProps<PropsOf<Component>, Props> & {
       as?: As;
     }
   >,
 ) {
   return baseForwardRef(component) as unknown as ComponentWithAs<Component, Props>;
 }