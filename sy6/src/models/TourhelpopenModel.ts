export default {
  state: {
    touropen: open,
  },
  reducers: {
    changeTouropen(prevstate: object, action: any) {
      return {
        ...prevstate,
        touropen: action.payload.bool,
      };
    },
  },
};
