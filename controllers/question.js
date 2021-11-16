const question = (req, res) => {
    res.status(200).render('answer', {answer: req.params.answ})
    console.log(req.params.answ);
}

module.exports = question