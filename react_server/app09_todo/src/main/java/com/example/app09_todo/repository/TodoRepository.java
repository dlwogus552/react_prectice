package com.example.app09_todo.repository;

import com.example.app09_todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository
        extends JpaRepository<Todo, Long> {
    List<Todo> findAllByOrderByNumDesc();

}
