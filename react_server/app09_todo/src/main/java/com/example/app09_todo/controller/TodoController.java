package com.example.app09_todo.controller;

import com.example.app09_todo.model.Todo;
import com.example.app09_todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;
    //추가
    @PostMapping("/api/insert")
    public Todo insert(@RequestBody Todo todo){
        return  todoService.insert(todo);
    }
    //전체보기
    @GetMapping("/api/list")
    public List<Todo> list(){
        return  todoService.list();
    }
    //삭제
    @DeleteMapping("/api/delete/{num}")
    public String delete(@PathVariable long num){
        todoService.delete(num);
        return "success";
    }
}
