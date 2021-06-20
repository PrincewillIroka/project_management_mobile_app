import {createRef} from 'react';

export const isReadyRef = createRef();
export const navigationRef = createRef();

export function navigate(parent, params) {
  navigationRef.current?.navigate(parent, params);
}

export function navigateToNestedRoute(parent, route, params) {
  navigationRef.current?.navigate(parent, {screen: route, params});
}

export function goBack() {
  navigationRef.current?.goBack();
}
