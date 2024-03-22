package com.example.project03_spring.repository;

import com.example.project03_spring.model.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

}
