export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export type SnackbarState = {
  show: boolean;
  message: string;
  type: "success" | "error";
};

export async function showSnackbarAndWait(
  snackbar: { value: SnackbarState },
  message: string,
  type: "success" | "error",
  delayMs = 1200,
) {
  snackbar.value = {
    show: true,
    message,
    type,
  };

  await new Promise((resolve) => setTimeout(resolve, delayMs));

  snackbar.value.show = false;
}
