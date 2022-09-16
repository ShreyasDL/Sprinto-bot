const Policy = require("../models/policy-model");


const getPolicies = async (req, res, next) => {
  const { policyId } = req.body;
  console.log(policyId)
  let policy;

  try {
    policy = await Policy.findById(policyId);
  }catch(error){
    console.log(error)
  }

  if (!policy) {
    console.log(error)
  }
  
  res.json({ policy: policy.toObject({getters:true}) });
};

exports.getPolicies = getPolicies