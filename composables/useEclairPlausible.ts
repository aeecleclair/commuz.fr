export function useEclairPlausible() {
  return useScriptPlausibleAnalytics({
    domain: "commuz.fr",
    scriptInput: {
      src: "https://plausible.eclair.ec-lyon.fr/js/script.js",
    },
  });
}
