import { Configuration } from "openai";
export const configureOpenAi = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANISATION,
    });
    return config;
};
//# sourceMappingURL=openai-config.js.map