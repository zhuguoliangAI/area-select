/**
 * @author zgl0.0
 * @date 2019/10/28 14:43
 */

export interface Area {
  id: number | string;
  name: string;
  parentId?: number | string;
  geoDivisionId?: string | number;
  geoDivisionName?: string;
  children?: Area[];
  isLeaf?: boolean;
  selected?: boolean;
  partSelected?: boolean;
}
