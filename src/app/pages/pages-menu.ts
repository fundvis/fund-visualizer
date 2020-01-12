import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '全部',
    icon: 'nb-grid-a',
    link: '/pages/dashboard/all',
  },
  {
    title: '指数型',
    icon: 'nb-bar-chart',
    link: '/pages/dashboard/zhishu',
  },
  {
    title: '股票型',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard/gupiao',
  },
  {
    title: '混合型',
    icon: 'nb-keypad',
    link: '/pages/dashboard/hunhe',
  },
  {
    title: '债券型',
    icon: 'nb-compose',
    link: '/pages/dashboard/zhaiquan',
  },
  {
    title: 'QDII(投资境外证券的基金)',
    icon: 'nb-locked',
    link: '/pages/dashboard/qdii',
  },
  {
    title: 'LOF(ETF中国化)',
    icon: 'nb-coffee-maker',
    link: '/pages/dashboard/lof',
  },
  {
    title: 'FOF(投资基金的基金)',
    icon: 'nb-lightbulb',
    link: '/pages/dashboard/fof',
  },
];
