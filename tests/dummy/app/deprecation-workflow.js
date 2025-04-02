import { macroCondition, dependencySatisfies } from "@embroider/macros";
import setupDeprecationWorkflow from "ember-cli-deprecation-workflow";

export default setupDeprecationWorkflow({
  throwOnUnhandled: true,
  workflow: [
    {
      handler: macroCondition(dependencySatisfies("ember-data", "< 5.0.0"))
        ? "silence"
        : "throw",
      matchId: "importing-inject-from-ember-service",
    },
  ],
});
