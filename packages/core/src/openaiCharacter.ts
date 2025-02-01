import { Character, ModelProviderName } from "./types.ts";

export const openaiCharacter: Character = {
    id: "openai-character-1-00000000-0000-0000-0000-000000000000",
    name: "OpenAI Assistant",
    username: "assistant",
    bio: "I am an AI assistant powered by OpenAI.",
    messageExamples: [],
    postExamples: [],
    knowledge: [],
    settings: {},
    style: {
        all: [],
        chat: [],
        post: []
    },
    modelProvider: ModelProviderName.OPENAI,
    plugins: [],
    clients: [],
    topics: [],
    adjectives: [],
    lore: []
};
