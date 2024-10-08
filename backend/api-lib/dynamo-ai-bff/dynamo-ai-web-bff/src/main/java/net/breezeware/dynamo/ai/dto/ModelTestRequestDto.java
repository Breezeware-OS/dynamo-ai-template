package net.breezeware.dynamo.ai.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data transfer object (DTO) representing a model request.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModelTestRequestDto {

    /**
     * A system prompt that provides context, instructions, and guidelines to the AI
     * model before presenting it with a question or task.
     */
    @Schema(example = "You're assisting with questions about Application Lifecycle Management (ALM).", description = """
            A system prompt provides context, instructions, and guidelines to the AI model \
            before presenting it with a question or task.""")
    private String systemPrompt;

    /**
     * The temperature setting controls the creativity of generated text. Higher
     * values make the output more random, while lower values make it more focused
     * and predictable.
     */
    @Schema(example = "0.5", description = """
            The temperature setting controls the creativity of generated text. Higher values make the \
            output more random, while lower values make it more focused and predictable.""")
    private float temperature;

    /**
     * The top_p setting controls the number of possible words considered for
     * generation. A higher top_p value includes more potential words, increasing
     * the diversity of the generated text.
     */
    @Schema(example = "0.8", description = """
            The top_p setting controls the number of possible words considered for generation. A higher top_p \
            value includes more potential words, increasing the diversity of the generated text.""")
    private float topP;

    /**
     * The message for the AI model.
     */
    @Schema(example = "How can I help you today?", description = "The message for the AI model.")
    @NotBlank(message = "Message is missing or blank.")
    private String message;
}
