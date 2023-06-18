import Root from "../model/root.model.js";

const create = (req, res) => {
  const payload = req.body;

  Root.create(new Root(payload), (err, data) => {
    if (err) {
      res.status(500);
      res.send({
        err,
      });
    }
    res.status(201);
    res.send({ data });
  });
};

const getAll = (req, res) => {
  Root.getAll((err, data) => {
    if (err) {
      res.status(500);
      res.send({
        err
      });
    }
    res.status(200);
    res.send({
      data,
    });
  });
};

const getId = (req, res) => {
  const payload = req.params.id;

  Root.getId(payload, (err, data) => {
    if (err) {
      res.status(400);
      res.send({err});
    }
    res.status(200);
    res.send({data});
  });
};

const updateId = (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  Root.updateId(new Root(payload), id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404);
        res.send({err});
      }
      res.status(500);
      res.send({
        err,
      });
    }
    res.status(201);
    res.send({ data });
  });
};

export { create, getAll, getId, updateId };
