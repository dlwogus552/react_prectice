package com.example.project03_spring.service;

import com.example.project03_spring.model.Diary;
import com.example.project03_spring.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class DiaryService {
    private final DiaryRepository diaryRepository;

    public List<Diary> diaryList(){
        return diaryRepository.findAll();
    }

    public Diary insertDiary(Diary diary){
        return diaryRepository.save(diary);
    }

    public void deleteDiary(Long id){
        diaryRepository.deleteById(id);
    }

    public Diary updateDiary(Diary diary){
        Diary d = diaryRepository.findById(diary.getId()).orElseThrow();
        d.setContent(diary.getContent());
        d.setDate(diary.getDate());
        d.setEmotionId(diary.getEmotionId());
        return diaryRepository.save(d);
    }
}
