\c employee_tracker_db;

INSERT INTO department (id, name)
    VALUES 
        (101, 'Utilities'),
        (202, 'Administration'),
        (303, 'Management'),
        (404, 'Human Resources'),
        (505, 'Engineering'),
        (606, 'Information Technology'),
        (707, 'Special services');

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Operations Coordinator', 70000, 101),
        ('Project Manager', 90000, 202),
        ('Counselor', 40000, 303),
        ('GIS Technician', 80000, 404),
        ('Cleaner', 30000, 505),
        ('Chief Executive Office', 100000, 606),
        ('Chief Financial Officer', 120000, 707);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Sushi', 'Japan', 1, 1),
        ('Lo Mein', 'China', 2, 2),
        ('Rice', 'India', 3, 3),
        ('Lettuce', 'Earth', 4, 4),
        ('Apple', 'Cider', 5, 5),
        ('Blackberry', 'Fruit', 6, 6),
        ('Blueberry', 'Vegetable', 7, 7);
