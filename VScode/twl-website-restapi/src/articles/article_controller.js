const pool = require('../../db');
const queries = require('./article_queries');

const getArticles = (req, res) => {
    pool.query(queries.getArticles, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getNewestArticle = (req, res) => {
  pool.query(queries.getNewestArticle, (error, results) => {
    if (error) throw error;
    const date = new Date(results.rows[0].publish_date);
    console.log("date", date)
    const formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    console.log("formatted date", formattedDate)
    res.status(200).json(formattedDate);
  });
};

const getArticlesWithFirstSection = (req, res) => {
  pool.query(queries.getArticlesWithFirstSection, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};


const getArticlesById = (req, res) => {
    const articleId = parseInt(req.params.id);
    pool.query(queries.getArticlesById, [articleId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
};

const getArticleSectionsByArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    pool.query(queries.getArticleSections, [articleId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
};

// const getArticleWithInstructor = (req, res) => {
//   const articleId = parseInt(req.params.id);
//   pool.query(queries.getArticleWithInstructor, [articleId], (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows[0]);
//   });
// };


const updateArticles = (req, res) => {
  const id = parseInt(req.params.id);
  const { publish_date, edit_date, published } = req.body;
  
  pool.query(
    queries.updateArticles, 
    [ publish_date, edit_date, published, id], 
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Article updated successfully!", publish_date, edit_date, published });
    }
  );
};

const deleteArticles = (req, res) => {
  const id = parseInt(req.params.id);
  // check if article exists
  pool.query(queries.getArticlesById, [id], (error, results) => {
      const noArticleFound = !results.rows.length;
      if (noArticleFound) {
          res.send("Article does not exist in the database!");
      }

      // delete article from db
      pool.query(queries.deleteArticles, [id], (error, results) => {
          if(error) throw error;
          res.status(200).send("Article removed succesfully!")
      })
  })
}

const createArticles = (req, res) => {
  const { publish_date, edit_date, published } = req.body;

  // Add article to db
  pool.query(queries.createArticles, [publish_date, edit_date, published], (error, results) => {
    if (error) throw error;
    res.status(201).json(results.rows[0]);
  });
};

const getArticlesWithAuthors = (req, res) => {
  pool.query(queries.getArticlesWithAuthors, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const createAuthorForArticle = (req, res) => {
  const { selectedAuthor, selectedArticle } = req.body;
  console.log('Request Body:', req.body);

  const authorId = parseInt(selectedAuthor);
  const articleId = parseInt(selectedArticle);
  
  // Check if article_id is an integer
  if (!Number.isInteger(articleId)) {
  console.log('Invalid article_id:', articleId);
  res.status(400).send('article_id must be an integer');
  return;
  }
  
  console.log('Creating author for article:', articleId);
  
  // Add section to db
  pool.query(queries.createAuthorForArticle, [authorId, articleId], (error, results) => {
  if (error) {
  console.error('Error creating author for article:', error); // Log the error
  throw error;
  }
  console.log('Author created for article:', articleId);
  res.status(201).json(results.rows[0]);
  });
  };



module.exports = {
    getArticles, 
    getNewestArticle,
    getArticlesById,

    getArticleSectionsByArticle,
    //getArticleWithInstructor,

    updateArticles,
    deleteArticles,
    createArticles,

    getArticlesWithFirstSection,

    getArticlesWithAuthors,
    createAuthorForArticle
}