package com.rainbowdev.backend.repository;

import com.rainbowdev.backend.model.Task;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class TaskRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private TaskRepository taskRepository;

    @Test
    void testSaveTask() {
        // Given
        Task task = new Task();
        task.setTitle("Test Task");
        task.setDescription("This is a test task");

        // When
        Task savedTask = taskRepository.save(task);

        // Then
        assertNotNull(savedTask.getId());
        assertEquals("Test Task", savedTask.getTitle());
        assertEquals("This is a test task", savedTask.getDescription());
    }

    @Test
    void testFindAllTasks() {
        // Given
        Task task1 = new Task();
        task1.setTitle("Task 1");
        entityManager.persist(task1);

        Task task2 = new Task();
        task2.setTitle("Task 2");
        entityManager.persist(task2);

        // When
        List<Task> tasks = taskRepository.findAll();

        // Then
        assertEquals(2, tasks.size());
        assertTrue(tasks.stream().anyMatch(task -> "Task 1".equals(task.getTitle())));
        assertTrue(tasks.stream().anyMatch(task -> "Task 2".equals(task.getTitle())));
    }

    @Test
    void testFindTaskById() {
        // Given
        Task task = new Task();
        task.setTitle("Test Task");
        entityManager.persist(task);

        // When
        Optional<Task> foundTask = taskRepository.findById(task.getId());

        // Then
        assertTrue(foundTask.isPresent());
        assertEquals("Test Task", foundTask.get().getTitle());
    }

    @Test
    void testDeleteTask() {
        // Given
        Task task = new Task();
        task.setTitle("Test Task");
        entityManager.persist(task);

        // When
        taskRepository.delete(task);

        // Then
        assertFalse(taskRepository.findById(task.getId()).isPresent());
    }
}