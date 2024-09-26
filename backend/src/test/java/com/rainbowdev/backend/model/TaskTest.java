package com.rainbowdev.backend.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class TaskTest {

    private Task task;

    @BeforeEach
    void setUp() {
        task = new Task();
    }

    @Test
    void testSetAndGetId() {
        Long id = 1L;
        task.setId(id);
        assertEquals(id, task.getId());
    }

    @Test
    void testSetAndGetTitle() {
        String title = "Test Task";
        task.setTitle(title);
        assertEquals(title, task.getTitle());
    }

    @Test
    void testSetAndGetDescription() {
        String description = "This is a test task";
        task.setDescription(description);
        assertEquals(description, task.getDescription());
    }

    @Test
    void testSetAndGetDueDate() {
        LocalDate dueDate = LocalDate.now();
        task.setDueDate(dueDate);
        assertEquals(dueDate, task.getDueDate());
    }

    @Test
    void testSetAndIsCompleted() {
        boolean completed = true;
        task.setCompleted(completed);
        assertEquals(completed, task.isCompleted());
    }
}