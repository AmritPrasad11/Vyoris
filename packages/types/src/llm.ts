/**
 * LLM Provider Abstraction Interface
 * Ensures provider-agnostic integration across the Vyoris platform.
 */

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMCompletionOptions {
  temperature?: number;
  maxTokens?: number;
  stopSequences?: string[];
  responseFormat?: 'text' | 'json_object';
}

export interface LLMCompletionResponse {
  content: string;
  provider: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface ILLMProvider {
  readonly providerName: string;
  complete(
    messages: LLMMessage[],
    options?: LLMCompletionOptions
  ): Promise<LLMCompletionResponse>;
}
