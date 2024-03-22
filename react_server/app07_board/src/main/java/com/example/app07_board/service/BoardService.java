package com.example.app07_board.service;

import com.example.app07_board.model.Board;
import com.example.app07_board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;
 //추가
    public Board insert(Board board){
        return  boardRepository.save(board);
    }
    public List<Board> list(){
        return  boardRepository.findAll();
    }
    //삭제
    public void delete(Long num){
        boardRepository.deleteById(num);
    }
}
