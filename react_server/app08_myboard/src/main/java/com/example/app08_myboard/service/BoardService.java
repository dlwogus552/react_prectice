package com.example.app08_myboard.service;

import com.example.app08_myboard.dto.Board;
import com.example.app08_myboard.mapper.BoardMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;
    //전체보기
    public List<Board> list(){
       return boardMapper.list();
    }
}
