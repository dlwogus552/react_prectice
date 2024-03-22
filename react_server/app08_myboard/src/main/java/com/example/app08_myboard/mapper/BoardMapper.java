package com.example.app08_myboard.mapper;

import com.example.app08_myboard.dto.Board;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface BoardMapper {
    //전체보기
    @Select("select * from board")
    public List<Board> list();


}
