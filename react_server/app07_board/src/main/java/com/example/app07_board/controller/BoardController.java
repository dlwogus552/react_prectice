package com.example.app07_board.controller;

import com.example.app07_board.model.Board;
import com.example.app07_board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    //전체보기
    @GetMapping("/api/list")
    public List<Board> list(){
        return  boardService.list();
    }
    //추가
    @PostMapping("/api/insert")
    public  Board insert(@RequestBody Board board){
        return boardService.insert(board);

    }
    //삭제
    @DeleteMapping("/api/delete/{num}")
    public void delete(@PathVariable Long num){
        boardService.delete(num);
    }
}
