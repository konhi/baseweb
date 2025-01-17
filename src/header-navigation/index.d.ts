import * as React from 'react';
import {StyletronComponent} from 'styletron-react';
import {Override} from '../overrides';

export interface ALIGN {
  right: 'flex-end';
  left: 'flex-start';
  center: 'center';
}

export interface HeaderNavigationOverrides {
  Root?: Override<any>;
}

export interface HeaderNavigationProps {
  overrides?: HeaderNavigationOverrides;
  children?: React.ReactNode;
}

export class HeaderNavigation extends React.Component<HeaderNavigationProps> {}

export const StyledRoot: StyletronComponent<any>;
export const StyledNavigationItem: StyletronComponent<any>;
export const StyledNavigationList: StyletronComponent<any>;

export const ALIGN: ALIGN;
