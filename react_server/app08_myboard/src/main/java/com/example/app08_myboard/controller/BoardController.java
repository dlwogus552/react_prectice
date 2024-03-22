package com.example.app08_myboard.controller;

import com.example.app08_myboard.dto.Board;
import com.example.app08_myboard.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class BoardController {
    private final BoardService boardService;
    //전체보기
    @GetMapping("/api/list")
    public List<Board> list(){
        return boardService.list();
    }

}
