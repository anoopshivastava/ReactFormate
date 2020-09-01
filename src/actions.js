export const SHOW_SCREEN = 'SHOW_SCREEN';
export const WIDTH_CHANGE = 'WIDTH_CHANGE';


export const widthChange = (data) => {
  return { type: WIDTH_CHANGE, data };
};

export const setScreen = (data) => {
  return { type: SHOW_SCREEN, data };
};


