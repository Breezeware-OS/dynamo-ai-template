package net.breezeware.dynamo.dynamohealthshowcaseapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "net.breezeware" })
@EntityScan(basePackages = { "net.breezeware.dynamo.ai" })
@EnableJpaRepositories(basePackages = { "net.breezeware.dynamo.ai" })
@PropertySources({ @PropertySource(value = { "classpath:dynamo-auth.properties" }) })
// "classpath:dynamo-workflow.properties"
public class DynamoAITemplateApplication {
    public static void main(String[] args) {
        SpringApplication.run(DynamoAITemplateApplication.class, args);
    }

}
