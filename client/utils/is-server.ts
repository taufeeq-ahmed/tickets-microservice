function IsServer() {
  return typeof (window) === "undefined"
}

export default IsServer