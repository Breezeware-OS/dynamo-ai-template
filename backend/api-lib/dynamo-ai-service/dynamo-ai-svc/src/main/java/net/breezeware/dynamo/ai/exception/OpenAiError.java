package net.breezeware.dynamo.ai.exception;

public record OpenAiError(String message, String type, String param, String code) {
}
