import SvgColor from '../../UI/svg-color';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

export interface NavConfigItem {
  title: string;
  path: string;
  icon: JSX.Element;
  children?: NavConfigItem[];
}

const navConfig: NavConfigItem[] = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/User',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/Product',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/Blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Account Settings',
    path: '/',
    icon: icon('ic_account-3'),
    children: [
      {
        title: 'User Profile',
        path: '/login',
        icon: icon('ic_account'),
      },
      {
        title: 'Edit Profile',
        path: '/auth/signup',
        icon: icon('ic_edit'),
      },
      {
        title: 'Change Password',
        path: '/auth/forget-password',
        icon: icon('ic_password'),
      },
    ],
  },
  {
    title: 'OAuth',
    path: '/',
    icon: icon('ic_lock'),
    children: [
      {
        title: 'Login',
        path: '/login',
        icon: icon('ic_login'),
      },
      {
        title: 'Signup',
        path: '/auth/signup',
        icon: icon('ic_sign'),
      },
      {
        title: 'Forget Password',
        path: '/auth/forget-password',
        icon: icon('ic_forget'),
      },
    ],
  },

  {
    title: 'Chat',
    path: '/Chat',
    icon: icon('ic_chat'),
  },
  {
    title: 'Mail',
    path: '/Mail',
    icon: icon('ic_mailbox'),
  },
  {
    title: 'Calender',
    path: '/Calendar',
    icon: icon('ic_calendar'),
  },
  {
    title: 'Kanban',
    path: '/Kanban',
    icon: icon('ic_kanban'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
