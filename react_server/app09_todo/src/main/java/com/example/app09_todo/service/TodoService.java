package com.example.app09_todo.service;

import com.example.app09_todo.model.Todo;
import com.example.app09_todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    //추가
    public Todo insert(Todo todo){
        return todoRepository.save(todo);
    }
    //전체보기
    public List<Todo> list(){
        //return  todoRepository.findAll();
        return  todoRepository.findAllByOrderByNumDesc();
    }
    //삭제
    public void delete(long num){
        todoRepository.deleteById(num);
    }
}
