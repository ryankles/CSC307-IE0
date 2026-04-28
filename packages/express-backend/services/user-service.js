import User from "../models/user.js";

function getUsers(name, job) {
  let promise;
  if (name === undefined && job === undefined) {
    promise = User.find();
  } else if (name && !job) {
    promise = findUserByName(name);
  } else if (job && !name) {
    promise = findUserByJob(job);
  } else {
    promise = User.find({ name: name, job: job });
  }
  return promise;
}

function findUserById(id) {
  return User.findById(id);
}

function addUser(user) {
  const userToAdd = new User(user);
  return userToAdd.save();
}

function findUserByName(name) {
  return User.find({ name: name });
}

function findUserByJob(job) {
  return User.find({ job: job });
}

function deleteUserById(id) {
  return User.findByIdAndDelete(id);
}

export default {
  addUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
  deleteUserById,
};
