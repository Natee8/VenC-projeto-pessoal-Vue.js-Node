import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  duration: 4000,
  position: { x: "right", y: "bottom" },
  dismissible: true,
});

export function useNotyf() {
  return notyf;
}
