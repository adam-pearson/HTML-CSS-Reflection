<?php

function pullNews($db) {
    try {
        $query = "SELECT news.heading, news.description, news.news_image, news.date, authors.full_name, authors.profile_image, category.category_name
                  FROM news
                  JOIN authors ON news.author_id = authors.id
                  JOIN category ON news.category_id = category.id
                  ORDER BY news.date ASC
                  LIMIT 3";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    } catch (Exception $e) {
        echo "Unable to connect - ";
        echo $e->getMessage();
    }
}