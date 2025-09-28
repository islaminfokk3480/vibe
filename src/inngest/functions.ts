import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
  name: "codeAgent",
  system: "You are an expert next.js developer. You write readable, maintainable code. You write simple Next.js & react snippts.",
  model: gemini({ model: "gemini-2.0-flash-lite" }),
});

const { output } = await codeAgent.run(
  `Write the following snippts: ${event.data.value}`,
);


    return { output };
  },
);
