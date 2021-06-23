export const getScreenParent = route => {
  let parent;
  let bottomTabStack = ['Dashboard', 'Projects', 'Members', 'Profile'];

  let singleStack = [
    'Onboarding',
    'Login',
    'SignUp',
    'Chat',
    'Reports',
    'Calendar',
    'Tasks',
    'Project',
  ];

  if (bottomTabStack.includes(route)) {
    parent = 'BottomTabStack';
  } else if (singleStack.includes(route)) {
    parent = 'SingleStack';
  }
  return parent;
};
