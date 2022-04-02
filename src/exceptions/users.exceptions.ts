class UserNotFoundException extends Error {
  constructor() {
    super('User not found');
  }
}

export { UserNotFoundException };
