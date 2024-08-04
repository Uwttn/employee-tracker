\c employee_tracker_db;

INSERT INTO department (id, name)
    VALUES 
        (1, 'Utilities'),
        (2, 'Administration'),
        (3, 'Management'),
        (4, 'Human Resources'),
        (5, 'Engineering'),
        (6, 'Information Technology'),
        (7, 'Special services');

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Operations Coordinator', 70000, 1),
        ('Project Manager', 90000, 2),
        ('Counselor', 40000, 3),
        ('GIS Technician', 80000, 4),
        ('Cleaner', 30000, 5),
        ('Chief Executive Office', 100000, 6),
        ('Chief Financial Officer', 120000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Sushi', 'Japan', 1, 1),
        ('Lo Mein', 'China', 2, 2),
        ('Rice', 'India', 3, 3),
        ('Lettuce', 'Earth', 4, 4),
        ('Apple', 'Cider', 5, 5),
        ('Blackberry', 'Fruit', 6, 6),
        ('Blueberry', 'Vegetable', 7, 7);
