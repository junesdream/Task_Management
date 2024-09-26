package com.rainbowdev.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data // Lombok Annotation, die automatisch Getter, Setter, toString, equals und hashCode Methoden generiert
@Document(collection = "tasks") // Für MongoDB-Speicherung
public class Task {
    @Id
    private String id;
    private String title;
    private String description;
    private Date dueDate;
    private boolean completed;
}
