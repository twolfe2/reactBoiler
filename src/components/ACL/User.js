import uuid from 'uuid';

export default class User {
  constructor(name, userGroups = []) {
    this.name = name;
    this.userGroups = userGroups;
    this.userId = uuid.v4();
    this.canRead = [];
    this.canWrite = [];
  }

  getId() {
    return this.userId;
  }

  getUserGroups() {
    return this.userGroups;
  }

  addUserGroup(groupId) {
    this.userGroups.push(groupId);
    userGroups[groupId].push(this.userId);
  }

  grantReadPermission(resourceId) {
    resourcePermissions[resourceId].canRead.push(this.userId);
    this.canRead.push(resourceId);
  }

  grantWritePermission(resourceId) {
    resourcePermissions[resourceId].canWrite.push(this.userId);
    this.canWrite.push(resourceId);
  }

  revokePermission(resourceId, permissionType) {
    let currResource = resourcePermissions[resourceId];

    if(permissionType === 'Read') {
      let readIndex = currResource.canRead.indexOf(this.userId);

      // If the user has read permission, revoke it
      if(readIndex !== -1) {
        currResource.canRead.splice(readIndex, 1);
      }

    } else if(permissionType === 'Write') {
      let writeIndex = currResource.canWrite.indexOf(this.userId);
      if(writeIndex !== -1) {
        currResource.canWrite.splice(writeIndex, 1);
      }
    }
  }

  canRead(resourceId) {
    return resourcePermissions[resourceId].canRead.includes(this.userId);
  }

  canWrite(resourceId) {
    return resourcePermissions[resourceId].canWrite.includes(this.userId);
  }

  toJson() {


  }

}