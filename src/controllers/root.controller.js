import Root from "../model/root.model.js";

const create = (req, res) => {
  const payload = new Root({
    title: req.body.title,
    desc: req.body.desc,
    isAvail: req.body.isAvail,
  });

  payload.create(payload, (err, data) => {
    if (err) {
      res.status(500);
      res.send({
        message: "[500] Error",
        data: err.message,
      });
    }
    res.status(201);
    res.send({
      message: "[201] Created Successfuly",
      data: {
        url: res.originalUrl,
        data,
      },
    });
  });
};

const getAll = (req, res) => {
  Root.getAll((err, data) => {
    if (err) {
      res.status(500);
      res.send({
        message: err.message,
      });
    }
    res.status(200);
    res.send({
      message: data,
    });
  });
};

const getId = (req, res) => {
  const payload = req.params.id;

  Root.getId(payload, (err, data) => {
    if (err) {
      res.status(400);
      res.send({
        message: err.message,
      });
    }
    res.status(200);
    res.send({
      message: data,
    });
  });
};

const updateId = (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  Root.updateId(new Root(payload), id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404);
        res.send({
          message: "[404]Coffee not found",
          err
        });
      }
      res.status(500);
      res.send({
        message: "[500] error update message",
        err
      });
    }
    res.status(201);
    res.send({data});
  });
};

export { create, getAll, getId, updateId };
