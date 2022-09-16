# Sprinto-bot

DB Schema can be found in ./models folder

API endpoints :

GET - api/policies => To get available policies
POST - api/customer/get_approval => Creates new entry in Policy DB if it is a new policy and updates Customer DB. If the policy is already exists it will ask users for their acknowledgement(yet to implement)

Send these data in request body 
{
    "designation" : "",
    "policy_id" : "",
    "mail_ids" : ["test@test.com", "test2@test.com",...],
    "title" : "",
    "description" : ""
}

title and description are required only if it is a new policy. FOr new policy customer can give any id they want, however we create new ID and use it. The customer provided id is only used to check whether it is a new policy or not.
