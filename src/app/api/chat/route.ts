import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages,
    // @TODO: Add tools
    tools: {
      getTokenInfo: tool({
        description:
          "Get detailed information about an SPL token including price and market data",
        parameters: z.object({
          tokenMint: z.string().describe("The token's mint address"),
        }),
        execute: async () => {
          return "We're working on token info retrieval. Please check back later!";
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
