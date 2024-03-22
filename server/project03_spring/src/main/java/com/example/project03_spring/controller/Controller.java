package com.example.project03_spring.controller;

import com.example.project03_spring.model.Diary;
import com.example.project03_spring.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class Controller {
    private final DiaryService diaryService;
    //전체보기
    @GetMapping("/list")
    public List<Diary> diaryList(){
        return diaryService.diaryList();
    }

    @PostMapping("/insert")
    public Diary insert(@RequestBody Diary diary){
        return diaryService.insertDiary(diary);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id){
        diaryService.deleteDiary(id);
        return "success";
    }
    @PutMapping("/update")
    public Diary update(@RequestBody Diary diary){
        return diaryService.updateDiary(diary);
    }
}
