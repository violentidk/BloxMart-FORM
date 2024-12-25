// src/main/java/com/example/webapp/FormController.java
package com.example.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/form")
public class FormController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/submit")
    public String submitForm(@RequestBody FormData formData) {
        // Save form submission to the database
        reviewService.saveFormData(formData);
        return "Form submitted successfully!";
    }

    @GetMapping("/admin")
    public List<FormData> getAllSubmissions() {
        return reviewService.getAllSubmissions();
    }

    @PostMapping("/admin/review/{id}")
    public String reviewSubmission(@PathVariable Long id, @RequestBody String review) {
        reviewService.saveReview(id, review);
        return "Review submitted successfully!";
    }
}
