import React, { ReactNode } from "react";

export type ExpandStyleType = 'plus' | 'triangle';
export type HoverBlockType = 'inline' | 'block';

export interface ILevels {
  key: string;
  value: number;
};

export interface ITreeData {
  id?: string;
  value: string;
  expand?: boolean;
  sub?: ITreeData[];
  isLeaf?: boolean;
  isLoading?: boolean;
  [k: string]: any;
};

export interface ITreeRef {
  update: () => void;
  change: () => void;
};

export interface IRenderLineProps {
  showLine: boolean;
  showExpand: boolean;
  handleExpand: (data: ITreeData) => void;
  expandStyle: ExpandStyleType
};

export interface ITreeProps {
  className?: string,
  style?: React.CSSProperties,
  data: ITreeData[];
  expandedKeys?: string[];
  lineColor?: string;
  lineBoxWidth?: string;
  hoverBgColor?: string | boolean;
  expandColor?: string;
  itemStyle?: React.CSSProperties;
  hoverBlock?: HoverBlockType;
  itemRender?: (data: ITreeData, index: number, parentData: ITreeData[]) => ReactNode;
  showLine?: boolean;
  showExpand?: boolean;
  defaultExpand?: boolean;
  expandStyle?: ExpandStyleType;
  height?: boolean | number;
  itemSize?: number;
  loadData?: (data: ITreeData) => Promise<ITreeData[]>;
  onExpand?: (data: string[]) => void;
  onChange?: (data: ITreeData[]) => void;
  onClick?: (data: ITreeData) => void;
};