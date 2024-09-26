package com.rainbowdev.backend.controller;

import com.rainbowdev.backend.model.Task;
import com.rainbowdev.backend.service.TaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class TaskControllerTest {

    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskController taskController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTasks() {
        // Given
        Task task1 = new Task();
        Task task2 = new Task();
        List<Task> tasks = Arrays.asList(task1, task2);

        when(taskService.getAllTasks()).thenReturn(tasks);

        // When
        List<Task> result = taskController.getAllTasks();

        // Then
        assertEquals(2, result.size());
        verify(taskService, times(1)).getAllTasks();
    }

    @Test
    void testGetTaskById() {
        // Given
        Long taskId = 1L;
        Task task = new Task();
        task.setId(taskId);

        when(taskService.getTaskById(taskId)).thenReturn(task);

        // When
        Task result = taskController.getTaskById(taskId);

        // Then
        assertEquals(taskId, result.getId());
        verify(taskService, times(1)).getTaskById(taskId);
    }

    @Test
    void testCreateTask() {
        // Given
        Task task = new Task();
        task.setTitle("Test Task");

        when(taskService.createTask(task)).thenReturn(task);

        // When
        ResponseEntity<Task> response = taskController.createTask(task);

        // Then
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(task, response.getBody());
        verify(taskService, times(1)).createTask(task);
    }

    @Test
    void testCreateTask_Exception() {
        // Given
        Task task = new Task();
        task.setTitle("Test Task");

        when(taskService.createTask(task)).thenThrow(new RuntimeException("Test Exception"));

        // When
        ResponseEntity<Task> response = taskController.createTask(task);

        // Then
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        verify(taskService, times(1)).createTask(task);
    }

    @Test
    void testUpdateTask() {
        // Given
        Long taskId = 1L;
        Task taskDetails = new Task();
        taskDetails.setTitle("Updated Task");

        when(taskService.updateTask(taskId, taskDetails)).thenReturn(taskDetails);

        // When
        Task result = taskController.updateTask(taskId, taskDetails);

        // Then
        assertEquals("Updated Task", result.getTitle());
        verify(taskService, times(1)).updateTask(taskId, taskDetails);
    }

    @Test
    void testDeleteTask() {
        // Given
        Long taskId = 1L;

        when(taskService.deleteTask(taskId)).thenReturn(true);

        // When
        ResponseEntity<Void> response = taskController.deleteTask(taskId);

        // Then
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(taskService, times(1)).deleteTask(taskId);
    }

    @Test
    void testDeleteTask_NotFound() {
        // Given
        Long taskId = 1L;

        when(taskService.deleteTask(taskId)).thenReturn(false);

        // When
        ResponseEntity<Void> response = taskController.deleteTask(taskId);

        // Then
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        verify(taskService, times(1)).deleteTask(taskId);
    }
}