package net.breezeware.dynamo.ai.exception;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class OpenAiException {
    @JsonProperty("error")
    private OpenAiError openAiError;
}