export const getScreenParent = route => {
  let parent;
  let bottomTabStack = [
    'Dashboard',
    'Projects',
    'Tasks',
    'Calendar',
    'Reports',
  ];

  let singleStack = ['Auth', 'Login', 'SignUp'];

  if (bottomTabStack.includes(route)) {
    parent = 'BottomTabStack';
  } else if (singleStack.includes(route)) {
    parent = 'SingleStack';
  }
  return parent;
};
