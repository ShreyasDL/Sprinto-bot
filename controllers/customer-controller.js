const mongoose = require("mongoose");

const Policy = require("../models/policy-model");
const Customer = require("../models/customer-model");

const getApprovals = async (req, res, next) => {
  const { designation, policy_id, mail_ids, description, title } = req.body;

  console.log(
    "Recieved data " +
      designation +
      " " +
      policy_id +
      " " +
      mail_ids +
      " " +
      title +
      " " +
      description
  );

  // Retrieving POlicy information from Backend
  let policy;
  try {
    policy = await Policy.findById(policy_id);
  } catch (error) {
    console.log(error);
  }
  if (!policy) {
    console.log("This Policy id doesnot exist");
    new_policy = new Policy({
      title,
      description,
    });
    try {
      await new_policy.save();
      const new_policy_id = await Policy.findOne({
        title: title,
      });
      console.log(
        "Created new policy object" + new_policy_id._id
      );
      const customer_data = new Customer({
        designation,
        policy_id : new_policy_id._id
      });
      await customer_data.save();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error saving data into database" });
    }
    res.status(201).json({ message: "Data recieved" });
  } else {
    console.log("Policy information" + policy);
  }
};

exports.getApprovals = getApprovals;
