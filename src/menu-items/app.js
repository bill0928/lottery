// assets
import { IconTypography, IconUsers, IconShadow, IconReport,
   IconDatabaseImport, IconBuildingSkyscraper, IconClockRecord } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconUsers,
  IconShadow,
  IconBuildingSkyscraper,
  IconDatabaseImport,
  IconReport,
  IconClockRecord
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const app = {
  id: 'utilities',
  title: '模块',
  type: 'group',
  children: [
    {
      id: 'users',
      title: '使用者',
      type: 'item',
      url: '/users',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'data-source',
      title: '外部资料来源',
      type: 'item',
      url: '/data-source',
      icon: icons.IconDatabaseImport,
      breadcrumbs: false
    },
    {
      id: 'company',
      title: '运营商',
      type: 'item',
      url: '/companies',
      icon: icons.IconBuildingSkyscraper,
      breadcrumbs: false
    },
    {
      id: 'report',
      title: '报表',
      type: 'item',
      url: '/report',
      icon: icons.IconReport,
      breadcrumbs: false
    },
    {
      id: 'maintenance',
      title: '操作记录',
      type: 'item',
      url: '/maintenance',
      icon: icons.IconClockRecord,
      breadcrumbs: false
    },
  ]
};

export default app;
