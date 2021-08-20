BEGIN;

-- Create Author Table

CREATE TABLE `authors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `profile_image` varchar(255)
);

-- Insert Author Values

INSERT INTO authors (full_name, profile_image) VALUES ("Netmatters Ltd", "/img/news/author_images/Netmatters Ltd.png");
INSERT INTO authors (full_name, profile_image) VALUES ("Adam Greer", "/img/news/author_images/Adam Greer.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Bethany Shakespeare", "/img/news/author_images/Bethany Shakespeare.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Elliott Peacock", "/img/news/author_images/Elliott Peacock.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("James Gulliver", "/img/news/author_images/James Gulliver.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Joe Trower", "/img/news/author_images/Joe Trower.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Lewie Carton", "/img/news/author_images/Lewie Carton.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Lydia Whitney", "/img/news/author_images/Lydia Whitney.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Mark Reilly", "/img/news/author_images/Mark Reilly.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Rob George", "/img/news/author_images/Rob George.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Simon Wright", "/img/news/author_images/Simon Wright.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Tessa Dempsey", "/img/news/author_images/Tessa Dempsey.jpg");
INSERT INTO authors (full_name, profile_image) VALUES ("Tom Lancaster", "/img/news/author_images/Tom Lancaster.jpg");


-- Create Category Table

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `category_name` varchar(255)
);

-- Add Categories Values

INSERT INTO category (category_name) VALUES ("case studies");
INSERT INTO category (category_name) VALUES ("portfolio");
INSERT INTO category (category_name) VALUES ("guides");
INSERT INTO category (category_name) VALUES ("news");
INSERT INTO category (category_name) VALUES ("insights");
INSERT INTO category (category_name) VALUES ("careers");
INSERT INTO category (category_name) VALUES ("environmental");


-- Create News Table

CREATE TABLE `news` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `heading` varchar(255),
  `description` varchar(255),
  `news_image` varchar(255),
  `date` datetime,
  `category_id` int,
  `author_id` int
);

-- Insert News Values

INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Web Project Manager", "Salary Range 20k- 28k - DOE + Bonus Hours 40 hours per week, Monday - Friday Location Wymondham, Nor...", "/img/news/news_images/web-project-manager-xbT9.jpg", "2021-08-19", 6, 13);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Why is 3CX a great business phone system?", "Over the past 18 months, we’ve all gotten used to online video meetings, working from home, and find...", "/img/news/news_images/why-is-3cx-pZ6u.jpg", "2021-10-08", 5, 1);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Jamie Sutherland is promoted to Commercial He...", "Here at Netmatters, we are continuing to grow and develop our business, and our people. We are proud...", "/img/news/news_images/jamie-sutherland-is-hqaP.jpg", "2021-10-08", 4, 1);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Don't Neglect the Cyber Security Basics", "As you may have seen earlier in the year, Ireland’s Health Service Executive (HSE) had to shut down...", "/img/news/news_images/dont-neglect-the-t2lB.jpg", "2021-08-09", 4, 1);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("July 2021 Notables", "Every month we celebrate the most notable of employees here at Netmatters. Each department head is a...", "/img/news/news_images/july-2021-notables-XUwV.jpg", "2021-08-05", 4, 1);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Receptionist", "Salary Range £19,000 Hours 40 hours per week, Monday - Friday Location Wymondham, Norfolk What We Ar...", "/img/news/news_images/receptionist-Lxft.jpg", "2021-08-03", 6, 3);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Happy 50th Birthday Mark!", "We’re celebrating the 50th birthday of one of our valued members of the team here at Netmatters, our...", "/img/news/news_images/happy-50th-birthday-cERw.jpg", "2021-08-02", 4, 1);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Happy 25th Birthday Ashley!", "At Netmatters we like to recognise notable life events and make all staff feel part of a team. This...", "/img/news/news_images/happy-25th-birthday-dxPB.jpg", "2021-08-02", 4, 1);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("3rd Line Support Technician", "Salary Range Salary - Dependent on Experience Hours 40 hours per week, Monday - Friday Location Camb...", "/img/news/news_images/3rd-line-support-dDTu.jpg", "2021-07-29", 6, 10);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("2nd Line Support Technician", "Salary Range £24k-£30k + Bonuses + Pension Hours 40 hours per week, Monday - Friday Location Wymondh...", "/img/news/news_images/2nd-line-support-eTYH.jpg", "2021-07-28", 6, 10);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Business Development / Account Manager", "Salary Range £25k+ per annum + Bonus + Benefits Hours 40 hours per week, Monday – Friday Location Wy...", "/img/news/news_images/business-development-pAAs.jpg", "2021-07-22", 6, 4);
INSERT INTO news (heading, description, news_image, date, category_id, author_id) VALUES ("Why Shopify Is The Right Ecommerce Platform f...", "Shopify is an all-in-one eCommerce platform to start, run and grow a business. It currently powers o...", "/img/news/news_images/why-shopify-is-vewi.jpg", "2021-07-20", 5, 1);



-- Set Foreign Key Constraints

ALTER TABLE `news` ADD FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`);

ALTER TABLE `news` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

COMMIT;