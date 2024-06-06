const express = require("express");
const db = require("./db");

const app = express();
const port = 3001;

app.get("/api/getVendorUsers", (req, res) => {
  const { prId, custOrId } = req.query;
  console.log(req.query);
  if (!prId || !custOrId) {
    res.status(400).send("prId & custOrId are mandatory");
  }
  const sqlQuery = `SELECT vu.VendorOrganizationId AS supplierId,vu.UserName,vu.Name
   from PrLineItems AS pli JOIN VendorUsers AS vu ON 
   FIND_IN_SET(vu.VendorOrganizationId,pli.suppliers) 
   where pli.PurchaseRequestId=? AND pli.custOrgId=? AND vu.Role="admin"
   GROUP By vu.VendorOrganizationId, vu.UserNAme,vu.Name`;

  db.query(sqlQuery, [prId, custOrId], (err, data) => {
    if (err) {
      console.log(res.status(500).send(err));
    }
    res.json(data);
    console.log("hvjhg", data);
  });
});

app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
