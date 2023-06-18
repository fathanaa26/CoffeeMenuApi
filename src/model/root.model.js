import db from "./mysql_connector.js";

class Root {
  constructor(bodyObj) {
    this.title = bodyObj.title;
    this.desc = bodyObj.desc;
    this.isAvail = bodyObj.isAvail;
  }

  static create(bodyPayload, result) {
    const query = "INSERT INTO coffee_list SET ?";
    db.query(query, bodyPayload, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, {res,data:{...bodyPayload}});
    });
  }

  static getAll(result) {
    let query = "SELECT * FROM coffee_list";

    db.query(query, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    });
  }

  static getId(idPayload, result) {
    let query = "SELECT * FROM coffee_list WHERE `id` = ?";
    db.query(query, idPayload, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
    });
  }

  static updateId(bodyPayload, idPayload, result) {
    let query = "UPDATE coffee_list SET `title` = ?, `desc` = ?, `isAvail` = ? WHERE id = ?";

    db.query(query, [bodyPayload.title,bodyPayload.desc,bodyPayload.isAvail,idPayload], (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, {res,data:{
        id:idPayload,
        ...bodyPayload
      }});
    });
  }
}

export default Root;
