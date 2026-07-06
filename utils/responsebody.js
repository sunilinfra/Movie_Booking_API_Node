const erroResponseBody = {
    err: {},
    data: {},
    message: "default",
    success: false
}
const sucessResponseBody = {
    success: true,
    message: "Sucessfully proceed the requiest",
    data: {},
    error: {}
}

module.exports = {
    erroResponseBody,
    sucessResponseBody
}