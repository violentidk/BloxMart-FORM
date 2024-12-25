// src/main/java/com/example/webapp/ReviewService.java
package com.example.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private FormDataRepository formDataRepository;

    public void saveFormData(FormData formData) {
        formDataRepository.save(formData);
    }

    public List<FormData> getAllSubmissions() {
        return formDataRepository.findAll();
    }

    public void saveReview(Long id, String review) {
        FormData formData = formDataRepository.findById(id).orElse(null);
        if (formData != null) {
            formData.setReview(review);
            formDataRepository.save(formData);
        }
    }
}
