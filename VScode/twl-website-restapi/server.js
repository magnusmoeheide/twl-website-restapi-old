const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const port = 3001

const authorRoutes = require('./src/authors/author_routes');
const articleRoutes = require('./src/articles/article_routes');
const wwdRoutes = require('./src/whatwedo/wwd_routes');
const wwdSectionsRoutes = require('./src/wwdsections/wwd_sections_routes');
const ognRoutes = require('./src/ourgreatestneeds/ogn_routes');
const teamRoutes = require('./src/team/team_routes');
const articleSectionsRoutes = require('./src/articlesections/article_sections_routes');

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get("/", (req, res) => {
  res.send("TWL DB")
});

app.use('/authors', authorRoutes);
app.use('/articles', articleRoutes);
app.use('/whatwedo', wwdRoutes);
app.use('/wwdsections', wwdSectionsRoutes);
app.use('/ourgreatestneeds', ognRoutes);
app.use('/team', teamRoutes);
app.use('/articlesections', articleSectionsRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})