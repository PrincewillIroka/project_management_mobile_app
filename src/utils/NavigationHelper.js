export const getScreenParent = route => {
  let parent;
  let bottomTabStack = ['Dashboard', 'Projects', 'Contacts', 'Profile'];

  let singleStack = [
    'Onboarding',
    'Login',
    'SignUp',
    'Chat',
    'Reports',
    'Calendar',
    'Tasks',
  ];

  if (bottomTabStack.includes(route)) {
    parent = 'BottomTabStack';
  } else if (singleStack.includes(route)) {
    parent = 'SingleStack';
  }
  return parent;
};
