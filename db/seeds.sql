\c employee_tracker_db;

INSERT INTO department (id, name)
    VALUES 
        (101, 'Utilities'),
        (102, 'Administration'),
        (103, 'Management'),
        (104, 'Human Resources'),
        (105, 'Engineering'),
        (106, 'Information Technology'),
        (107, 'Special services');

INSERT INTO role (id, title, salary, department_id)
    VALUES
        (777, 'Operations Coordinator', 70000, 102),
        (555, 'Project Manager', 90000, 103),
        (444, 'Counselor', 40000, 104),
        (333, 'GIS Technician', 80000, 101),
        (222, 'Cleaner', 30000, 107),
        (111, 'Chief Executive Office', 100000, 104),
        (888, 'Chief Financial Officer', 120000, 102);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES
        (11, 'Sushi', 'Japan', 777, 0000),
        (22, 'Lo Mein', 'China', 444, 1111),
        (33, 'Rice', 'India', 333, 2222),
        (44, 'Lettuce', 'Earth', 222, 3333),
        (55, 'Apple', 'Cider', 111, 4444),
        (66, 'Blackberry', 'Fruit', 888, 5555),
        (77, 'Blueberry', 'Vegetable', 222, 7777),
        (88, 'Soup', 'Noodle', 777, 8888),
        (99, 'Pasta', 'Parmesan', 333, 9999);
