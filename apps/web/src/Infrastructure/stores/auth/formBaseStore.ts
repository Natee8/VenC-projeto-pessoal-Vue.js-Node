import { defineStore } from "pinia";
import { RegisterInputProfiles } from "../../../../../../packages/src/domain/dtos/IUser.dto";

interface RegisterState {
  registerData: RegisterInputProfiles | null;
}

export const useRegisterStore = defineStore("register", {
  state: (): RegisterState => ({
    registerData: null,
  }),

  actions: {
    setRegisterData(data: RegisterInputProfiles) {
      this.registerData = { ...data };
    },

    clearRegisterData() {
      this.registerData = null;
    },
  },
});
