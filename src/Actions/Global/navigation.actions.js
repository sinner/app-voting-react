export const ACTIONS = {
  NAV_REDIRECT: 'navigation-controller/redirect',
  NAV_STOP: 'navigation-controller/stop',
};

export const navigationRedirect = url => ({ type: ACTIONS.NAV_REDIRECT, payload: url });

export const NavigationState = (url, flag) => ({
  type: ACTIONS.NAV_STOP,
  payload: { url, flag },
});
