export default {
<<<<<<< HEAD
    state: {
        updatetip: true
    },
    reducers: {
        changeUpdatetip(prevstate: object, action: any) {
            return {
                ...prevstate,
                updatetip: action.payload.bool,
            };
        },
    },
=======
  state: {
    updatetip: false,
  },
  reducers: {
    changeUpdatetip(prevstate: object, action: any) {
      return {
        ...prevstate,
        updatetip: action.payload.bool,
      };
    },
  },
>>>>>>> e00c4e0 (登录注册模块)
};
