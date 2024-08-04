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

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Operations Coordinator', 70000, 101),
        ('Project Manager', 90000, 102),
        ('Counselor', 40000, 103),
        ('GIS Technician', 80000, 104),
        ('Cleaner', 30000, 105),
        ('Chief Executive Office', 100000, 106),
        ('Chief Financial Officer', 120000, 107);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Sushi', 'Japan', 1, 1),
        ('Lo Mein', 'China', 2, 2),
        ('Rice', 'India', 3, 3),
        ('Lettuce', 'Earth', 4, 4),
        ('Apple', 'Cider', 5, 5),
        ('Blackberry', 'Fruit', 6, 6),
        ('Blueberry', 'Vegetable', 7, 7);
