package com.rainbowdev.backend.repository;

import com.rainbowdev.backend.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    // Optional: custom query methods if needed
}
