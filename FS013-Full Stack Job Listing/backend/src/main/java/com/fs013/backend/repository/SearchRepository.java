package com.fs013.backend.repository;

import com.fs013.backend.model.Post;

import java.util.List;

public interface SearchRepository {
    List<Post> findByText(String text);
}
