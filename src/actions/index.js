/*ACTIONS FOR INTIALIZATION*/
export const ACTIONS_INITIALIZATION = 'ACTIONS_INITIALIZATION';
export const SAGAS_INITIALIZATION  = 'SAGAS_INITIALIZATION ';

export function initialization() {
  return {
    type: ACTIONS_INITIALIZATION,
    initData: "initData"
  };
}

