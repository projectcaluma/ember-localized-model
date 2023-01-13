/* eslint-disable no-undef */
self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: "throw", matchId: "ember-global" },
    {
      handler: "throw",
      matchId: "deprecated-run-loop-and-computed-dot-access",
    },
  ],
};
