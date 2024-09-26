package com.rainbowdev.backend.service;

import com.rainbowdev.backend.model.Task;
import com.rainbowdev.backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public Task createTask(Task task) {
        System.out.println("Versuche Task zu erstellen: " + task);
        try {
            Task savedTask = taskRepository.save(task);
            System.out.println("Task erfolgreich erstellt: " + savedTask);
            return savedTask;
        } catch (Exception e) {
            System.err.println("Fehler beim Erstellen des Tasks: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setDueDate(taskDetails.getDueDate());
        task.setCompleted(taskDetails.isCompleted());
        return taskRepository.save(task);
    }

    public boolean deleteTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        taskRepository.delete(task);
        return false;
    }
}
