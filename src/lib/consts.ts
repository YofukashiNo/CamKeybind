import { KeybindUtils } from "./requiredModules";
export const defaultSettings = {
  playAudio: true,
  showToast: true,
  keybind: KeybindUtils.toCombo("ctrl+alt+c") as number[][],
};
export const Sounds = {
  Enable: "stream_started",
  Disable: "stream_ended",
};
