<?php

// ini_set('display_errors', 0);

/**
 *  Pull news posts from the database
 *  provide $db PDO object
 *  limits to 3 results
 */
function pullNews($db) {
    try {
        $query = "SELECT news.heading, news.description, news.news_image, news.date, authors.full_name, authors.profile_image, category.category_name
                  FROM news
                  JOIN authors ON news.author_id = authors.id
                  JOIN category ON news.category_id = category.id
                  ORDER BY news.date DESC
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


/**
 *  Post contact form data to db
 */

function postContact($db, $contactArray) {
    try {
        $query = "INSERT INTO contact (email, name, phone_number, subject, message, newsletter_check)
                 VALUES (:email, :name, :phone_number, :subject, :message, :newsletter_check)";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":email", $contactArray['email']);
        $stmt->bindParam(":name", $contactArray['name']);
        $stmt->bindParam(":phone_number", $contactArray['phone']);
        $stmt->bindParam(":subject", $contactArray['subject']);
        $stmt->bindParam(":message", $contactArray['message']);
        $stmt->bindParam(":newsletter_check", $contactArray['newsletter']);
        $stmt->execute();
    } catch (Exception $e) {
        echo "Unable to connect - ";
        echo $e->getMessage();
    }
}