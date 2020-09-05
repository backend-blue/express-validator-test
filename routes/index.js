const express = require('express');
const router = express.Router();
const { query, validationResult } = require("express-validator");

/* GET home page. */
router.get('/',
    query('limit').customSanitizer( limit => { return parseInt(limit)}),
    (req, res, next)=>{
      const {errors} = validationResult(req);
      if(errors.length > 0){
        return res.json({status: false, message: errors})
      }
      next();
      },
    (req, res)=>{
        res.send(req.query);
    }
);

module.exports = router;
