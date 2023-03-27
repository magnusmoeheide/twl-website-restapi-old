const express = require('express');
const app = express();
const port = 3001;

const schoolRoutes = require('./src/schools/school_routes');
const classRoutes = require('./src/classes/class_routes');
const adminRoutes = require('./src/admins/admin_routes');
const teacherRoutes = require('./src/teachers/teacher_routes');
const gradeRoutes = require('./src/grades/grade_routes');
const studentRoutes = require('./src/students/student_routes');
const mapRoutes = require('./src/maps/map_routes');

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.use('/schools', schoolRoutes);
app.use('/classes', classRoutes);
app.use('/admins', adminRoutes);
app.use('/teachers', teacherRoutes);
app.use('/grades', gradeRoutes);
app.use('/students', studentRoutes);
app.use('/maps', mapRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));