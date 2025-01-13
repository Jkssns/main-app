import { registerMicroApps } from "qiankun";
import subApps from "./micro-apps";

export function injectMicroApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        // @ts-ignore
        app => {
          console.log("before load", app);
        },
      ],
      beforeMount: [
        // @ts-ignore
        (app) => {
          console.log("before mount", app);
        },
      ],
      afterUnmount: [
        // @ts-ignore
        (app) => {
          console.log("before unmount", app);
          return '123';
        },
      ],
    });
  } catch (error) {
    console.log(error, '123');
  }
}
